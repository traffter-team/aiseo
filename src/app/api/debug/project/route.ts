import { NextRequest, NextResponse } from 'next/server';
import { getProjectById, getAgentTasks } from '@/lib/db/queries';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const projectId = searchParams.get('projectId');

    if (!projectId) {
      return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
    }

    console.log(`[DEBUG] Checking project: ${projectId}`);

    // Get project data
    const project = await getProjectById(projectId);
    
    if (!project) {
      return NextResponse.json({ 
        exists: false,
        error: 'Project not found',
        projectId
      }, { status: 404 });
    }

    // Get all agent tasks for this project
    const agentTasks = await getAgentTasks(projectId);

    // Filter researcher tasks specifically
    const researcherTasks = agentTasks.filter(task => task.agent === 'researcher');

    // Debug response with all relevant data
    const debugData = {
      exists: true,
      projectId: project.id,
      status: project.status,
      state: project.state,
      created_at: project.created_at,
      updated_at: project.updated_at,
      
      // User input data
      user_input: {
        full: project.user_input,
        research_data: project.user_input?.research_data || null,
        research_status: project.user_input?.research_status || null,
        brand_name: project.user_input?.brand_name || null,
        target_country: project.user_input?.target_country || null,
        target_language: project.user_input?.target_language || null
      },
      
      // Meta data
      meta: {
        full: project.meta,
        research_status: project.meta?.research_status || null,
        research_data: project.meta?.research_data || null
      },
      
      // Agent tasks summary
      agent_tasks: {
        total: agentTasks.length,
        researcher_tasks: researcherTasks.length,
        researcher_tasks_details: researcherTasks.map(task => ({
          id: task.id,
          task: task.task,
          status: task.status,
          started_at: task.started_at,
          completed_at: task.completed_at,
          error: task.error,
          output_preview: task.output ? (typeof task.output === 'string' ? task.output.substring(0, 200) + '...' : JSON.stringify(task.output).substring(0, 200) + '...') : null
        })),
        all_agents: agentTasks.map(task => ({
          agent: task.agent,
          task: task.task,
          status: task.status,
          started_at: task.started_at,
          completed_at: task.completed_at
        }))
      }
    };

    console.log(`[DEBUG] Project found:`, {
      id: project.id,
      status: project.status,
      state: project.state,
      has_user_input: !!project.user_input,
      has_meta: !!project.meta,
      researcher_tasks_count: researcherTasks.length
    });

    return NextResponse.json(debugData);

  } catch (error) {
    console.error('[DEBUG] Error fetching project data:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}