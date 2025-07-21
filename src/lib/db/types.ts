// Database schema types for AISEO project
// Updated to match the detailed specifications

// 1. Projects Table - Main project metadata and user input
export interface Project {
  id: string;
  created_at: string;
  updated_at: string;
  status: 'created' | 'generating' | 'validating' | 'complete' | 'error';
  state?: string;
  user_input?: any;
  meta?: any;
  output_refs?: any;
}

export interface CreateProject {
  status?: 'created' | 'generating' | 'validating' | 'complete' | 'error';
  state?: string;
  user_input?: any;
  meta?: any;
  output_refs?: any;
}

// 2. Project Files Table - File records with content and metadata
export interface ProjectFile {
  id: string;
  project_id: string;
  path: string;
  type?: 'page' | 'component' | 'asset' | 'config';
  content?: string;
  version: number;
  blocks?: any;
  author?: string;
  created_at: string;
  updated_at: string;
}

export interface CreateProjectFile {
  project_id: string;
  path: string;
  type?: 'page' | 'component' | 'asset' | 'config';
  content?: string;
  version?: number;
  blocks?: any;
  author?: string;
}

// 3. Agent Tasks Table - Agent execution logs and results
export interface AgentTask {
  id: string;
  project_id: string;
  agent: string;
  task: string;
  input?: any;
  output?: any;
  status: 'pending' | 'success' | 'error';
  started_at: string;
  completed_at?: string;
  logs?: any;
  error?: string;
}

export interface CreateAgentTask {
  project_id: string;
  agent: string;
  task: string;
  input?: any;
  output?: any;
  status?: 'pending' | 'success' | 'error';
  logs?: any;
  error?: string;
}

// 4. History/Versioning Table - Change tracking and snapshots
export interface ProjectVersion {
  id: string;
  project_id: string;
  version: number;
  snapshot?: any;
  change_reason?: string;
  author?: string;
  created_at: string;
}

export interface CreateProjectVersion {
  project_id: string;
  version: number;
  snapshot?: any;
  change_reason?: string;
  author?: string;
}

// 5. Error Log Table - Debugging and orchestration errors
export interface ErrorLog {
  id: string;
  project_id: string;
  agent?: string;
  step?: string;
  error: string;
  created_at: string;
}

export interface CreateErrorLog {
  project_id: string;
  agent?: string;
  step?: string;
  error: string;
}

// 6. Library Table - Pre-made blocks and sections
export interface LibraryItem {
  id: string;
  name: string;
  type: string;
  tags?: any;
  code: string;
  meta?: any;
  created_at: string;
  updated_at: string;
}

export interface CreateLibraryItem {
  name: string;
  type: string;
  tags?: any;
  code: string;
  meta?: any;
}

// 7. Edits Table - User and agent edit logs
export interface Edit {
  id: string;
  project_id: string;
  file_id?: string;
  agent?: string;
  edit_type?: string;
  diff?: any;
  created_at: string;
}

export interface CreateEdit {
  project_id: string;
  file_id?: string;
  agent?: string;
  edit_type?: string;
  diff?: any;
}

// 8. Assets Table - Storage references for media files
export interface Asset {
  id: string;
  project_id: string;
  type?: 'logo' | 'bg' | 'icon' | 'image' | 'generated_image';
  url: string;
  meta?: any;
  used_in?: any;
  created_at: string;
}

export interface CreateAsset {
  project_id: string;
  type?: 'logo' | 'bg' | 'icon' | 'image' | 'generated_image';
  url: string;
  meta?: any;
  used_in?: any;
}

// 9. SEO Reports Table - SEO evaluation results
export interface SeoReport {
  id: string;
  project_id: string;
  agent_task_id?: string;
  report?: any;
  created_at: string;
}

export interface CreateSeoReport {
  project_id: string;
  agent_task_id?: string;
  report?: any;
}

// 10. Orchestrator Logs Table - Workflow execution logs
export interface OrchestratorLog {
  id: string;
  project_id: string;
  step?: string;
  agent?: string;
  started_at: string;
  completed_at?: string;
  status: 'pending' | 'success' | 'error';
  output?: any;
  error?: string;
}

export interface CreateOrchestratorLog {
  project_id: string;
  step?: string;
  agent?: string;
  status?: 'pending' | 'success' | 'error';
  output?: any;
  error?: string;
}

// Legacy interface for backward compatibility (can be removed later)
export interface CasinoSubmission {
  id: string;
  brand_name: string;
  target_country: string;
  target_language: string;
  created_at: string;
  updated_at: string;
}

export interface CreateCasinoSubmission {
  brand_name: string;
  target_country: string;
  target_language: string;
}

export interface UpdateCasinoSubmission {
  brand_name?: string;
  target_country?: string;
  target_language?: string;
} 