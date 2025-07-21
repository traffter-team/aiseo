import { NextRequest, NextResponse } from 'next/server';
import { ResearcherAgent, createResearcherConfig, validateResearcherConfig, createResearchRequest } from '@/services/researcher_agent';

// Start background research endpoint
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { projectId, projectName, brandName, targetCountry, targetLanguage } = body;

    // Validate required fields
    if (!projectId || !projectName || !brandName || !targetCountry || !targetLanguage) {
      return NextResponse.json(
        { error: 'Missing required fields: projectId, projectName, brandName, targetCountry, targetLanguage' },
        { status: 400 }
      );
    }

    // Create researcher configuration
    const config = createResearcherConfig();
    
    // Validate configuration
    if (!validateResearcherConfig(config)) {
      return NextResponse.json(
        { error: 'Invalid researcher configuration - check OPENAI_API_KEY' },
        { status: 500 }
      );
    }

    // Create researcher agent
    const researcherAgent = new ResearcherAgent(config);

    // Create research request
    const researchRequest = createResearchRequest(
      projectId,
      projectName,
      targetCountry,
      targetLanguage,
      brandName
    );

    // Start background research (non-blocking)
    await researcherAgent.startResearch(researchRequest);

    return NextResponse.json({
      success: true,
      message: 'Background research started successfully',
      projectId,
      startTime: new Date().toISOString(),
      debug: 'Check server console logs for detailed progress'
    });
    
  } catch (error) {
    console.error('Error starting background research:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}

// Get research status endpoint
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get('projectId');

    if (!projectId) {
      return NextResponse.json(
        { error: 'Missing projectId parameter' },
        { status: 400 }
      );
    }

    // Create researcher agent (just for status checking)
    const config = createResearcherConfig();
    const researcherAgent = new ResearcherAgent(config);

    // Check database first for most up-to-date status
    let status = null;
    let isCompleted = false;
    let results = null;
    
    try {
        const { getProjectById } = await import('@/lib/db/queries');
        const project = await getProjectById(projectId);
        
        // Check both meta and user_input for research status
        const researchStatus = project?.meta?.research_status || project?.user_input?.research_status;
        const researchData = project?.meta?.research_data || project?.user_input?.research_data;
        
        if (researchStatus) {
          // Create status object from database
          status = {
            projectId,
            status: researchStatus === 'completed' ? 'completed' : 'in_progress',
            progress: researchStatus === 'completed' ? 100 : 30,
            startTime: project.meta?.research_completed_at || project.created_at,
            endTime: project.meta?.research_completed_at
          };
          
          isCompleted = researchStatus === 'completed';
          results = researchData || null;
        }
    } catch (dbError) {
      console.error('[API] Error checking database:', dbError);
    }
    
    // If not found in database, fall back to memory
    if (!status) {
      status = researcherAgent.getResearchStatus(projectId);
      isCompleted = researcherAgent.isResearchCompleted(projectId);
      results = researcherAgent.getResearchResults(projectId);
    }

    return NextResponse.json({
      success: true,
      projectId,
      status,
      isCompleted,
      results,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error getting research status:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}