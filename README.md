# AISEO - AI-Powered SEO Generation Platform

AISEO is a full-stack AI-powered SEO generation platform designed specifically for casino brands. The platform uses AI agents to generate SEO-optimized content with comprehensive project management, versioning, and orchestration systems.

## 🚀 Features

- **AI-Powered Content Generation** - Automated SEO content creation using specialized AI agents
- **Project Management** - Complete project lifecycle management with versioning
- **Live Code Editing** - Real-time code editing and preview with Sandpack
- **SEO Analysis** - Comprehensive SEO evaluation and reporting
- **Asset Management** - Centralized storage for images, logos, and graphics
- **Agent Orchestration** - Intelligent workflow management and task distribution
- **Page Library System** - Comprehensive library of 20+ predefined page types with SEO-optimized sections
- **Interactive Structure Builder** - Visual page and section selection with real-time feedback
- **Multi-Step Project Setup** - Guided project creation with brand, site type, and structure selection

## 🛠️ Tech Stack

- **Frontend**: Next.js 14+ with App Router
- **Backend**: Node.js with Express.js
- **Database**: Supabase (PostgreSQL)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Code Editor**: Sandpack (@codesandbox/sandpack-react)
- **AI Integration**: Claude API with multi-agent system
- **Package Manager**: npm

## 🤖 Claude API Integration

The platform includes a sophisticated multi-agent Claude API system:

### Available Models
- **Claude 3.5 Sonnet** - Best for complex reasoning, coding, and analysis
- **Claude 3 Sonnet** - Balanced performance and cost
- **Claude 3.5 Haiku** - Fastest and most cost-effective
- **Claude 3 Opus** - Most capable for complex tasks

### API Endpoints
- `GET /api/claude` - Simple test endpoint
- `POST /api/claude/agent` - Generic agent executor (handles all 10 agents)
- `GET /api/claude/agent` - Get available agents and models

### Agent System
- **Generic Executor**: `src/lib/agent-executor.ts` handles all agents
- **Model Selection**: Each agent has optimized model configuration
- **Prompt Management**: `src/services/system-prompts.ts` manages all prompts
- **Error Handling**: Comprehensive error tracking and logging

## 📊 Database Schema

The platform uses 10 main database tables for comprehensive functionality:

### 1. **projects** - Main Project Management
- Stores project metadata, user input (JSONB), status tracking, and state management
- Auto-generates project names using format: brandname-countrycode-languagecode-date
- Each new project = one row with flexible user input structure
- Links to all outputs and related data with output_refs JSONB

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

### 2. **project_files** - File Management
- File records with path, type (page/component/asset/config), content, and version
- Supports multiple file types with author attribution
- JSONB blocks for structured content and library references

### 3. **agent_tasks** - AI Agent Tracking
- Detailed agent execution logs with input/output JSONB data
- Task status tracking (pending/success/error) with logs and error handling
- Links to specific projects and workflows with comprehensive logging

### 4. **project_versions** - Versioning System
- Change tracking with snapshots and change reasons
- Version numbering with author attribution
- Audit trail for all major changes with snapshot JSONB

### 5. **error_log** - Debugging & Monitoring
- Comprehensive error tracking by agent and step
- Simplified error logging with context
- Direct project linking for debugging

### 6. **library** - Reusable Content
- Pre-made blocks and sections with code storage
- Categorized content with tags and meta information
- Type-based organization with usage tracking

### 7. **edits** - Change Logging
- User and agent-initiated edit logs with diff tracking
- Agent attribution and edit type classification
- Links to files and projects with detailed change information

### 8. **assets** - Media Management
- Storage references for images, logos, graphics with URL tracking
- Type-based organization (logo/bg/icon/image/generated_image)
- Usage tracking with meta information and file references

### 9. **seo_reports** - SEO Analysis
- SEO evaluation results linked to agent tasks
- Report data stored as JSONB for flexibility
- Direct project and task linking for comprehensive analysis

### 10. **orchestrator_logs** - Workflow Management
- Detailed workflow execution logs with step tracking
- Agent attribution and status monitoring
- Output data storage with error handling

## 🏗️ Project Structure

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

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm
- Supabase account

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aiseo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   CLAUDE_API_KEY=your_claude_api_key
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Set up Supabase database**
   - Create a new Supabase project
   - Run the SQL schema from `src/lib/db/schema.sql` in your Supabase SQL editor
   - Configure Row Level Security (RLS) policies as needed

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Visit the application**
   Open [http://localhost:3000/web-ui](http://localhost:3000/web-ui)

## 📚 Page Library System

The platform includes a comprehensive library of 20+ predefined page types, each with SEO-optimized sections designed specifically for casino websites:

### **Core Page Types:**
- **Home Page** - Hero banner, casino showcase, testimonials, FAQ preview
- **Reviews** - Casino review pages with ratings, analysis, and player feedback
- **Guide** - Game/strategy guides with step-by-step instructions
- **Bonuses** - Bonus offers, types, and claiming guides
- **Blog** - Content marketing with SEO-optimized articles
- **FAQ** - Frequently asked questions with search functionality
- **About** - Company story, team, and trust factors
- **Contact** - Contact forms and information
- **Legal** - Terms, privacy, and responsible gaming policies

### **Specialized Pages:**
- **Slots/Games Hub** - Game categories, filters, and RTP information
- **Providers** - Game software provider listings and comparisons
- **Payment Methods** - Banking options, processing times, and security
- **Tournaments & Events** - Tournament schedules and participation guides
- **Mobile Apps** - App downloads, features, and mobile-exclusive bonuses
- **VIP/Loyalty Program** - Tier structures and exclusive benefits
- **News** - Industry updates and casino announcements
- **Glossary** - Casino and gambling terminology

### **Section Features:**
- **SEO-Optimized Content** - Each section includes SEO notes and best practices
- **Purpose-Driven Design** - Clear explanations of each section's function
- **Flexible Selection** - Users can customize which sections to include
- **Responsive Layout** - All sections are designed for mobile-first approach

## 🎨 User Interface & AI Integration

### **Multi-Step Project Setup with AI:**
1. **Brand Information** - Casino name, target country, and language
2. **Site Type Selection** - Single page vs multi-page website choice
3. **Structure Builder** - Interactive page and section selection
4. **AI Processing** - Automatic Claude integration generates project structure
5. **Results Display** - Shows AI-generated file structure and saves to database

### **Interactive Features:**
- **Clickable Cards** - Entire sections and pages are clickable for easy selection
- **Visual Feedback** - Color-coded states (blue for selected, green for sections)
- **Real-time Updates** - Immediate visual feedback on selections
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **SEO Guidance** - Built-in SEO notes and best practices displayed inline
- **AI Integration** - Seamless Claude API integration with loading states

### **AI-Powered Workflow:**
The form automatically triggers the **new_project_agent** after structure selection:

```typescript
// Complete structure data sent to Claude:
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

### **Database Integration:**
- **Agent Tasks**: All AI executions logged with input/output
- **Project Files**: Claude's response parsed and stored as file structure
- **Error Tracking**: Comprehensive error handling and logging
- **State Management**: Project state tracked through entire workflow

## 🤖 AI Agent System

The platform uses 13 specialized AI agents for different tasks:

### **Core Project Agents:**
- **new-project** - Initial project setup and configuration
- **ui** - UI design and user interface creation
- **html-structure** - HTML structure and page layouts
- **composer** - Composes and assembles content and components

### **Validation & Testing Agents:**
- **tester-validator-reviewer** - Tests, validates, and reviews generated content and code

### **Content & SEO Agents:**
- **seo** - SEO optimization and analysis
- **content** - Generates and manages content
- **researcher** - Conducts web research and gathers casino information (background execution)

### **Specialized Agents:**
- **unicalizator** - Ensures content uniqueness and originality
- **decomposer** - Breaks down complex tasks into smaller components

**Orchestration & Management:**
- **orchestrator** - Supervises and controls the entire workflow
- **summarizer** - Analyzes and summarizes project status for context
- **file-report** - Generates file structure reports for agents

### **Agent Execution System:**
- **Generic Executor**: `src/lib/agent-executor.ts` handles all 13 agents
- **Model Optimization**: Each agent uses the most suitable Claude model
- **Automatic Prompt Filling**: User input automatically fills system prompts
- **Standardized Responses**: All agents return consistent response format
- **Error Handling**: Comprehensive error tracking and logging
- **Configuration Management**: Agent-specific settings for optimal performance

### **Agent Workflow:**
- Agent tasks are logged and tracked in the `agent_tasks` table
- Each agent has specific input/output patterns and error handling
- System prompts are managed in `src/services/system-prompts.ts`
- Complete audit trail of all agent activities
- Real-time execution tracking with metadata
- **Orchestrator Agent**: Supervises workflow, manages dependencies, handles retries
- **Context Enhancement**: Summarizer adds project context to agent prompts
- **File Awareness**: File Report ensures agents know available project files
- **Background Research**: Researcher agent runs automatically after Step 1 completion

### **Researcher Agent - Background Web Research:**
The researcher agent automatically gathers casino information using ChatGPT for web research:

**Execution Flow:**
1. **Auto-Trigger**: Starts automatically after Step 1 (brand info) completion
2. **Background Processing**: Runs while user works on Step 2 (site type selection)
3. **Web Research**: Uses ChatGPT to search specific casino websites
4. **Data Collection**: Gathers bonuses, providers, top slots, and logo information
5. **Database Storage**: Results saved to `user_input.research_data`

**Research Sources:**
- casino.guru
- askgamblers.com/online-casinos
- casino.org
- onlinecasinogroups.com

**Output Structure:**
```json
[
  {"Bonuses": ["Welcome Bonus", "Free Spins"]},
  {"Providers": ["NetEnt", "Microgaming", "Pragmatic Play"]},
  {"Top Slots": ["Slot1", "Slot2", "Slot3"]},
  {"Logo": "Logo URL or description"}
]
```

**API Endpoints:**
- `POST /api/researcher/start` - Start background research
- `GET /api/researcher/start?projectId=xxx` - Check research status

**Configuration:**
- Uses OpenAI GPT-4 (4.1 equivalent) for web research capabilities with timeout protection
- Configurable timeout and retry logic
- Real-time progress tracking (0-100%)
- Comprehensive error handling and logging

**Agent Tasks Database Logging:**
- **Start Task**: Logs when research begins with full input parameters
- **In-Progress Task**: Logs during execution with progress updates
- **Success Task**: Logs completed research with full results
- **Error Task**: Logs failures with detailed error information and stack traces
- All phases tracked in `agent_tasks` table with comprehensive metadata

### Researcher Agent: Perplexity & ChatGPT Support
- The researcher agent can use either ChatGPT (OpenAI) or Perplexity for web research.
- By default, Perplexity is now used for research tasks. The code is structured for easy toggling between models.
- To use Perplexity, set the `PERPLEXITY_API_KEY` environment variable in your `.env.local` file.
- To switch back to ChatGPT, comment/uncomment the relevant lines in `performResearch` in `src/services/researcher_agent.ts`.
- Both integrations use the same prompt and result parsing logic for consistency.

## Utilities

### Auto-Continue LLM Utility (`src/services/auto-continue.ts`)

This utility provides a generic, reusable function for iteratively calling an LLM (Claude, ChatGPT, etc.) until a complete result is obtained, using a continuation marker (e.g., 'CONTINUE').

**Why use it?**
- LLMs often truncate long lists or responses due to token limits.
- This utility automatically detects when a response is incomplete and sends follow-up prompts until the full list is received.
- Works for any LLM agent (Claude, ChatGPT, etc.) and any list-type extraction task (providers, slots, bonuses, etc.).

**How it works:**
- You provide a function to call the LLM, an initial prompt, and a parser to extract results and detect if continuation is needed.
- The utility loops, sending a follow-up prompt (e.g., 'Continue from where you left off...') if the response is incomplete, and aggregates all results.
- The process stops when the list is complete or a maximum number of loops is reached.

**Example Usage:**
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

**See:** `src/services/auto-continue.ts` for full details and customization options.

## 📝 Development Guidelines

- Follow TypeScript best practices with strict typing
- Use functional components with React hooks
- Implement proper error handling and loading states
- Follow the established file structure and naming conventions
- Use Tailwind CSS for styling with shadcn/ui components
- Implement proper database operations with error handling

## 🔧 Database Setup

1. **Create Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Note your project URL and anon key

2. **Run Database Schema**
   - Copy the contents of `src/lib/db/schema.sql`
   - Paste into your Supabase SQL editor
   - Execute to create all tables and indexes

3. **Configure Environment Variables**
   - Update `.env.local` with your Supabase credentials
   - Restart the development server

## 📄 License

This project is proprietary software. All rights reserved.

## 🤝 Contributing

This is a private project. Please contact the development team for contribution guidelines.
