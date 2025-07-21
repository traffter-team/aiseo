'use client';

import React, { useState, useEffect } from 'react';
import { createProject, updateProject, getProjectById, createProjectFile, createAgentTask } from '@/lib/db/queries';
import { pageLibrary, getAvailablePages, getPageTemplate, type PageTemplate, type Section } from '@/lib/page-library';
// Remove server-side import

const countries = [
  { name: 'United States', code: 'US' },
  { name: 'United Kingdom', code: 'UK' },
  { name: 'Canada', code: 'CA' },
  { name: 'Australia', code: 'AU' },
  { name: 'Germany', code: 'DE' },
  { name: 'France', code: 'FR' },
  { name: 'Spain', code: 'ES' },
  { name: 'Italy', code: 'IT' },
  { name: 'Sweden', code: 'SE' },
  { name: 'Norway', code: 'NO' },
  // Add more as needed
];

const languages = [
  { name: 'English', code: 'EN' },
  { name: 'Spanish', code: 'ES' },
  { name: 'French', code: 'FR' },
  { name: 'German', code: 'DE' },
  { name: 'Italian', code: 'IT' },
  { name: 'Swedish', code: 'SV' },
  { name: 'Norwegian', code: 'NO' },
  // Add more as needed
];

const siteTypes = [
  { name: 'Single Page', value: 'single-page' },
  { name: 'Multi Page', value: 'multi-page' },
];


// Client-side function to call agent API
const executeAgentAPI = async (agentType: string, userInput: any) => {
  const response = await fetch('/api/claude/agent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      agentType,
      userInput
    })
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

const MainPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'initial' | 'site-type' | 'structure' | 'claude-response'>('initial');
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [createdProjectId, setCreatedProjectId] = useState<string | null>(null);
  const [claudeResponse, setClaudeResponse] = useState<string | null>(null);
  const [filledPrompt, setFilledPrompt] = useState<string | null>(null);
  const [researchResults, setResearchResults] = useState<any | null>(null);
  const [researchStatus, setResearchStatus] = useState<string>('idle');
  const [researchProgress, setResearchProgress] = useState<number>(0);
  const [researchStep, setResearchStep] = useState<string>('');

  // Client-side function to start background research
  const startBackgroundResearch = async (projectId: string, projectName: string, brandName: string, targetCountry: string, targetLanguage: string) => {
    try {
      const response = await fetch('/api/researcher/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectId,
          projectName,
          brandName,
          targetCountry,
          targetLanguage
        })
      });

      if (!response.ok) {
        console.error('Failed to start background research:', response.status);
      } else {
        console.log('Background research started successfully');
        setResearchStatus('started');
      }
    } catch (error) {
      console.error('Error starting background research:', error);
    }
  };

  // Client-side function to check research status
  const checkResearchStatus = async (projectId: string) => {
    try {
      const response = await fetch(`/api/researcher/start?projectId=${projectId}`);
      if (response.ok) {
        const data = await response.json();
        
        // Update progress and step information
        if (data.status) {
          setResearchProgress(data.status.progress || 0);
          setResearchStep(getStepDescription(data.status.progress || 0));
        }
        
        // Check for completion
        if (data.isCompleted && data.results) {
          setResearchResults(data.results);
          setResearchStatus('completed');
          setResearchProgress(100);
          setResearchStep('Research completed successfully!');
          return data.results;
        } else if (data.status?.status === 'completed' && data.results) {
          setResearchResults(data.results);
          setResearchStatus('completed');
          setResearchProgress(100);
          setResearchStep('Research completed successfully!');
          return data.results;
        } else if (data.status?.status === 'in_progress') {
          setResearchStatus('in_progress');
        } else if (data.status?.status === 'completed') {
          setResearchStatus('completed');
          setResearchProgress(100);
          if (data.results) {
            setResearchResults(data.results);
          }
        } else if (data.status?.status === 'failed') {
          setResearchStatus('failed');
          setResearchStep(data.status.error || 'Research failed');
        }
      }
    } catch (error) {
      console.error('Error checking research status:', error);
    }
    return null;
  };

  // Helper function to get step description based on progress
  const getStepDescription = (progress: number): string => {
    if (progress === 0) return 'Initializing research...';
    if (progress <= 10) return 'Starting research task...';
    if (progress <= 30) return 'Preparing research prompt...';
    if (progress <= 50) return 'Executing ChatGPT API call...';
    if (progress <= 70) return 'Processing research results...';
    if (progress <= 90) return 'Saving results to database...';
    if (progress < 100) return 'Finalizing research...';
    return 'Research completed!';
  };

  // Check research status periodically
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (createdProjectId && (researchStatus === 'started' || researchStatus === 'in_progress')) {
      interval = setInterval(async () => {
        await checkResearchStatus(createdProjectId);
      }, 2000); // Check every 2 seconds (faster)
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [createdProjectId, researchStatus]);
  const [formData, setFormData] = useState({
    brand_name: '',
    target_country: '',
    target_language: ''
  });
  const [siteTypeData, setSiteTypeData] = useState({
    site_type: ''
  });
  const [structureData, setStructureData] = useState({
    selectedPages: [] as string[],
    pageSections: {} as Record<string, string[]> // pageKey -> selected section names
  });

  // Function to generate project name
  const generateProjectName = (brandName: string, country: string, language: string): string => {
    const countryCode = countries.find(c => c.name === country)?.code || 'XX';
    const languageCode = languages.find(l => l.name === language)?.code || 'XX';
    const date = new Date().toISOString().split('T')[0].replace(/-/g, ''); // YYYYMMDD format
    
    // Clean brand name (remove special characters, replace spaces with hyphens)
    const cleanBrandName = brandName
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 20); // Limit length
    
    return `${cleanBrandName}-${countryCode}-${languageCode}-${date}`;
  };

  // Function to parse Claude's response and create project files
  const parseAndCreateProjectFiles = async (projectId: string, claudeResponse: string) => {
    try {
      // Try to parse Claude's response as JSON
      let fileStructure: any[];
      
      try {
        // Extract JSON from Claude's response (it might be wrapped in markdown)
        const jsonMatch = claudeResponse.match(/```json\n([\s\S]*?)\n```/) || 
                         claudeResponse.match(/```\n([\s\S]*?)\n```/) ||
                         claudeResponse.match(/\[[\s\S]*\]/);
        
        if (jsonMatch) {
          fileStructure = JSON.parse(jsonMatch[1] || jsonMatch[0]);
        } else {
          // If no JSON found, try to parse the entire response
          fileStructure = JSON.parse(claudeResponse);
        }
      } catch (parseError) {
        console.error('Failed to parse Claude response as JSON:', parseError);
        throw new Error('Claude response is not valid JSON');
      }

      // Validate that we have an array
      if (!Array.isArray(fileStructure)) {
        throw new Error('Claude response is not an array of files');
      }

      // Create project files in database
      const createdFiles = [];
      for (const file of fileStructure) {
        try {
          const projectFile = await createProjectFile({
            project_id: projectId,
            path: file.path || 'unknown-path',
            type: file.type || 'page',
            content: file.description || '',
            version: 1,
            blocks: file,
            author: 'new-project-agent'
          });
          
          if (projectFile) {
            createdFiles.push(projectFile);
          }
        } catch (fileError) {
          console.error('Failed to create project file:', file.path, fileError);
        }
      }

      return createdFiles;
    } catch (error) {
      console.error('Error parsing Claude response:', error);
      throw error;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSiteTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSiteTypeData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePageSelection = (pageKey: string, isSelected: boolean) => {
    setStructureData(prev => {
      const newSelectedPages = isSelected 
        ? [...prev.selectedPages, pageKey]
        : prev.selectedPages.filter(p => p !== pageKey);
      
      // When selecting a page, initialize all its sections as selected by default
      const newPageSections = { ...prev.pageSections };
      if (isSelected && !newPageSections[pageKey]) {
        const pageTemplate = pageLibrary[pageKey];
        if (pageTemplate) {
          newPageSections[pageKey] = pageTemplate.suggestedSections.map(section => section.name);
        }
      }
      
      return {
        ...prev,
        selectedPages: newSelectedPages,
        pageSections: newPageSections
      };
    });
  };

  const handleSectionSelection = (pageKey: string, sectionName: string, isSelected: boolean) => {
    setStructureData(prev => {
      const currentSections = prev.pageSections[pageKey] || [];
      const newSections = isSelected
        ? [...currentSections, sectionName]
        : currentSections.filter(s => s !== sectionName);
      
      return {
        ...prev,
        pageSections: {
          ...prev.pageSections,
          [pageKey]: newSections
        }
      };
    });
  };

  const handleStartOver = () => {
    // Reset all state
    setFormData({
      brand_name: '',
      target_country: '',
      target_language: ''
    });
    setSiteTypeData({
      site_type: ''
    });
    setStructureData({
      selectedPages: [],
      pageSections: {}
    });
    setClaudeResponse(null);
    setFilledPrompt(null);
    setResearchResults(null);
    setResearchStatus('idle');
    setResearchProgress(0);
    setResearchStep('');
    setCurrentStep('initial');
    setCreatedProjectId(null);
    setShowMessage(false);
  };

  const handleStructureSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!createdProjectId) {
        throw new Error('No project ID found');
      }

      // Get current project to preserve existing data
      const currentProject = await getProjectById(createdProjectId);
      if (!currentProject) {
        throw new Error('Project not found');
      }

      // Always include Home as the first page
      const selectedPages = ['Home', ...structureData.selectedPages.filter(p => p !== 'Home')];
      // For each selected page, ensure selected sections are present
      const pageSections: Record<string, string[]> = {};
      selectedPages.forEach(pageKey => {
        const selected = structureData.pageSections[pageKey];
        if (selected && selected.length > 0) {
          // If sections are explicitly set, use them
          pageSections[pageKey] = selected;
        } else {
          // If no sections in state, default to all sections for this page
          const pageTemplate = pageLibrary[pageKey];
          if (pageTemplate) {
            pageSections[pageKey] = pageTemplate.suggestedSections.map(section => section.name);
          } else {
            pageSections[pageKey] = [];
          }
        }
      });

      // Prepare structure data
      const structureInfo = {
        selectedPages,
        pageSections,
        totalPages: selectedPages.length,
        structureCompletedAt: new Date().toISOString()
      };

      // Reorganize user_input with project info at top and structure at bottom
      const updatedUserInput = {
        brand_name: currentProject.user_input?.brand_name || '',
        target_country: currentProject.user_input?.target_country || '',
        target_language: currentProject.user_input?.target_language || '',
        site_type: currentProject.user_input?.site_type || null,
        site_type_selected_at: currentProject.user_input?.site_type_selected_at || null,
        structure: structureInfo
      };

      // Update project with structure data in user_input
      const updateData = {
        state: 'agent-processing',
        user_input: updatedUserInput
      };

      const result = await updateProject(createdProjectId, updateData);
      
      if (result) {
        // Call the new_project_agent with complete structure data
        const agentUserInput = {
          brand_name: updatedUserInput.brand_name,
          target_country: updatedUserInput.target_country,
          target_language: updatedUserInput.target_language,
          site_type: updatedUserInput.site_type,
          structure: updatedUserInput.structure
        };

        const agentResult = await executeAgentAPI('new-project', agentUserInput);

        if (agentResult.success && agentResult.response) {
          // Log the agent task
          await createAgentTask({
            project_id: createdProjectId,
            agent: 'new-project',
            task: 'Generate project file structure',
            input: agentUserInput,
            output: { response: agentResult.response },
            status: 'success',
            logs: agentResult.metadata
          });

          // Parse Claude's response and create project files
          try {
            const createdFiles = await parseAndCreateProjectFiles(createdProjectId, agentResult.response);
            console.log('Created project files:', createdFiles);
          } catch (parseError) {
            console.error('Failed to parse Claude response:', parseError);
          }

          // Set Claude response and filled prompt to show on next step
          setClaudeResponse(agentResult.response);
          setFilledPrompt(agentResult.filledPrompt || null);
          setCurrentStep('claude-response');
          setShowMessage(true);
          
          // Update project state
          await updateProject(createdProjectId, {
            state: 'structure-generated',
            user_input: updatedUserInput
          });

          // Hide message after 3 seconds
          setTimeout(() => {
            setShowMessage(false);
          }, 3000);
        } else {
          // Log failed agent task
          console.error('Agent execution failed:', agentResult);
          
          await createAgentTask({
            project_id: createdProjectId,
            agent: 'new-project',
            task: 'Generate project file structure',
            input: agentUserInput,
            output: null,
            status: 'error',
            error: agentResult.error || 'Unknown error'
          });

          alert(`Failed to generate project structure with Claude: ${agentResult.error || 'Unknown error'}`);
        }
      } else {
        alert('Failed to update project. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting structure:', error);
      alert(`An error occurred: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInitialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Generate project name
      const projectName = generateProjectName(
        formData.brand_name,
        formData.target_country,
        formData.target_language
      );

      // Create project with the reorganized structure
      const projectData = {
        status: 'created' as const,
        state: 'site-type-selection',
        user_input: {
          brand_name: formData.brand_name,
          target_country: formData.target_country,
          target_language: formData.target_language,
          site_type: null,
          site_type_selected_at: null,
          structure: null
        },
        meta: {
          form_version: '1.0',
          submitted_at: new Date().toISOString(),
          project_name: projectName
        },
        output_refs: null
      };

      const result = await createProject(projectData);
      
      if (result) {
        setCreatedProjectId(result.id);
        
        // Start background research after step 1 completion
        await startBackgroundResearch(
          result.id,
          projectName,
          formData.brand_name,
          formData.target_country,
          formData.target_language
        );
        
        setCurrentStep('site-type');
        setShowMessage(true);
        
        // Hide message after 3 seconds
        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      } else {
        alert('Failed to save project. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSiteTypeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!createdProjectId) {
        throw new Error('No project ID found');
      }

      // First, get the current project to preserve existing data
      const currentProject = await getProjectById(createdProjectId);
      if (!currentProject) {
        throw new Error('Project not found');
      }

      // Update user_input with site type, maintaining organized structure
      const updatedUserInput = {
        brand_name: currentProject.user_input?.brand_name || '',
        target_country: currentProject.user_input?.target_country || '',
        target_language: currentProject.user_input?.target_language || '',
        site_type: siteTypeData.site_type,
        site_type_selected_at: new Date().toISOString(),
        structure: currentProject.user_input?.structure || null
      };

      // Update project with site type in user_input
      const updateData = {
        state: 'structure-selection',
        user_input: updatedUserInput
      };

      const result = await updateProject(createdProjectId, updateData);
      
      if (result) {
        // Initialize Home page sections when moving to structure step
        const homePage = pageLibrary['Home'];
        if (homePage && !structureData.pageSections['Home']) {
          setStructureData(prev => ({
            ...prev,
            pageSections: {
              ...prev.pageSections,
              'Home': homePage.suggestedSections.map(section => section.name)
            }
          }));
        }
        setCurrentStep('structure');
      } else {
        alert('Failed to update project. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting site type:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderInitialForm = () => (
    <form onSubmit={handleInitialSubmit} className="w-full max-w-sm space-y-6 bg-slate-50 p-8 rounded shadow">
      <div>
        <label htmlFor="brand_name" className="block text-sm font-medium text-slate-700 mb-1">
          Casino Brand Name
        </label>
        <input
          id="brand_name"
          name="brand_name"
          type="text"
          required
          value={formData.brand_name}
          onChange={handleInputChange}
          className="block w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter casino brand name"
        />
              </div>
      <div>
        <label htmlFor="target_country" className="block text-sm font-medium text-slate-700 mb-1">
          Target Country
        </label>
        <select
          id="target_country"
          name="target_country"
          required
          value={formData.target_country}
          onChange={handleInputChange}
          className="block w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">
            Select a country
          </option>
          {countries.map((country) => (
            <option key={country.code} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
            </div>
      <div>
        <label htmlFor="target_language" className="block text-sm font-medium text-slate-700 mb-1">
          Target Language
        </label>
        <select
          id="target_language"
          name="target_language"
          required
          value={formData.target_language}
          onChange={handleInputChange}
          className="block w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">
            Select a language
          </option>
          {languages.map((language) => (
            <option key={language.code} value={language.name}>
              {language.name}
            </option>
          ))}
        </select>
              </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Creating Project...' : 'Submit'}
      </button>
    </form>
  );

  const renderSiteTypeForm = () => (
    <div className="w-full max-w-sm space-y-6">
      {/* Research Status */}
      {renderResearchStatus()}
      
      <form onSubmit={handleSiteTypeSubmit} className="w-full space-y-6 bg-slate-50 p-8 rounded shadow">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            Choose Site Type
          </h2>
                <p className="text-slate-600">
            Select the type of website you want to generate
                </p>
              </div>

      <div>
        <label htmlFor="site_type" className="block text-sm font-medium text-slate-700 mb-1">
          Site Type
        </label>
        <select
          id="site_type"
          name="site_type"
          required
          value={siteTypeData.site_type}
          onChange={handleSiteTypeChange}
          className="block w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">
            Select site type
          </option>
          {siteTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.name}
            </option>
          ))}
        </select>
              </div>
      
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Updating Project...' : 'Continue'}
      </button>
      </form>
    </div>
  );

  const renderStructureForm = () => {
    const isSinglePage = siteTypeData.site_type === 'single-page';
    const availablePages = getAvailablePages();
    const homePage = pageLibrary['Home'];

    return (
      <div className="w-full max-w-4xl space-y-6">
        {/* Research Status */}
        {renderResearchStatus()}
        
        <form onSubmit={handleStructureSubmit} className="w-full space-y-6 bg-slate-50 p-8 rounded shadow">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            {isSinglePage ? 'Choose Home Page Structure' : 'Choose Pages & Structure'}
          </h2>
              <p className="text-slate-600">
            {isSinglePage 
              ? 'Select which sections to include in your single-page website'
              : 'Select additional pages and their sections for your multi-page website'
            }
              </p>
            </div>

        {/* Home Page Section (always included) */}
        <div className="border border-slate-200 rounded-lg p-6 bg-white">
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-2">Always Included</span>
            {homePage.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {homePage.suggestedSections.map((section) => {
              const isSelected = structureData.pageSections['Home']?.includes(section.name) ?? true;
              return (
                <div 
                  key={section.name} 
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${
                    isSelected 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                  }`}
                  onClick={() => handleSectionSelection('Home', section.name, !isSelected)}
                >
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id={`home-${section.name}`}
                      checked={isSelected}
                      onChange={(e) => handleSectionSelection('Home', section.name, e.target.checked)}
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                      onClick={(e) => e.stopPropagation()}
                    />
                    <div className="flex-1">
                      <label htmlFor={`home-${section.name}`} className="text-sm font-semibold text-slate-800 cursor-pointer block">
                        {section.name}
                      </label>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">{section.purpose}</p>
                      {section.seoNote && (
                        <div className="mt-2 p-2 bg-blue-100 rounded text-xs text-blue-800 font-medium">
                          💡 {section.seoNote}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Pages (for multi-page only) */}
        {!isSinglePage && (
          <div className="border border-slate-200 rounded-lg p-6 bg-white">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Additional Pages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {availablePages.map((pageKey) => {
                const pageTemplate = pageLibrary[pageKey];
                const isSelected = structureData.selectedPages.includes(pageKey);
                
                return (
                  <div key={pageKey} className="border border-slate-200 rounded-lg p-4">
                    <div 
                      className={`p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md mb-3 ${
                        isSelected 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                      }`}
                      onClick={() => handlePageSelection(pageKey, !isSelected)}
                    >
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id={`page-${pageKey}`}
                          checked={isSelected}
                          onChange={(e) => handlePageSelection(pageKey, e.target.checked)}
                          className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                          onClick={(e) => e.stopPropagation()}
                        />
                        <div className="flex-1">
                          <label htmlFor={`page-${pageKey}`} className="text-sm font-semibold text-slate-800 cursor-pointer block">
                            {pageTemplate.name}
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    {/* Show sections only if page is selected */}
                    {isSelected && (
                      <div className="space-y-2">
                        <p className="text-xs text-slate-500 font-medium mb-3">Select sections:</p>
                        <div className="grid grid-cols-1 gap-2">
                          {pageTemplate.suggestedSections.map((section) => {
                            const isSectionSelected = structureData.pageSections[pageKey]?.includes(section.name) ?? true;
                            return (
                              <div 
                                key={section.name} 
                                className={`p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-sm ${
                                  isSectionSelected 
                                    ? 'border-green-500 bg-green-50' 
                                    : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                                }`}
                                onClick={() => handleSectionSelection(pageKey, section.name, !isSectionSelected)}
                              >
                                <div className="flex items-start space-x-2">
                                  <input
                                    type="checkbox"
                                    id={`${pageKey}-${section.name}`}
                                    checked={isSectionSelected}
                                    onChange={(e) => handleSectionSelection(pageKey, section.name, e.target.checked)}
                                    className="mt-0.5 h-3 w-3 text-green-600 focus:ring-green-500 border-slate-300 rounded"
                                    onClick={(e) => e.stopPropagation()}
                                  />
                                  <div className="flex-1">
                                    <label htmlFor={`${pageKey}-${section.name}`} className="text-xs font-medium text-slate-700 cursor-pointer block">
                                      {section.name}
                                    </label>
                                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{section.purpose}</p>
                                    {section.seoNote && (
                                      <div className="mt-1 p-1 bg-blue-100 rounded text-xs text-blue-800">
                                        💡 {section.seoNote}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
              </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center pt-4">
          <button
            type="button"
            onClick={() => setCurrentStep('site-type')}
            className="px-4 py-2 text-slate-600 border border-slate-300 rounded hover:bg-slate-50 transition-colors"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed"
          >
    {isLoading ? 'Generating with Claude...' : 'Generate Project Structure'}
          </button>
        </div>
      </form>
      </div>
    );
  };

  const renderResearchResults = () => {
    if (!researchResults) return null;

    return (
      <div className="w-full max-w-4xl bg-white rounded-lg p-6 border mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-800 flex items-center">
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm mr-2">Research</span>
            🔍 Casino Research Results
          </h3>
          <div className="text-right">
            <div className="text-sm text-slate-500">
              Search Time: {researchResults.metadata?.searchTime ? `${Math.round(researchResults.metadata.searchTime / 1000)}s` : 'N/A'}
            </div>
            <div className="text-xs text-slate-400">
              {researchResults.metadata?.note && `(${researchResults.metadata.note})`}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {researchResults.bonuses?.length > 0 && (
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-blue-800 flex items-center">
                  💰 Bonuses ({researchResults.bonuses.length})
                </h4>
                <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  Found
                </div>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                {researchResults.bonuses.map((bonus: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {researchResults.providers?.length > 0 && (
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-green-800 flex items-center">
                  🎮 Providers ({researchResults.providers.length})
                </h4>
                <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                  Found
                </div>
              </div>
              <ul className="text-sm text-green-700 space-y-1">
                {researchResults.providers.map((provider: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>{provider}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {researchResults.topSlots?.length > 0 && (
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-yellow-800 flex items-center">
                  🎰 Top Slots ({researchResults.topSlots.length})
                </h4>
                <div className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                  Found
                </div>
              </div>
              <ul className="text-sm text-yellow-700 space-y-1">
                {researchResults.topSlots.map((slot: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>{slot}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {researchResults.logo && (
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-purple-800 flex items-center">
                  🎨 Logo
                </h4>
                <div className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded">
                  Found
                </div>
              </div>
              <p className="text-sm text-purple-700">{researchResults.logo}</p>
            </div>
          )}
        </div>
        
        <div className="mt-6 pt-4 border-t border-slate-200">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <div>
              Research completed at: {new Date(researchResults.metadata?.timestamp || '').toLocaleString()}
            </div>
            <div>
              Sources checked: {researchResults.metadata?.sourcesChecked?.length || 0} websites
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderResearchStatus = () => {
    if (researchStatus === 'idle') return null;

    return (
      <div className="w-full max-w-4xl bg-white rounded-lg p-6 border mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              researchStatus === 'started' ? 'bg-blue-500 animate-pulse' :
              researchStatus === 'in_progress' ? 'bg-yellow-500 animate-pulse' :
              researchStatus === 'completed' ? 'bg-green-500' :
              'bg-red-500'
            }`}>
              {researchStatus === 'completed' && (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
              {researchStatus === 'failed' && (
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-800">
                🔍 Casino Research Progress
              </h3>
              <p className="text-sm text-slate-600">{researchStep}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-slate-800">{researchProgress}%</div>
            <div className="text-xs text-slate-500">Complete</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-slate-200 rounded-full h-3 mb-4">
          <div 
            className={`h-3 rounded-full transition-all duration-500 ease-out ${
              researchStatus === 'completed' ? 'bg-green-500' :
              researchStatus === 'failed' ? 'bg-red-500' :
              'bg-blue-500'
            }`}
            style={{ width: `${researchProgress}%` }}
          ></div>
        </div>
        
        {/* Detailed Status */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${
              researchProgress >= 10 ? 'bg-green-500' : 'bg-slate-300'
            }`}></div>
            <span className={researchProgress >= 10 ? 'text-green-700' : 'text-slate-500'}>
              Task Initialized
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${
              researchProgress >= 30 ? 'bg-green-500' : 'bg-slate-300'
            }`}></div>
            <span className={researchProgress >= 30 ? 'text-green-700' : 'text-slate-500'}>
              API Call
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${
              researchProgress >= 70 ? 'bg-green-500' : 'bg-slate-300'
            }`}></div>
            <span className={researchProgress >= 70 ? 'text-green-700' : 'text-slate-500'}>
              Processing
            </span>
          </div>
        </div>
        
        {/* Error Display */}
        {researchStatus === 'failed' && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span className="text-sm text-red-700 font-medium">Research Error</span>
            </div>
            <p className="text-sm text-red-600 mt-1">{researchStep}</p>
          </div>
        )}
      </div>
    );
  };

  const renderClaudeResponse = () => (
    <div className="w-full max-w-4xl space-y-6 bg-slate-50 p-8 rounded shadow">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          🎉 Project Structure Generated!
        </h2>
        <p className="text-slate-600">
          Claude has analyzed your requirements and generated a complete project structure
        </p>
      </div>

      {/* Research Status */}
      {renderResearchStatus()}

      {/* Research Results */}
      {renderResearchResults()}

      {filledPrompt && (
        <div className="bg-white rounded-lg p-6 border mb-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-2">Input</span>
            📝 Prompt Sent to Claude
          </h3>
          <div className="bg-blue-50 rounded p-4 max-h-64 overflow-y-auto border border-blue-200">
            <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
              {filledPrompt}
            </pre>
          </div>
        </div>
      )}

      {claudeResponse && (
        <div className="bg-white rounded-lg p-6 border">
          <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-2">Output</span>
            🤖 Claude's Response
          </h3>
          <div className="bg-slate-100 rounded p-4 max-h-96 overflow-y-auto border border-slate-200">
            <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed">
              {claudeResponse}
            </pre>
          </div>
        </div>
      )}

      <div className="flex justify-center space-x-4">
        <button
          onClick={handleStartOver}
          className="px-6 py-2 bg-slate-600 text-white rounded font-semibold hover:bg-slate-700 transition-colors"
        >
          Start New Project
        </button>
        <button
          onClick={() => {
            console.log('Project completed:', createdProjectId);
            alert('Project structure has been saved to the database!');
          }}
          className="px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 transition-colors"
        >
          View Project Details
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-5xl font-bold mb-12 text-center">SEO GEN</h1>
      
      {showMessage && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {currentStep === 'initial' ? 'Project created successfully!' : 
           currentStep === 'claude-response' ? 'Project structure generated successfully!' : 
           'Project updated successfully!'}
        </div>
      )}
      
      {currentStep === 'initial' && renderInitialForm()}
      {currentStep === 'site-type' && renderSiteTypeForm()}
      {currentStep === 'structure' && renderStructureForm()}
      {currentStep === 'claude-response' && renderClaudeResponse()}
      
    </div>
  );
};

export default MainPage; 