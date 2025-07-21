-- AISEO Database Schema
-- Updated with detailed specifications for all tables

-- 1. Projects Table - Main project metadata and user input
CREATE TABLE projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status TEXT DEFAULT 'created' CHECK (status IN ('created', 'generating', 'validating', 'complete', 'error')),
    state TEXT,
    user_input JSONB,
    meta JSONB,
    output_refs JSONB
);

-- 2. Project Files Table - File records with content and metadata
CREATE TABLE project_files (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    path TEXT NOT NULL,
    type TEXT CHECK (type IN ('page', 'component', 'asset', 'config')),
    content TEXT,
    version INTEGER DEFAULT 1,
    blocks JSONB,
    author TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Agent Tasks Table - Agent execution logs and results
CREATE TABLE agent_tasks (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    agent TEXT NOT NULL,
    task TEXT NOT NULL,
    input JSONB,
    output JSONB,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'success', 'error')),
    started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE,
    logs JSONB,
    error TEXT
);

-- 4. History/Versioning Table - Change tracking and snapshots
CREATE TABLE project_versions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    version INTEGER NOT NULL,
    snapshot JSONB,
    change_reason TEXT,
    author TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Error Log Table - Debugging and orchestration errors
CREATE TABLE error_log (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    agent TEXT,
    step TEXT,
    error TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Library Table - Pre-made blocks and sections
CREATE TABLE library (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    tags JSONB,
    code TEXT NOT NULL,
    meta JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Edits Table - User and agent edit logs
CREATE TABLE edits (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    file_id UUID REFERENCES project_files(id) ON DELETE SET NULL,
    agent TEXT,
    edit_type TEXT,
    diff JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. Assets Table - Storage references for media files
CREATE TABLE assets (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    type TEXT CHECK (type IN ('logo', 'bg', 'icon', 'image', 'generated_image')),
    url TEXT NOT NULL,
    meta JSONB,
    used_in JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. SEO Reports Table - SEO evaluation results
CREATE TABLE seo_reports (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    agent_task_id UUID REFERENCES agent_tasks(id) ON DELETE SET NULL,
    report JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 10. Orchestrator Logs Table - Workflow execution logs
CREATE TABLE orchestrator_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    step TEXT,
    agent TEXT,
    started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'success', 'error')),
    output JSONB,
    error TEXT
);

-- Indexes for better performance
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_projects_state ON projects(state);
CREATE INDEX idx_project_files_project_id ON project_files(project_id);
CREATE INDEX idx_project_files_type ON project_files(type);
CREATE INDEX idx_agent_tasks_project_id ON agent_tasks(project_id);
CREATE INDEX idx_agent_tasks_status ON agent_tasks(status);
CREATE INDEX idx_agent_tasks_agent ON agent_tasks(agent);
CREATE INDEX idx_project_versions_project_id ON project_versions(project_id);
CREATE INDEX idx_project_versions_version ON project_versions(version);
CREATE INDEX idx_error_log_project_id ON error_log(project_id);
CREATE INDEX idx_error_log_agent ON error_log(agent);
CREATE INDEX idx_library_type ON library(type);
CREATE INDEX idx_edits_project_id ON edits(project_id);
CREATE INDEX idx_edits_file_id ON edits(file_id);
CREATE INDEX idx_assets_project_id ON assets(project_id);
CREATE INDEX idx_assets_type ON assets(type);
CREATE INDEX idx_seo_reports_project_id ON seo_reports(project_id);
CREATE INDEX idx_orchestrator_logs_project_id ON orchestrator_logs(project_id);
CREATE INDEX idx_orchestrator_logs_status ON orchestrator_logs(status); 