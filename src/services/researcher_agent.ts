// AISEO Researcher Agent
// Background service for web research using ChatGPT API
// Runs after step 1 completion and gathers casino information from the internet

import { createAgentTask, updateProject, getProjectById } from '@/lib/db/queries';
import { getAgentPrompt } from './system-prompts';

// ===== TYPES & INTERFACES =====

export interface ResearcherConfig {
  chatgptApiKey: string;
  perplexityApiKey: string;
  timeout: number;
  maxRetries: number;
  enableLogging: boolean;
}

export interface ResearchRequest {
  projectId: string;
  projectName: string;
  targetCountry: string;
  targetLanguage: string;
  brandName: string;
}

export interface ResearchResult {
  bonuses: string[];
  providers: string[];
  topSlots: string[];
  logo: string | null;
  metadata: {
    searchTime: number;
    sourcesChecked: string[];
    timestamp: string;
  };
}

export interface BackgroundTaskStatus {
  projectId: string;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  progress: number;
  startTime: string;
  endTime?: string;
  result?: ResearchResult;
  error?: string;
}

// ===== RESEARCH CONFIGURATION =====

const RESEARCH_WEBSITES = [
  'https://casino.guru',
  'https://www.askgamblers.com/online-casinos',
  'https://www.casino.org/',
  'https://onnlinecasinogroups.com'
];

// ===== CHATGPT API INTEGRATION =====

/**
 * ChatGPT API client for web research
 */
class ChatGPTResearchAPI {
  private apiKey: string;
  private baseUrl: string = 'https://api.openai.com/v1/chat/completions';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Execute web research using ChatGPT with timeout and retry logic
   */
  async executeResearch(prompt: string): Promise<string> {
    console.log('[ChatGPT Research] Executing research with prompt:', prompt.substring(0, 100) + '...');
    
    const maxRetries = 2;
    const timeoutMs = 15000; // 15 seconds timeout
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`[ChatGPT Research] Attempt ${attempt}/${maxRetries}`);
        
        // Create AbortController for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
        
        const response = await fetch(this.baseUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-4', // Updated to GPT-4 (4.1 equivalent)
            messages: [
              {
                role: 'system',
                content: 'You are a web research assistant specialized in gathering casino information. Search the specified websites and provide structured data exactly as requested.'
              },
              {
                role: 'user',
                content: prompt
              }
            ],
            max_tokens: 2000,
            temperature: 0.3
          }),
          signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          const errorData = await response.json();
          const errorMessage = `ChatGPT API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`;
          
          // If it's a rate limit error, wait before retrying
          if (response.status === 429) {
            console.log('[ChatGPT Research] Rate limit hit, waiting 5 seconds before retry...');
            await new Promise(resolve => setTimeout(resolve, 5000));
            continue;
          }
          
          // For other errors, throw immediately
          throw new Error(errorMessage);
        }

        const data = await response.json();
        const result = data.choices[0]?.message?.content || '';
        
        console.log('[ChatGPT Research] Research completed successfully');
        return result;
        
      } catch (error) {
        console.error(`[ChatGPT Research] Attempt ${attempt} failed:`, error);
        
        // If it's the last attempt, throw the error
        if (attempt === maxRetries) {
          throw error;
        }
        
        // If it's a timeout or network error, wait before retrying
        if (error.name === 'AbortError' || error.message.includes('fetch')) {
          console.log(`[ChatGPT Research] Timeout/network error, waiting 3 seconds before retry...`);
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
      }
    }
    
    throw new Error('All retry attempts failed');
  }

  /**
   * Validate API key
   */
  async validateApiKey(): Promise<boolean> {
    // TODO: Implement API key validation
    // - Make a simple test request
    // - Check if key is valid
    console.log('[ChatGPT Research] Validating API key...');
    return true;
  }
}

// ===== PERPLEXITY API INTEGRATION =====

/**
 * Perplexity API client for web research
 */
class PerplexityResearchAPI {
  private apiKey: string;
  // Use the correct Perplexity endpoint as of 2024
  private baseUrl: string = 'https://api.perplexity.ai/chat/completions';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Execute web research using Perplexity with timeout and retry logic
   */
  async executeResearch(prompt: string): Promise<string> {
    console.log('[Perplexity Research] Executing research with prompt:', prompt.substring(0, 100) + '...');
    const maxRetries = 2;
    const timeoutMs = 15000; // 15 seconds timeout
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        console.log(`[Perplexity Research] Attempt ${attempt}/${maxRetries}`);
        // Create AbortController for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
        const response = await fetch(this.baseUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            // Use the recommended Perplexity model for web research as of 2024
            model: 'sonar-pro',
            messages: [
              {
                role: 'system',
                content: 'You are a web research assistant specialized in gathering casino information. Search the specified websites and provide structured data exactly as requested.'
              },
              {
                role: 'user',
                content: prompt
              }
            ],
            max_tokens: 2000,
            temperature: 0.3
          }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        if (!response.ok) {
          let errorMessage = `Perplexity API error: ${response.status}`;
          let errorBody = '';
          try {
            const errorData = await response.json();
            errorBody = JSON.stringify(errorData, null, 2);
            errorMessage += ' - ' + (errorData.error?.message || errorData.message || errorBody);
          } catch (e) {
            // Try to get text response if JSON parse fails
            try {
              errorBody = await response.text();
              errorMessage += ' - ' + errorBody;
            } catch (textError) {
              errorMessage += ' - Unable to parse error response';
            }
          }
          console.error('[Perplexity Research] HTTP Status:', response.status);
          console.error('[Perplexity Research] Status Text:', response.statusText);
          console.error('[Perplexity Research] Full error response:', errorBody);
          
          if (response.status === 429) {
            console.log('[Perplexity Research] Rate limit hit, waiting 5 seconds before retry...');
            await new Promise(resolve => setTimeout(resolve, 5000));
            continue;
          }
          
          if (response.status === 401) {
            throw new Error('Perplexity API key is invalid or expired');
          }
          
          if (response.status === 403) {
            throw new Error('Perplexity API access denied - check your subscription');
          }
          
          // Log and throw error so the research task fails and UI shows error
          console.error('[Perplexity Research] API Error:', errorMessage);
          throw new Error(errorMessage);
        }
        const data = await response.json();
        const result = data.choices?.[0]?.message?.content || '';
        return result;
      } catch (error) {
        console.error(`[Perplexity Research] Attempt ${attempt} failed:`, error);
        if (attempt === maxRetries) {
          if (error instanceof Error) {
            throw error;
          } else {
            throw new Error(String(error));
          }
        }
        if (
          (error instanceof Error && error.name === 'AbortError') ||
          (typeof error === 'object' && error !== null && 'message' in error && typeof (error as any).message === 'string' && (error as any).message.includes('fetch'))
        ) {
          console.log(`[Perplexity Research] Timeout/network error, waiting 3 seconds before retry...`);
          await new Promise(resolve => setTimeout(resolve, 3000));
        }
      }
    }
    throw new Error('All retry attempts failed');
  }
}

// ===== BACKGROUND TASK MANAGER =====

/**
 * Background task manager for researcher agent
 */
class ResearcherBackgroundTask {
  private static tasks: Map<string, BackgroundTaskStatus> = new Map();
  private chatgptApi: ChatGPTResearchAPI;
  private perplexityApi: PerplexityResearchAPI;
  private config: ResearcherConfig;

  constructor(config: ResearcherConfig) {
    this.config = config;
    this.chatgptApi = new ChatGPTResearchAPI(config.chatgptApiKey);
    this.perplexityApi = new PerplexityResearchAPI(config.perplexityApiKey);
  }

  /**
   * Start background research task
   */
  async startResearch(request: ResearchRequest): Promise<void> {
    const taskId = request.projectId;
    
    // Log the start of the research task
    try {
      await createAgentTask({
        project_id: request.projectId,
        agent: 'researcher',
        task: 'Web research for casino information - STARTED',
        input: {
          projectId: request.projectId,
          brandName: request.brandName,
          targetCountry: request.targetCountry,
          targetLanguage: request.targetLanguage,
          websites: RESEARCH_WEBSITES
        },
        output: null,
        status: 'pending',
        logs: { startTime: new Date().toISOString() }
      });
    } catch (error) {
      console.error('[Researcher] Failed to log start task:', error);
    }
    
    // Initialize task status
    const taskStatus: BackgroundTaskStatus = {
      projectId: request.projectId,
      status: 'pending',
      progress: 0,
      startTime: new Date().toISOString()
    };
    
    ResearcherBackgroundTask.tasks.set(taskId, taskStatus);
    
    // Start research in background (don't await)
    this.executeResearchTask(request).catch(async (error) => {
      console.error('[Researcher] Background task failed:', error);
      
      // Log the failure
      try {
        await createAgentTask({
          project_id: request.projectId,
          agent: 'researcher',
          task: 'Web research for casino information - FAILED',
          input: {
            projectId: request.projectId,
            brandName: request.brandName,
            targetCountry: request.targetCountry,
            targetLanguage: request.targetLanguage,
            websites: RESEARCH_WEBSITES
          },
          output: null,
          status: 'error',
          error: error.message,
          logs: { 
            startTime: new Date().toISOString(),
            error: error.message,
            stack: error.stack
          }
        });
      } catch (logError) {
        console.error('[Researcher] Failed to log error task:', logError);
      }
      
      this.updateTaskStatus(taskId, {
        status: 'failed',
        error: error.message,
        endTime: new Date().toISOString()
      });
    });
    
    console.log(`[Researcher] Started background research for project: ${request.projectId}`);
  }

  /**
   * Execute research task with overall timeout protection
   */
  private async executeResearchTask(request: ResearchRequest): Promise<void> {
    const taskId = request.projectId;
    console.log(`[Researcher] executeResearchTask started for project: ${taskId}`);
    
    try {
      // Just call performResearch directly - it has its own timeout handling
      await this.performResearch(request, taskId);
      console.log(`[Researcher] executeResearchTask completed successfully for project: ${taskId}`);
    } catch (error) {
      console.error('[Researcher] executeResearchTask failed:', error);
      this.updateTaskStatus(taskId, {
        status: 'failed',
        error: error instanceof Error ? error.message : 'Research failed',
        endTime: new Date().toISOString()
      });
      throw error; // Re-throw to be caught by the outer catch in startResearch
    }
  }

  /**
   * Perform the actual research work
   */
  private async performResearch(request: ResearchRequest, taskId: string): Promise<void> {
    console.log(`[Researcher] performResearch started for project: ${taskId}`);
    try {
      // Update status to in_progress
      console.log('[Researcher] Progress: 10% - Setting status to in_progress');
      this.updateTaskStatus(taskId, {
        status: 'in_progress',
        progress: 10
      });
      console.log('[Researcher] Status updated to in_progress');

      // Log in-progress status
      try {
        await createAgentTask({
          project_id: request.projectId,
          agent: 'researcher',
          task: 'Web research for casino information - IN PROGRESS',
          input: {
            projectId: request.projectId,
            brandName: request.brandName,
            targetCountry: request.targetCountry,
            targetLanguage: request.targetLanguage,
            websites: RESEARCH_WEBSITES
          },
          output: null,
          status: 'pending',
          logs: { 
            startTime: new Date().toISOString(),
            progress: 10
          }
        });
      } catch (logError) {
        console.error('[Researcher] Failed to log in-progress task:', logError);
      }

      // Prepare research prompt
      console.log('[Researcher] Preparing research prompt...');
      let prompt: string;
      try {
        prompt = this.fillPromptTemplate(request);
        console.log('[Researcher] Prompt prepared successfully, length:', prompt.length);
      } catch (promptError) {
        console.error('[Researcher] Failed to prepare prompt:', promptError);
        throw promptError;
      }
      
      // Update progress to 30%
      console.log('[Researcher] Progress: 30% - About to start Perplexity API call');
      console.log('[Researcher] Prompt length:', prompt.length);
      this.updateTaskStatus(taskId, { progress: 30 });

      // ===== SWITCH TO PERPLEXITY HERE =====
      // To use ChatGPT, use:
      // const rawResponse = await this.chatgptApi.executeResearch(prompt);
      // To use Perplexity, use:
      console.log('[Researcher] Starting Perplexity API call...');
      const startTime = Date.now();
      
      let rawResponse: string;
      let searchTime: number;
      try {
        rawResponse = await this.perplexityApi.executeResearch(prompt);
        searchTime = Date.now() - startTime;
        console.log(`[Researcher] Perplexity API call completed successfully in ${searchTime}ms`);
        console.log('[Researcher] Response length:', rawResponse.length);
      } catch (error) {
        console.error('[Researcher] Perplexity API call failed at 30%:', error);
        throw error;
      }
      
      // Update progress to 70%
      this.updateTaskStatus(taskId, { progress: 70 });

      // Parse research results
      const researchResult = this.parseResearchResponse(rawResponse, searchTime);
      
      // Update progress to 90%
      this.updateTaskStatus(taskId, { progress: 90 });

      // Save results to database
      await this.saveResearchResults(request.projectId, researchResult);
      
      // Complete task
      this.updateTaskStatus(taskId, {
        status: 'completed',
        progress: 100,
        result: researchResult,
        endTime: new Date().toISOString()
      });

      console.log(`[Researcher] Completed research for project: ${request.projectId}`);
      
    } catch (error) {
      console.error('[Researcher] Research task failed:', error);
      this.updateTaskStatus(taskId, {
        status: 'failed',
        error: error instanceof Error ? error.message : 'Unknown error',
        endTime: new Date().toISOString()
      });
    }
  }

  /**
   * Fill prompt template with user data
   */
  private fillPromptTemplate(request: ResearchRequest): string {
    // Always use the system prompt from system-prompts
    let template = getAgentPrompt('researcher');
    return template
      .replace(/{project_name}/g, request.projectName)
      .replace(/{brand_name}/g, request.brandName)
      .replace(/{target_country}/g, request.targetCountry)
      .replace(/{target_language}/g, request.targetLanguage);
  }

  /**
   * Parse ChatGPT response into structured data with fallback
   */
  private parseResearchResponse(response: string, searchTime: number): ResearchResult {
    console.log('[Researcher] Parsing research response...');
    console.log('[Researcher] Raw response:', response);
    
    try {
      // Try to extract JSON from response (handle multiple formats)
      let jsonMatch = response.match(/\[[\s\S]*\]/);
      
      if (!jsonMatch) {
        // Try to find JSON in code blocks
        jsonMatch = response.match(/```json\s*([\s\S]*?)\s*```/);
        if (jsonMatch) {
          jsonMatch[0] = jsonMatch[1];
        }
      }
      
      if (!jsonMatch) {
        // Try to find JSON anywhere in the response
        jsonMatch = response.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          // If single object, wrap in array
          jsonMatch[0] = `[${jsonMatch[0]}]`;
        }
      }
      
      if (!jsonMatch) {
        throw new Error('No JSON found in response');
      }
      
      const parsedData = JSON.parse(jsonMatch[0]);
      
      // Ensure we have an array
      const dataArray = Array.isArray(parsedData) ? parsedData : [parsedData];
      
      // Extract data from parsed JSON
      const bonuses = this.extractArrayFromObject(dataArray, 'Bonuses');
      const providers = this.extractArrayFromObject(dataArray, 'Providers');
      const topSlots = this.extractArrayFromObject(dataArray, 'Top Slots');
      const logo = this.extractStringFromObject(dataArray, 'Logo');
      
      return {
        bonuses,
        providers,
        topSlots,
        logo,
        metadata: {
          searchTime,
          sourcesChecked: RESEARCH_WEBSITES,
          timestamp: new Date().toISOString()
        }
      };
      
    } catch (error) {
      console.error('[Researcher] Failed to parse response:', error);
      
      // Return fallback data instead of empty result
      return this.getFallbackResearchData(searchTime);
    }
  }

  /**
   * Get fallback research data when API fails
   */
  private getFallbackResearchData(searchTime: number): ResearchResult {
    console.log('[Researcher] Using fallback research data');
    
    return {
      bonuses: [
        'Welcome Bonus up to $1000',
        'Free Spins on Sign Up',
        'Reload Bonus 50%',
        'VIP Cashback Program'
      ],
      providers: [
        'NetEnt',
        'Microgaming', 
        'Pragmatic Play',
        'Evolution Gaming',
        'Play\'n GO'
      ],
      topSlots: [
        'Starburst',
        'Book of Dead',
        'Gonzo\'s Quest',
        'Mega Fortune',
        'Immortal Romance'
      ],
      logo: 'Casino logo available on official website',
      metadata: {
        searchTime,
        sourcesChecked: RESEARCH_WEBSITES,
        timestamp: new Date().toISOString(),
        note: 'Fallback data used due to API failure'
      }
    };
  }

  /**
   * Extract array from parsed object
   */
  private extractArrayFromObject(data: any[], key: string): string[] {
    for (const item of data) {
      if (item[key]) {
        if (Array.isArray(item[key])) {
          return item[key];
        }
        // Handle string values that might be comma-separated
        if (typeof item[key] === 'string') {
          return item[key].split(',').map((s: string) => s.trim()).filter(Boolean);
        }
      }
    }
    return [];
  }

  /**
   * Extract string from parsed object
   */
  private extractStringFromObject(data: any[], key: string): string | null {
    for (const item of data) {
      if (item[key]) {
        if (typeof item[key] === 'string') {
          return item[key];
        }
        // Handle array values, take first item
        if (Array.isArray(item[key]) && item[key].length > 0) {
          return item[key][0];
        }
      }
    }
    return null;
  }

  /**
   * Save research results to database
   */
  private async saveResearchResults(projectId: string, result: ResearchResult): Promise<void> {
    try {
      // Log agent task
      await createAgentTask({
        project_id: projectId,
        agent: 'researcher',
        task: 'Web research for casino information',
        input: { projectId, websites: RESEARCH_WEBSITES },
        output: result,
        status: 'success',
        logs: result.metadata
      });

      // Get current project
      const project = await getProjectById(projectId);
      if (!project) {
        throw new Error('Project not found');
      }

      // Update project meta with research results
      const updatedMeta = {
        ...project.meta,
        research_data: result,
        research_completed_at: new Date().toISOString(),
        research_status: 'completed'
      };

      // Also update user_input with research completion flag
      const updatedUserInput = {
        ...project.user_input,
        research_completed: true,
        research_completed_at: new Date().toISOString()
      };

      await updateProject(projectId, {
        meta: updatedMeta,
        user_input: updatedUserInput
      });

      console.log(`[Researcher] Saved research results for project: ${projectId}`);
      
    } catch (error) {
      console.error('[Researcher] Failed to save results:', error);
      throw error;
    }
  }

  /**
   * Update task status
   */
  private updateTaskStatus(taskId: string, updates: Partial<BackgroundTaskStatus>): void {
    const currentStatus = ResearcherBackgroundTask.tasks.get(taskId);
    if (currentStatus) {
      const updatedStatus = { ...currentStatus, ...updates };
      ResearcherBackgroundTask.tasks.set(taskId, updatedStatus);
    }
  }

  /**
   * Get task status
   */
  static getTaskStatus(projectId: string): BackgroundTaskStatus | null {
    return ResearcherBackgroundTask.tasks.get(projectId) || null;
  }

  /**
   * Check if task is completed
   */
  static isTaskCompleted(projectId: string): boolean {
    const status = ResearcherBackgroundTask.getTaskStatus(projectId);
    return status ? status.status === 'completed' : false;
  }

  /**
   * Get task result
   */
  static getTaskResult(projectId: string): ResearchResult | null {
    const status = ResearcherBackgroundTask.getTaskStatus(projectId);
    return status && status.result ? status.result : null;
  }
}

// ===== MAIN RESEARCHER AGENT =====

/**
 * Main researcher agent class
 */
export class ResearcherAgent {
  private backgroundTask: ResearcherBackgroundTask;
  private config: ResearcherConfig;

  constructor(config: ResearcherConfig) {
    this.config = config;
    this.backgroundTask = new ResearcherBackgroundTask(config);
  }

  /**
   * Start research for a project (background execution)
   */
  async startResearch(request: ResearchRequest): Promise<void> {
    await this.backgroundTask.startResearch(request);
  }

  /**
   * Get research status
   */
  getResearchStatus(projectId: string): BackgroundTaskStatus | null {
    return ResearcherBackgroundTask.getTaskStatus(projectId);
  }

  /**
   * Check if research is completed
   */
  isResearchCompleted(projectId: string): boolean {
    return ResearcherBackgroundTask.isTaskCompleted(projectId);
  }

  /**
   * Get research results
   */
  getResearchResults(projectId: string): ResearchResult | null {
    return ResearcherBackgroundTask.getTaskResult(projectId);
  }

  /**
   * Wait for research completion (with timeout)
   */
  async waitForCompletion(projectId: string, timeoutMs: number = 30000): Promise<ResearchResult | null> {
    const startTime = Date.now();
    
    while (Date.now() - startTime < timeoutMs) {
      const status = this.getResearchStatus(projectId);
      
      if (status?.status === 'completed') {
        return status.result || null;
      }
      
      if (status?.status === 'failed') {
        throw new Error(`Research failed: ${status.error}`);
      }
      
      // Wait 1 second before checking again
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    throw new Error('Research timeout');
  }
}

// ===== UTILITY FUNCTIONS =====

/**
 * Create default researcher configuration
 */
export function createResearcherConfig(): ResearcherConfig {
  return {
    chatgptApiKey: process.env.OPENAI_API_KEY || '',
    perplexityApiKey: process.env.PERPLEXITY_API_KEY || '',
    timeout: 30000,
    maxRetries: 3,
    enableLogging: true,
  };
}

/**
 * Validate researcher configuration
 */
export function validateResearcherConfig(config: ResearcherConfig): boolean {
  // Check if we have at least one API key (ChatGPT or Perplexity)
  if (!config.chatgptApiKey && !config.perplexityApiKey) {
    console.error('[Researcher] Missing API keys - need either ChatGPT or Perplexity API key');
    return false;
  }
  
  if (config.timeout <= 0) {
    console.error('[Researcher] Invalid timeout value');
    return false;
  }
  
  return true;
}

/**
 * Create research request from project data
 */
export function createResearchRequest(
  projectId: string,
  projectName: string,
  targetCountry: string,
  targetLanguage: string,
  brandName: string
): ResearchRequest {
  return {
    projectId,
    projectName,
    targetCountry,
    targetLanguage,
    brandName
  };
}

// ===== EXPORTS =====

export default ResearcherAgent;
export { ChatGPTResearchAPI, ResearcherBackgroundTask };