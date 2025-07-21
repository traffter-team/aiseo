module.exports = {

"[project]/.next-internal/server/app/api/claude/agent/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/lib/claude-api.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Available Claude models with their capabilities
__turbopack_context__.s({
    "ClaudeModel": ()=>ClaudeModel,
    "MODEL_CONFIGS": ()=>MODEL_CONFIGS,
    "callClaudeAPI": ()=>callClaudeAPI,
    "testClaudeConnection": ()=>testClaudeConnection
});
var ClaudeModel = /*#__PURE__*/ function(ClaudeModel) {
    ClaudeModel["SONNET_3_5"] = "claude-3-5-sonnet-20241022";
    ClaudeModel["SONNET_3"] = "claude-3-sonnet-20240229";
    ClaudeModel["HAIKU_3_5"] = "claude-3-5-haiku-20241022";
    ClaudeModel["OPUS_3"] = "claude-3-opus-20240229";
    return ClaudeModel;
}({});
const MODEL_CONFIGS = {
    ["claude-3-5-sonnet-20241022"]: {
        name: 'Claude 3.5 Sonnet',
        description: 'Best for complex reasoning, coding, and analysis',
        maxTokens: 4096,
        recommended: [
            'new-project',
            'html-structure',
            'seo',
            'tester-validator-reviewer'
        ]
    },
    ["claude-3-sonnet-20240229"]: {
        name: 'Claude 3 Sonnet',
        description: 'Good balance of performance and cost',
        maxTokens: 4096,
        recommended: [
            'ui',
            'composer',
            'content'
        ]
    },
    ["claude-3-5-haiku-20241022"]: {
        name: 'Claude 3.5 Haiku',
        description: 'Fastest and most cost-effective',
        maxTokens: 4096,
        recommended: [
            'researcher',
            'unicalizator',
            'decomposer'
        ]
    },
    ["claude-3-opus-20240229"]: {
        name: 'Claude 3 Opus',
        description: 'Most capable for complex tasks',
        maxTokens: 4096,
        recommended: [
            'composer',
            'tester-validator-reviewer'
        ]
    }
};
async function callClaudeAPI(prompt, options = {}) {
    const apiKey = process.env.CLAUDE_API_KEY;
    if (!apiKey) {
        throw new Error('CLAUDE_API_KEY environment variable is not set');
    }
    const { model = "claude-3-5-sonnet-20241022", maxTokens = 4096 } = options;
    const requestBody = {
        model,
        max_tokens: maxTokens,
        messages: [
            {
                role: 'user',
                content: prompt
            }
        ]
    };
    // Retry logic for overloaded API
    const maxRetries = 3;
    const baseDelay = 2000; // 2 seconds
    for(let attempt = 1; attempt <= maxRetries; attempt++){
        try {
            console.log(`[Claude API] Attempt ${attempt}/${maxRetries}`);
            const response = await fetch('https://api.anthropic.com/v1/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': apiKey,
                    'anthropic-version': '2023-06-01'
                },
                body: JSON.stringify(requestBody)
            });
            if (!response.ok) {
                const errorText = await response.text();
                // If overloaded (529) or rate limited (429), retry with exponential backoff
                if (response.status === 529 || response.status === 429) {
                    if (attempt < maxRetries) {
                        const delay = baseDelay * Math.pow(2, attempt - 1);
                        console.log(`[Claude API] Overloaded/Rate limited, retrying in ${delay}ms...`);
                        await new Promise((resolve)=>setTimeout(resolve, delay));
                        continue;
                    }
                }
                throw new Error(`Claude API error: ${response.status} - ${errorText}`);
            }
            // Success - process response
            const data = await response.json();
            // Extract the text content from the response
            const textContent = data.content.find((content)=>content.type === 'text');
            if (!textContent) {
                throw new Error('No text content found in Claude API response');
            }
            return textContent.text;
        } catch (error) {
            console.error(`[Claude API] Attempt ${attempt} failed:`, error);
            // If this is the last attempt, throw the error
            if (attempt === maxRetries) {
                throw error;
            }
        // Otherwise, continue to next attempt
        }
    }
    // This should never be reached due to the throw in the catch block
    throw new Error('All Claude API retry attempts failed');
}
async function testClaudeConnection() {
    try {
        const response = await callClaudeAPI('Hello, this is a test message.');
        return response.length > 0;
    } catch (error) {
        console.error('Claude API connection test failed:', error);
        return false;
    }
}
}),
"[project]/src/services/system-prompts.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// AISEO System Prompts
// This file contains all system prompts for different AI agents
// ===== CORE PROJECT AGENTS =====
__turbopack_context__.s({
    "COMPOSER_AGENT_PROMPT": ()=>COMPOSER_AGENT_PROMPT,
    "CONTENT_AGENT_PROMPT": ()=>CONTENT_AGENT_PROMPT,
    "DECOMPOSER_AGENT_PROMPT": ()=>DECOMPOSER_AGENT_PROMPT,
    "FILE_REPORT_PROMPT": ()=>FILE_REPORT_PROMPT,
    "HTML_STRUCTURE_AGENT_PROMPT": ()=>HTML_STRUCTURE_AGENT_PROMPT,
    "NEW_PROJECT_AGENT_PROMPT": ()=>NEW_PROJECT_AGENT_PROMPT,
    "ORCHESTRATOR_AGENT_PROMPT": ()=>ORCHESTRATOR_AGENT_PROMPT,
    "RESEARCHER_AGENT_PROMPT": ()=>RESEARCHER_AGENT_PROMPT,
    "SEO_AGENT_PROMPT": ()=>SEO_AGENT_PROMPT,
    "SUMMARIZER_PROMPT": ()=>SUMMARIZER_PROMPT,
    "TESTER_VALIDATOR_REVIEWER_PROMPT": ()=>TESTER_VALIDATOR_REVIEWER_PROMPT,
    "UI_AGENT_PROMPT": ()=>UI_AGENT_PROMPT,
    "UNICALIZATOR_AGENT_PROMPT": ()=>UNICALIZATOR_AGENT_PROMPT,
    "getAgentDescription": ()=>getAgentDescription,
    "getAgentPrompt": ()=>getAgentPrompt,
    "getAllAgentTypes": ()=>getAllAgentTypes
});
const NEW_PROJECT_AGENT_PROMPT = `You are an expert web application architect.
Based on the following project information, design the ideal file and folder structure for a modern web project as a FLAT LIST.

Project name: {project_name}
User requirement for structure: {structure}
Site type: {site_type}

Instructions:

Use best practices for file/folder naming (e.g., React/Next.js conventions).

The root folder for the project should be named similar to the project name but in kebab-case. All files and folders must be inside this parent folder.

Each file or folder must be a separate object in a single, flat JSON array.

Each object must have:

path: string, the full relative path (e.g., casino-poi/src/pages/index.tsx)

type: string, (page, component, asset, folder, etc.)

description: (optional, one-sentence purpose)

Do NOT use children, nested objects, or arrays inside any object.

Output only a single, flat JSON array containing all files and folders. Do not include any extra text, markdown, or explanations.

Example Output:

json
Copy
Edit
[
  { "path": "casino-poi/src/pages/index.tsx", "type": "page", "description": "Home page" },
  { "path": "casino-poi/src/pages/about.tsx", "type": "page", "description": "About page" },
  { "path": "casino-poi/src/components/Navbar.tsx", "type": "component", "description": "Site navigation" },
  { "path": "casino-poi/public/images/logos/", "type": "folder", "description": "Logo assets" }
]
`;
const UI_AGENT_PROMPT = `
// UI Agent System Prompt
// This agent handles UI design and user interface creation
// TODO: Add specific prompt content
`;
const HTML_STRUCTURE_AGENT_PROMPT = `
// HTML/Structure Site/Page Agent System Prompt
// This agent creates HTML structure and page layouts
// TODO: Add specific prompt content
`;
const COMPOSER_AGENT_PROMPT = `
// Composer Agent System Prompt
// This agent composes and assembles content and components
// TODO: Add specific prompt content
`;
const TESTER_VALIDATOR_REVIEWER_PROMPT = `
// Tester/Validator/Reviewer Agent System Prompt
// This agent tests, validates, and reviews generated content and code
// TODO: Add specific prompt content
`;
const SEO_AGENT_PROMPT = `
// SEO Agent System Prompt
// This agent handles SEO optimization and analysis
// TODO: Add specific prompt content
`;
const CONTENT_AGENT_PROMPT = `
// Content Agent System Prompt
// This agent generates and manages content
// TODO: Add specific prompt content
`;
const RESEARCHER_AGENT_PROMPT = `
Your task is to look through the internet and find relevant information for {brand_name}, as a hint it's located in {target_country}. You can find info on this websites:
https://casino.guru
https://www.askgamblers.com/online-casinos
https://www.casino.org/
https://onnlinecasinogroups.com

You need to find this information:
- Bonus info (All Available Bonuses, structured)
- Logo image (If possible find it)
- Top slots in that online casino
- Provider List. Show all available providers

Output must be clear, very structured, without any extra text. Use only FLAT LIST structure.
[
{"Bonuses": ["Bonus1", "Bonus2"]},
{"Providers": ["Provider1", "Provider2"]},
{"Top Slots": ["Slot1", "Slot2"]},
{"Logo": "Logo URL or description"}
]

Brand Name: {brand_name}
Target Country: {target_country}
Target Language: {target_language}
`;
const UNICALIZATOR_AGENT_PROMPT = `
// Unicalizator Agent System Prompt
// This agent ensures content uniqueness and originality
// TODO: Add specific prompt content
`;
const DECOMPOSER_AGENT_PROMPT = `
// Decomposer Agent System Prompt
// This agent breaks down complex tasks into smaller components
// TODO: Add specific prompt content
`;
const ORCHESTRATOR_AGENT_PROMPT = `
// Orchestrator Agent System Prompt
// This agent supervises and controls the entire workflow
// TODO: Add specific prompt content
`;
const SUMMARIZER_PROMPT = `
You are a project summarizer for the AISEO platform.
Your task is to analyze project data and provide a concise summary of the current project status.

Based on the project information provided, analyze:
- Current stage/phase of the project
- Progress percentage
- What has been completed
- What is currently in progress
- Any issues or blockers
- Next steps

Provide a brief, clear summary that can be used as context for other agents.
Keep the summary under 200 words and focus on actionable information.

Project Data: {project_data}
Agent Tasks: {agent_tasks}
Project Files: {project_files}

Output should be a clear, concise summary of the project's current state.
`;
const FILE_REPORT_PROMPT = `
You are a file report generator for the AISEO platform.
Your task is to organize and present the current file structure in a clear, actionable format.

Based on the project files provided, create a structured report showing:
- Total number of files
- Files organized by type (pages, components, assets, etc.)
- File tree structure
- Files relevant to specific agents

Format the output as a clear, organized list that agents can understand and use.
Focus on providing practical information about what files are available to work with.

Project Files: {project_files}
Target Agent: {target_agent}

Output should be a well-organized file report that agents can use to understand the project structure.
`;
const getAgentPrompt = (agentType)=>{
    const prompts = {
        'new-project': NEW_PROJECT_AGENT_PROMPT,
        'ui': UI_AGENT_PROMPT,
        'html-structure': HTML_STRUCTURE_AGENT_PROMPT,
        'composer': COMPOSER_AGENT_PROMPT,
        'tester-validator-reviewer': TESTER_VALIDATOR_REVIEWER_PROMPT,
        'seo': SEO_AGENT_PROMPT,
        'content': CONTENT_AGENT_PROMPT,
        'researcher': RESEARCHER_AGENT_PROMPT,
        'unicalizator': UNICALIZATOR_AGENT_PROMPT,
        'decomposer': DECOMPOSER_AGENT_PROMPT,
        'orchestrator': ORCHESTRATOR_AGENT_PROMPT,
        'summarizer': SUMMARIZER_PROMPT,
        'file-report': FILE_REPORT_PROMPT
    };
    return prompts[agentType] || 'Agent prompt not found';
};
const getAgentDescription = (agentType)=>{
    const descriptions = {
        'new-project': 'Handles initial project setup and configuration',
        'ui': 'Handles UI design and user interface creation',
        'html-structure': 'Creates HTML structure and page layouts',
        'composer': 'Composes and assembles content and components',
        'tester-validator-reviewer': 'Tests, validates, and reviews generated content and code',
        'seo': 'Handles SEO optimization and analysis',
        'content': 'Generates and manages content',
        'researcher': 'Conducts research and gathers information',
        'unicalizator': 'Ensures content uniqueness and originality',
        'decomposer': 'Breaks down complex tasks into smaller components',
        'orchestrator': 'Supervises and controls the entire workflow',
        'summarizer': 'Analyzes and summarizes project status',
        'file-report': 'Generates file structure reports for agents'
    };
    return descriptions[agentType] || 'Agent description not found';
};
const getAllAgentTypes = ()=>{
    return [
        'new-project',
        'ui',
        'html-structure',
        'composer',
        'tester-validator-reviewer',
        'seo',
        'content',
        'researcher',
        'unicalizator',
        'decomposer',
        'orchestrator',
        'summarizer',
        'file-report'
    ];
};
}),
"[project]/src/lib/agent-executor.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "AGENT_CONFIGS": ()=>AGENT_CONFIGS,
    "executeAgent": ()=>executeAgent,
    "getAvailableModels": ()=>getAvailableModels,
    "getRecommendedModel": ()=>getRecommendedModel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/claude-api.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/system-prompts.ts [app-route] (ecmascript)");
;
;
const AGENT_CONFIGS = {
    'new-project': {
        name: 'New Project Agent',
        description: 'Handles initial project setup and file structure generation',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3_5,
        maxTokens: 4096,
        temperature: 0.3
    },
    'ui': {
        name: 'UI Agent',
        description: 'Handles UI design and user interface creation',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3,
        maxTokens: 3000,
        temperature: 0.5
    },
    'html-structure': {
        name: 'HTML Structure Agent',
        description: 'Creates HTML structure and page layouts',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3_5,
        maxTokens: 4096,
        temperature: 0.2
    },
    'composer': {
        name: 'Composer Agent',
        description: 'Composes and assembles content and components',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeModel"].OPUS_3,
        maxTokens: 4096,
        temperature: 0.4
    },
    'tester-validator-reviewer': {
        name: 'Tester/Validator/Reviewer Agent',
        description: 'Tests, validates, and reviews generated content and code',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3_5,
        maxTokens: 4096,
        temperature: 0.1
    },
    'seo': {
        name: 'SEO Agent',
        description: 'Handles SEO optimization and analysis',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3_5,
        maxTokens: 3000,
        temperature: 0.3
    },
    'content': {
        name: 'Content Agent',
        description: 'Generates and manages content',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3,
        maxTokens: 4096,
        temperature: 0.6
    },
    'researcher': {
        name: 'Researcher Agent',
        description: 'Conducts research and gathers information',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeModel"].HAIKU_3_5,
        maxTokens: 3000,
        temperature: 0.4
    },
    'unicalizator': {
        name: 'Unicalizator Agent',
        description: 'Ensures content uniqueness and originality',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeModel"].HAIKU_3_5,
        maxTokens: 2000,
        temperature: 0.2
    },
    'decomposer': {
        name: 'Decomposer Agent',
        description: 'Breaks down complex tasks into smaller components',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeModel"].HAIKU_3_5,
        maxTokens: 2000,
        temperature: 0.3
    },
    'orchestrator': {
        name: 'Orchestrator Agent',
        description: 'Supervises and controls the entire workflow',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3_5,
        maxTokens: 4096,
        temperature: 0.2
    },
    'summarizer': {
        name: 'Summarizer Agent',
        description: 'Analyzes and summarizes project status',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3,
        maxTokens: 2000,
        temperature: 0.4
    },
    'file-report': {
        name: 'File Report Agent',
        description: 'Generates file structure reports for agents',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeModel"].HAIKU_3_5,
        maxTokens: 3000,
        temperature: 0.1
    }
};
async function executeAgent(options) {
    const startTime = Date.now();
    let filledPrompt = '';
    try {
        const { agentType, userInput, customPrompt, modelOverride, maxTokensOverride, temperatureOverride } = options;
        // Validate agent type
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllAgentTypes"])().includes(agentType)) {
            throw new Error(`Invalid agent type: ${agentType}`);
        }
        // Get agent configuration
        const agentConfig = AGENT_CONFIGS[agentType];
        if (!agentConfig) {
            throw new Error(`No configuration found for agent: ${agentType}`);
        }
        // Get the system prompt
        const systemPrompt = customPrompt || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAgentPrompt"])(agentType);
        if (!systemPrompt || systemPrompt === 'Agent prompt not found') {
            throw new Error(`No system prompt found for agent: ${agentType}`);
        }
        // Fill the prompt with user input
        filledPrompt = fillPromptWithUserInput(systemPrompt, userInput);
        // Prepare Claude API options
        const claudeOptions = {
            model: modelOverride || agentConfig.model,
            maxTokens: maxTokensOverride || agentConfig.maxTokens,
            temperature: temperatureOverride || agentConfig.temperature
        };
        // Execute the agent
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["callClaudeAPI"])(filledPrompt, claudeOptions);
        const executionTime = Date.now() - startTime;
        return {
            success: true,
            response,
            filledPrompt,
            metadata: {
                agentType,
                model: claudeOptions.model || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3_5,
                maxTokens: claudeOptions.maxTokens || 4096,
                temperature: claudeOptions.temperature,
                executionTime,
                timestamp: new Date().toISOString()
            }
        };
    } catch (error) {
        const executionTime = Date.now() - startTime;
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred',
            filledPrompt,
            metadata: {
                agentType: options.agentType,
                model: options.modelOverride || AGENT_CONFIGS[options.agentType]?.model || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3_5,
                maxTokens: options.maxTokensOverride || AGENT_CONFIGS[options.agentType]?.maxTokens || 4096,
                temperature: options.temperatureOverride || AGENT_CONFIGS[options.agentType]?.temperature,
                executionTime,
                timestamp: new Date().toISOString()
            }
        };
    }
}
// Helper function to fill prompts with user input
function fillPromptWithUserInput(prompt, userInput) {
    let filledPrompt = prompt;
    // Replace common patterns
    const replacements = {
        '{project_name}': userInput.brand_name || userInput.project_name || 'Unknown Project',
        '{brand_name}': userInput.brand_name || 'Unknown Brand',
        '{target_country}': userInput.target_country || 'Unknown Country',
        '{target_language}': userInput.target_language || 'Unknown Language',
        '{site_type}': userInput.site_type || 'Unknown Site Type',
        '{industry}': userInput.industry || 'Casino/Gaming'
    };
    // Handle structure data if present
    if (userInput.structure) {
        const { selectedPages, pageSections, totalPages } = userInput.structure;
        const structureInfo = `
Site Type: ${userInput.site_type || 'Unknown'}
Total Pages: ${totalPages || 0}
Selected Pages: ${selectedPages?.join(', ') || 'None'}
Page Sections:
${selectedPages?.map((page)=>{
            const sections = pageSections?.[page] || [];
            return `- ${page}: ${sections.join(', ')}`;
        }).join('\n') || 'No sections defined'}
Target Country: ${userInput.target_country || 'Unknown'}
Target Language: ${userInput.target_language || 'Unknown'}
Industry: ${userInput.industry || 'Casino/Gaming'}`;
        replacements['{structure}'] = structureInfo;
    }
    // Apply all replacements
    Object.entries(replacements).forEach(([key, value])=>{
        filledPrompt = filledPrompt.replace(new RegExp(key.replace(/[{}]/g, '\\$&'), 'g'), value);
    });
    return filledPrompt;
}
function getRecommendedModel(agentType) {
    const agentConfig = AGENT_CONFIGS[agentType];
    return agentConfig?.model || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3_5;
}
function getAvailableModels() {
    return Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MODEL_CONFIGS"]).map(([model, config])=>({
            model: model,
            config
        }));
}
}),
"[project]/src/app/api/claude/agent/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GET": ()=>GET,
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$executor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agent-executor.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/system-prompts.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { agentType, userInput, customPrompt, modelOverride, maxTokensOverride, temperatureOverride } = body;
        // Validate required fields
        if (!agentType) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'agentType is required'
            }, {
                status: 400
            });
        }
        if (!userInput) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'userInput is required'
            }, {
                status: 400
            });
        }
        // Validate agent type
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllAgentTypes"])().includes(agentType)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Invalid agent type: ${agentType}. Valid types: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllAgentTypes"])().join(', ')}`
            }, {
                status: 400
            });
        }
        // Special validation for new-project agent
        if (agentType === 'new-project') {
            if (!userInput.brand_name || !userInput.target_country || !userInput.target_language || !userInput.site_type) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: 'Missing required fields for new-project: brand_name, target_country, target_language, site_type'
                }, {
                    status: 400
                });
            }
        }
        // Execute the agent
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$executor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAgent"])({
            agentType,
            userInput,
            customPrompt,
            modelOverride,
            maxTokensOverride,
            temperatureOverride
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result);
    } catch (error) {
        console.error('Error in agent execution:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        }, {
            status: 500
        });
    }
}
async function GET() {
    try {
        const agentTypes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllAgentTypes"])();
        const agentConfigs = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$executor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AGENT_CONFIGS"];
        const availableModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$executor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAvailableModels"])();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: {
                agentTypes,
                agentConfigs,
                availableModels
            },
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error getting agent information:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error occurred'
        }, {
            status: 500
        });
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__1e09d06d._.js.map