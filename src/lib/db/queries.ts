import { supabase } from './supabase';
import type { 
  Project, 
  CreateProject, 
  ProjectFile, 
  CreateProjectFile,
  AgentTask,
  CreateAgentTask,
  ProjectVersion,
  CreateProjectVersion,
  ErrorLog,
  CreateErrorLog,
  LibraryItem,
  CreateLibraryItem,
  Edit,
  CreateEdit,
  Asset,
  CreateAsset,
  SeoReport,
  CreateSeoReport,
  OrchestratorLog,
  CreateOrchestratorLog
} from './types';

// ===== PROJECTS =====
export async function createProject(data: CreateProject): Promise<Project | null> {
  try {
    const { data: project, error } = await supabase
      .from('projects')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('Error creating project:', error);
      throw error;
    }

    return project;
  } catch (error) {
    console.error('Failed to create project:', error);
    return null;
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const { data: projects, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }

    return projects || [];
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  try {
    const { data: project, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching project:', error);
      throw error;
    }

    return project;
  } catch (error) {
    console.error('Failed to fetch project:', error);
    return null;
  }
}

export async function updateProject(id: string, data: Partial<CreateProject>): Promise<Project | null> {
  try {
    const { data: project, error } = await supabase
      .from('projects')
      .update(data)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating project:', error);
      throw error;
    }

    return project;
  } catch (error) {
    console.error('Failed to update project:', error);
    return null;
  }
}

// ===== PROJECT FILES =====
export async function createProjectFile(data: CreateProjectFile): Promise<ProjectFile | null> {
  try {
    const { data: file, error } = await supabase
      .from('project_files')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('Error creating project file:', error);
      throw error;
    }

    return file;
  } catch (error) {
    console.error('Failed to create project file:', error);
    return null;
  }
}

export async function getProjectFiles(projectId: string): Promise<ProjectFile[]> {
  try {
    const { data: files, error } = await supabase
      .from('project_files')
      .select('*')
      .eq('project_id', projectId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching project files:', error);
      throw error;
    }

    return files || [];
  } catch (error) {
    console.error('Failed to fetch project files:', error);
    return [];
  }
}

// ===== AGENT TASKS =====
export async function createAgentTask(data: CreateAgentTask): Promise<AgentTask | null> {
  try {
    const { data: task, error } = await supabase
      .from('agent_tasks')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('Error creating agent task:', error);
      throw error;
    }

    return task;
  } catch (error) {
    console.error('Failed to create agent task:', error);
    return null;
  }
}

export async function getAgentTasks(projectId: string): Promise<AgentTask[]> {
  try {
    const { data: tasks, error } = await supabase
      .from('agent_tasks')
      .select('*')
      .eq('project_id', projectId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching agent tasks:', error);
      throw error;
    }

    return tasks || [];
  } catch (error) {
    console.error('Failed to fetch agent tasks:', error);
    return [];
  }
}

// ===== PROJECT VERSIONS =====
export async function createProjectVersion(data: CreateProjectVersion): Promise<ProjectVersion | null> {
  try {
    const { data: version, error } = await supabase
      .from('project_versions')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('Error creating project version:', error);
      throw error;
    }

    return version;
  } catch (error) {
    console.error('Failed to create project version:', error);
    return null;
  }
}

// ===== ERROR LOGS =====
export async function createErrorLog(data: CreateErrorLog): Promise<ErrorLog | null> {
  try {
    const { data: errorLog, error } = await supabase
      .from('error_log')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('Error creating error log:', error);
      throw error;
    }

    return errorLog;
  } catch (error) {
    console.error('Failed to create error log:', error);
    return null;
  }
}

// ===== LIBRARY =====
export async function createLibraryItem(data: CreateLibraryItem): Promise<LibraryItem | null> {
  try {
    const { data: item, error } = await supabase
      .from('library')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('Error creating library item:', error);
      throw error;
    }

    return item;
  } catch (error) {
    console.error('Failed to create library item:', error);
    return null;
  }
}

// ===== EDITS =====
export async function createEdit(data: CreateEdit): Promise<Edit | null> {
  try {
    const { data: edit, error } = await supabase
      .from('edits')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('Error creating edit:', error);
      throw error;
    }

    return edit;
  } catch (error) {
    console.error('Failed to create edit:', error);
    return null;
  }
}

// ===== ASSETS =====
export async function createAsset(data: CreateAsset): Promise<Asset | null> {
  try {
    const { data: asset, error } = await supabase
      .from('assets')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('Error creating asset:', error);
      throw error;
    }

    return asset;
  } catch (error) {
    console.error('Failed to create asset:', error);
    return null;
  }
}

// ===== SEO REPORTS =====
export async function createSeoReport(data: CreateSeoReport): Promise<SeoReport | null> {
  try {
    const { data: report, error } = await supabase
      .from('seo_reports')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('Error creating SEO report:', error);
      throw error;
    }

    return report;
  } catch (error) {
    console.error('Failed to create SEO report:', error);
    return null;
  }
}

// ===== ORCHESTRATOR LOGS =====
export async function createOrchestratorLog(data: CreateOrchestratorLog): Promise<OrchestratorLog | null> {
  try {
    const { data: log, error } = await supabase
      .from('orchestrator_logs')
      .insert([data])
      .select()
      .single();

    if (error) {
      console.error('Error creating orchestrator log:', error);
      throw error;
    }

    return log;
  } catch (error) {
    console.error('Failed to create orchestrator log:', error);
    return null;
  }
}

// Legacy function for backward compatibility (can be removed later)
export async function createCasinoSubmission(data: any): Promise<any> {
  console.warn('createCasinoSubmission is deprecated. Use createProject instead.');
  return createProject({
    status: 'created',
    state: 'initial',
    user_input: data,
    meta: null,
    output_refs: null
  });
} 