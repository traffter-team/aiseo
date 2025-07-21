# AISEO Project - Claude AI Documentation

## Project Overview
AISEO is a full-stack AI-powered SEO generation platform designed specifically for casino brands. The platform uses AI agents to generate SEO-optimized content with comprehensive project management, versioning, and orchestration systems. The platform features a comprehensive page library system with 20+ predefined page types and an interactive structure builder for creating customized casino websites.

## Tech Stack
- **Frontend**: Next.js 14+ with App Router
- **Backend**: Node.js with Express.js
- **Database**: Supabase (PostgreSQL)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Code Editor**: Sandpack (@codesandbox/sandpack-react)
- **Package Manager**: npm
- **AI Integration**: Claude API with multi-agent system

## Development Commands

- `npm run dev` - Start development server with Turbopack (opens at http://localhost:3000)
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Claude API Integration

The platform includes a scalable multi-agent Claude API system with 13 specialized agents for AI-powered content generation:

### API Endpoints
- `GET /api/claude` - Simple test endpoint
- `POST /api/claude/agent` - Generic agent executor (handles all 13 agents)
- `GET /api/claude/agent` - Get available agents and models

### Claude Models Available
- `claude-3-5-sonnet-20241022` - Best for complex reasoning, coding, analysis
- `claude-3-sonnet-20240229` - Balanced performance and cost
- `claude-3-5-haiku-20241022` - Fastest and most cost-effective
- `claude-3-opus-20240229` - Most capable for complex tasks

### Environment Variables
```env
CLAUDE_API_KEY=sk-ant-api03-YOUR_API_KEY_HERE
OPENAI_API_KEY=sk-proj-YOUR_OPENAI_API_KEY_HERE
```

### Agent System Architecture
The system uses a generic agent executor (`src/lib/agent-executor.ts`) that can handle all 10 specialized agents:
- Each agent has optimized model selection and configuration
- Standardized response format with metadata
- Automatic prompt filling with user input
- Error handling and execution tracking

## Database Schema (Updated)

### Core Tables Structure

#### 1. **projects** - Main Project Management
```sql
- id: UUID (PK)
- created_at/updated_at: timestamp
- status: text/enum (created, generating, validating, complete, error)
- state: text (which agent/module is active, or next step)
- user_input: JSONB (raw fields from initial form)
- meta: JSONB (project-level settings/config, project_name, form_version, submitted_at, site_type, structure)
- output_refs: JSONB (links/IDs to outputs or reports if needed)
```

**User Input Structure (organized order):**
```json
{
  "brand_name": "Casino Name",
  "target_country": "United States", 
  "target_language": "English",
  "site_type": "multi-page",
  "site_type_selected_at": "2025-07-18T15:30:00.000Z",
  "structure": {
    "selectedPages": ["Home", "Reviews", "Bonuses"],
    "pageSections": {
      "Home": ["Hero Banner", "Why Choose Us", "Footer"],
      "Reviews": ["Review Headline", "Rating Summary Box"]
    },
    "totalPages": 3,
    "structureCompletedAt": "2025-07-18T15:30:00.000Z"
  }
}
```

**Meta Structure:**
```json
{
  "form_version": "1.0",
  "submitted_at": "2024-01-01T00:00:00.000Z",
  "project_name": "casino-name-us-en-20240101",
  "site_type": "multi-page",
  "site_type_selected_at": "2024-01-01T00:00:00.000Z",
  "structure": {
    "selectedPages": ["Reviews", "Bonuses", "FAQ"],
    "pageSections": {
      "Home": ["Hero Banner", "Why Choose Us", "Footer"],
      "Reviews": ["Review Headline", "Rating Summary Box"],
      "Bonuses": ["Bonuses Headline", "Top Bonus Offers Table"],
      "FAQ": ["FAQ Headline", "Categorized Q&A Blocks"]
    },
    "totalPages": 4,
    "structureCompletedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

#### 2. **project_files** - File Management
```sql
- id: UUID (PK)
- project_id: UUID (FK to projects)
- path: text (e.g. pages/index.tsx)
- type: text/enum (page, component, asset, config)
- content: text (code/content)
- version: int (for file versioning)
- blocks: JSONB (refs to library blocks used)
- author: text (agent or "system")
- created_at/updated_at: timestamp
```

#### 3. **agent_tasks** - AI Agent Tracking
```sql
- id: UUID (PK)
- project_id: UUID (FK to projects)
- agent: text (agent/module name)
- task: text (task/description)
- input: JSONB (data/prompt/context used)
- output: JSONB (resulting code/content/plan)
- status: text/enum (pending, success, error)
- started_at/completed_at: timestamp
- logs: JSONB (extra info, debug)
- error: text (if error)
```

#### 4. **project_versions** - Versioning System
```sql
- id: UUID (PK)
- project_id: UUID (FK to projects)
- version: int (incrementing per project)
- snapshot: JSONB (entire project/files state)
- change_reason: text (what triggered snapshot)
- author: text (agent/user/system)
- created_at: timestamp
```

#### 5. **error_log** - Debugging & Monitoring
```sql
- id: UUID (PK)
- project_id: UUID (FK to projects)
- agent: text (module/agent name)
- step: text (where in workflow)
- error: text (message/stack)
- created_at: timestamp
```

#### 6. **library** - Reusable Content
```sql
- id: UUID (PK)
- name: text
- type: text (e.g. hero, feature, footer)
- tags: JSONB (e.g. ["animated", "dark", "minimal"])
- code: text (block/component code)
- meta: JSONB (preview info, design tokens, dependencies)
- created_at/updated_at: timestamp
```

#### 7. **edits** - Change Logging
```sql
- id: UUID (PK)
- project_id: UUID (FK to projects)
- file_id: UUID (FK to project_files, nullable)
- agent: text (who/what made the edit)
- edit_type: text (what kind of edit)
- diff: JSONB (change details)
- created_at: timestamp
```

#### 8. **assets** - Media Management
```sql
- id: UUID (PK)
- project_id: UUID (FK to projects)
- type: text (logo, bg, icon, image, generated_image)
- url: text (Supabase Storage URL)
- meta: JSONB (file type, size, etc.)
- used_in: JSONB (file/block refs)
- created_at: timestamp
```

#### 9. **seo_reports** - SEO Analysis
```sql
- id: UUID (PK)
- project_id: UUID (FK to projects)
- agent_task_id: UUID (FK to agent_tasks)
- report: JSONB (SEO info, issues, scores, suggestions)
- created_at: timestamp
```

#### 10. **orchestrator_logs** - Workflow Management
```sql
- id: UUID (PK)
- project_id: UUID (FK to projects)
- step: text (orchestration stage)
- agent: text (which module ran)
- started_at/completed_at: timestamp
- status: text/enum (pending, success, error)
- output: JSONB (resulting data)
- error: text (if error)
```

## AI Agent System Architecture

### Agent Types (13 Specialized Agents)

**Core Project Agents:**
- **new-project** - Initial project setup and configuration
- **ui** - UI design and user interface creation
- **html-structure** - HTML structure and page layouts
- **composer** - Composes and assembles content and components

**Validation & Testing Agents:**
- **tester-validator-reviewer** - Tests, validates, and reviews generated content and code

**Content & SEO Agents:**
- **seo** - SEO optimization and analysis
- **content** - Generates and manages content
- **researcher** - Conducts web research and gathers casino information (background execution)

**Specialized Agents:**
- **unicalizator** - Ensures content uniqueness and originality
- **decomposer** - Breaks down complex tasks into smaller components

**Orchestration & Management:**
- **orchestrator** - Supervises and controls the entire workflow
- **summarizer** - Analyzes and summarizes project status for context
- **file-report** - Generates file structure reports for agents

### Orchestrator Agent Service
The platform includes a dedicated orchestrator service (`src/services/orchestrator_agent.ts`) that:

- **Workflow Control**: Manages the entire project workflow from start to finish
- **Agent Supervision**: Triggers agents in the correct order and handles dependencies
- **Error Handling**: Implements retry logic and error recovery mechanisms
- **Status Monitoring**: Tracks project progress and updates status in real-time
- **Context Management**: Provides project context and file information to agents

**Key Features:**
- **Summarizer Function**: Generates project status summaries for agent context
- **File Report Function**: Maintains current file/folder lists for each agent
- **Workflow Steps**: Manages sequential and parallel agent execution
- **Retry Logic**: Handles failed tasks with configurable retry attempts
- **Progress Tracking**: Monitors completion status and estimates remaining time

### Researcher Agent Service
The platform includes a dedicated researcher service (`src/services/researcher_agent.ts`) for background web research:

- **Background Execution**: Automatically starts after Step 1 completion
- **ChatGPT Integration**: Uses OpenAI GPT-4 (4.1 equivalent) for web research capabilities with timeout protection
- **Casino Data Collection**: Gathers bonuses, providers, top slots, and logo information
- **Multi-Source Research**: Searches casino.guru, askgamblers.com, casino.org, onlinecasinogroups.com
- **Structured Output**: Returns data in flat list JSON format

**Key Features:**
- **Auto-Trigger**: Starts automatically when user completes brand information
- **Non-Blocking**: Runs in background while user works on site type selection
- **Progress Tracking**: Real-time status monitoring with 0-100% progress
- **Error Handling**: Comprehensive error management with retry logic
- **Database Integration**: Results saved to `user_input.research_data`
- **API Endpoints**: `POST /api/researcher/start` and `GET /api/researcher/start?projectId=xxx`

**Agent Tasks Database Logging:**
- **Start Task**: Logs when research begins with full input parameters
- **In-Progress Task**: Logs during execution with progress updates
- **Success Task**: Logs completed research with full results
- **Error Task**: Logs failures with detailed error information and stack traces
- All phases tracked in `agent_tasks` table with comprehensive metadata

### Agent Execution System
The platform uses a sophisticated agent execution system:

**Core Components:**
- `src/lib/claude-api.ts` - Claude API client with model configurations
- `src/lib/agent-executor.ts` - Generic agent executor for all 13 agents
- `src/services/system-prompts.ts` - System prompts for all agents
- `src/services/new_project_agent.ts` - Example agent implementation

**Agent Configuration:**
Each agent has optimized settings:
- **new-project**: Claude 3.5 Sonnet, 4096 tokens, temp 0.3 (best for structure)
- **ui**: Claude 3 Sonnet, 3000 tokens, temp 0.5 (balanced for design)
- **html-structure**: Claude 3.5 Sonnet, 4096 tokens, temp 0.2 (precise for code)
- **seo**: Claude 3.5 Sonnet, 3000 tokens, temp 0.3 (analytical)
- **content**: Claude 3 Sonnet, 4096 tokens, temp 0.6 (creative)
- **researcher**: Claude 3.5 Haiku, 3000 tokens, temp 0.4 (fast research)
- **unicalizator**: Claude 3.5 Haiku, 2000 tokens, temp 0.2 (efficient checking)
- **decomposer**: Claude 3.5 Haiku, 2000 tokens, temp 0.3 (task breakdown)

**Workflow Process:**
1. User submits initial form → Creates project in `projects` table
2. User selects site type → Updates project state to `structure-selection`
3. User selects pages/sections → Updates project state to `agent-processing`
4. **new_project_agent** automatically called → Logs in `agent_tasks`
5. Claude generates project structure → Response displayed to user
6. Project files created → Stored in `project_files` table
7. Project state updated → `structure-generated`
8. User sees Claude's response → Complete project structure
9. Additional agents can be triggered → Logged in `agent_tasks`
10. Versions tracked → Snapshots in `project_versions`
11. Errors logged → Stored in `error_log`

### System Prompts
- All agent prompts managed in `src/services/system-prompts.ts`
- Utility functions: `getAgentPrompt()`, `getAgentDescription()`, `getAllAgentTypes()`
- Each agent has specific system prompt for consistent behavior
- Generic agent executor handles prompt filling and model selection

## Auto-Continue LLM Utility

A generic utility for handling long or truncated responses from LLMs (Claude, ChatGPT, etc.) is implemented in `src/services/auto-continue.ts`.

### Purpose
- Ensures complete extraction of long lists or multi-part responses from LLMs, which may otherwise be truncated due to token limits.
- Automatically detects when a response is incomplete (e.g., ends with 'CONTINUE') and sends follow-up prompts until the full data is received.

### How It Works
- You provide a function to call the LLM, an initial prompt, and a parser to extract results and detect if continuation is needed.
- The utility loops, sending a follow-up prompt (e.g., 'Continue from where you left off...') if the response is incomplete, and aggregates all results.
- Stops when the list is complete or a maximum number of loops is reached.

### Example Usage
```ts
import { autoContinueLLM, parseListWithContinueMarker } from '@/services/auto-continue';

async function callLLM(prompt: string): Promise<string> {
  // ...call Claude or ChatGPT API and return the response as a string
}

const { allResults } = await autoContinueLLM<string>({
  callLLM,
  initialPrompt: "List all casino providers. If too long, say 'CONTINUE' at the end.",
  parseResponse: parseListWithContinueMarker,
  maxLoops: 5, // optional
});
```

### Extensibility
- The utility is fully typed and can be customized for any LLM or list extraction task.
- See `src/services/auto-continue.ts` for details.

## Form Integration Workflow

### Multi-Step Form Process
The main form at `/web-ui/main-page` integrates directly with the agent system:

**Step 1: Initial Form**
- Collects: brand_name, target_country, target_language
- Creates project in database with state: `created`
- Generates project name: `brandname-countrycode-languagecode-date`

**Step 2: Site Type Selection**
- Collects: site_type ('single-page' or 'multi-page')
- Updates project state to: `structure-selection`
- Stores data in `user_input` JSONB field

**Step 3: Structure Selection**
- User selects pages from 20+ predefined page types
- User selects sections for each page
- Comprehensive page library with SEO-optimized sections
- Button changes to "Generate Project Structure"

**Step 4: Agent Processing** (Automatic)
- Form submission triggers `new_project_agent`
- Complete structure data passed to Claude:
  ```json
  {
    "selectedPages": ["Home", "Reviews", "Bonuses"],
    "pageSections": {
      "Home": ["Hero Banner", "Why Choose Us", "Footer"],
      "Reviews": ["Review Headline", "Rating Summary Box"]
    },
    "totalPages": 3,
    "target_country": "United States",
    "target_language": "English",
    "site_type": "multi-page"
  }
  ```
- Agent task logged in `agent_tasks` table
- Project state updated to: `agent-processing`

**Step 5: Claude Response Display**
- Shows Claude's generated project structure
- Parses JSON response and creates entries in `project_files`
- Project state updated to: `structure-generated`
- User can start new project or view details

### Database Integration
- **Projects Table**: Stores user input and project metadata
- **Agent Tasks Table**: Logs all agent executions with input/output
- **Project Files Table**: Stores file structure from Claude's response
- **Error Handling**: Comprehensive logging and error tracking

## Project Structure
```
src/
├── app/
│   └── web-ui/
│       ├── main-page/          # Main landing page with multi-step form
│       ├── dashboard/          # Project dashboard (future)
│       ├── analytics/          # SEO analytics (future)
│       └── code-editor/        # Live code editor (future)
├── lib/
│   ├── db/
│   │   ├── supabase.ts         # Supabase client config
│   │   ├── types.ts            # Database type definitions
│   │   ├── queries.ts          # Database query functions
│   │   └── schema.sql          # Database schema
│   ├── page-library.ts         # Page templates and section definitions
│   └── utils.ts                # Utility functions
├── services/
│   └── system-prompts.ts       # AI agent system prompts
└── components/                 # Reusable UI components
```

## Page Library System

### **20+ Predefined Page Types**
The platform includes a comprehensive library of casino-specific page templates:

**Core Pages:**
- **Home** - Hero banner, casino showcase, testimonials, FAQ preview
- **Reviews** - Casino review pages with ratings and analysis
- **Guide** - Game/strategy guides with step-by-step instructions
- **Bonuses** - Bonus offers, types, and claiming guides
- **Blog** - Content marketing with SEO-optimized articles
- **FAQ** - Frequently asked questions with search functionality
- **About** - Company story, team, and trust factors
- **Contact** - Contact forms and information
- **Legal** - Terms, privacy, and responsible gaming policies

**Specialized Pages:**
- **Slots/Games Hub** - Game categories, filters, and RTP information
- **Providers** - Game software provider listings and comparisons
- **Payment Methods** - Banking options, processing times, and security
- **Tournaments & Events** - Tournament schedules and participation guides
- **Mobile Apps** - App downloads, features, and mobile-exclusive bonuses
- **VIP/Loyalty Program** - Tier structures and exclusive benefits
- **News** - Industry updates and casino announcements
- **Glossary** - Casino and gambling terminology

### **Section Definitions**
Each page includes predefined sections with:
- **Purpose** - Clear explanation of section function
- **SEO Notes** - Optimization guidance and best practices
- **Content Guidelines** - Specific content requirements
- **Technical Specifications** - Implementation details

### **Library Structure**
```typescript
interface Section {
  name: string;
  purpose: string;
  seoNote?: string;
}

interface PageTemplate {
  name: string;
  suggestedSections: Section[];
}

interface PageLibrary {
  [key: string]: PageTemplate;
}
```

## User Interface & Workflow

### **Multi-Step Project Setup**
1. **Brand Information** - Casino name, target country, language
2. **Site Type Selection** - Single page vs multi-page choice
3. **Structure Builder** - Interactive page and section selection

### **Interactive Features**
- **Clickable Cards** - Entire sections and pages are clickable
- **Visual Feedback** - Color-coded states (blue for selected, green for sections)
- **Real-time Updates** - Immediate visual feedback on selections
- **Responsive Design** - Works on desktop, tablet, and mobile
- **SEO Guidance** - Built-in SEO notes displayed inline

### **Data Flow**
1. User selects pages and sections
2. Structure data stored in `projects.meta.structure`
3. AI agents receive complete structure information
4. Content generation based on selected pages and sections

## Key Features
- **Flexible User Input** - JSONB storage for dynamic form data
- **10 Specialized AI Agents** - Each with specific roles and system prompts
- **Agent Attribution** - Track which agent made which changes
- **Version Control** - Complete project history with snapshots
- **Error Tracking** - Comprehensive debugging and monitoring
- **Asset Management** - Centralized storage for all media files
- **SEO Integration** - Direct linking between tasks and reports
- **System Prompt Management** - Centralized agent behavior control
- **Page Library System** - 20+ predefined page types with SEO-optimized sections
- **Interactive Structure Builder** - Visual page and section selection
- **Multi-Step Project Setup** - Guided project creation workflow

## Development Guidelines
- Use TypeScript interfaces from `src/lib/db/types.ts`
- Follow the established database schema exactly
- Implement proper error handling for all database operations
- Use JSONB fields for flexible data storage
- Maintain proper foreign key relationships
- Follow the AI agent workflow patterns

## Environment Setup
- Supabase project with the exact schema
- Environment variables in `.env.local`
- Next.js development server
- TypeScript strict mode enabled

## Researcher Agent: Production Implementation

**Current Configuration:**
- **Primary API**: Perplexity AI (`sonar-pro` model)
- **Fallback API**: ChatGPT (GPT-4) - available but not active
- **Performance**: Optimized timeouts (15s) and reduced retries (2x)
- **Progress Tracking**: Real-time updates (10% → 30% → 70% → 90% → 100%)

**API Keys Required:**
```env
PERPLEXITY_API_KEY=pplx-your-key-here
OPENAI_API_KEY=sk-proj-your-key-here  # Optional fallback
```

**Features:**
- ✅ Automatic background execution after Step 1 completion
- ✅ Real-time progress updates every 2 seconds
- ✅ Automatic retry with exponential backoff for API failures
- ✅ Database persistence with memory fallback
- ✅ Error handling and recovery mechanisms
- ✅ Structured research data output (bonuses, providers, top slots, logos)

**Research Data Structure:**
```json
{
  "bonuses": ["Welcome Bonus up to $1000", "Free Spins on Sign Up"],
  "providers": ["NetEnt", "Microgaming", "Pragmatic Play"],
  "topSlots": ["Starburst", "Book of Dead", "Gonzo's Quest"],
  "logo": "Casino logo available on official website",
  "metadata": {
    "searchTime": 15234,
    "sourcesChecked": ["casino.guru", "askgamblers.com"],
    "timestamp": "2025-07-21T12:00:00.000Z"
  }
}
```

**Status Integration:**
- Research status is saved to both `projects.meta.research_status` and `projects.user_input.research_status`
- Frontend polls status API every 2 seconds during active research
- Automatic transition from loading → progress → completed → results display
