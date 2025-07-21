module.exports = {

"[project]/.next-internal/server/app/api/claude/new-project/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

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
    try {
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
            throw new Error(`Claude API error: ${response.status} - ${errorText}`);
        }
        const data = await response.json();
        // Extract the text content from the response
        const textContent = data.content.find((content)=>content.type === 'text');
        if (!textContent) {
            throw new Error('No text content found in Claude API response');
        }
        return textContent.text;
    } catch (error) {
        console.error('Error calling Claude API:', error);
        throw error;
    }
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
    "HTML_STRUCTURE_AGENT_PROMPT": ()=>HTML_STRUCTURE_AGENT_PROMPT,
    "NEW_PROJECT_AGENT_PROMPT": ()=>NEW_PROJECT_AGENT_PROMPT,
    "RESEARCHER_AGENT_PROMPT": ()=>RESEARCHER_AGENT_PROMPT,
    "SEO_AGENT_PROMPT": ()=>SEO_AGENT_PROMPT,
    "TESTER_VALIDATOR_REVIEWER_PROMPT": ()=>TESTER_VALIDATOR_REVIEWER_PROMPT,
    "UI_AGENT_PROMPT": ()=>UI_AGENT_PROMPT,
    "UNICALIZATOR_AGENT_PROMPT": ()=>UNICALIZATOR_AGENT_PROMPT,
    "getAgentDescription": ()=>getAgentDescription,
    "getAgentPrompt": ()=>getAgentPrompt,
    "getAllAgentTypes": ()=>getAllAgentTypes
});
const NEW_PROJECT_AGENT_PROMPT = `
You are an expert web application architect.
Based on the following project information, design the ideal file and folder structure for a modern web project.

Project name: {project_name}
User requirement for structure: {structure}
Site type: {site_type}

Instructions:
Use best practices for file/folder naming (e.g., React/Next.js conventions).
Include top-level folders (e.g., pages, components, assets, public), and all necessary files.
The root folder for the project should be named simillar to project name but in kebab-case (parent folder).
All files and folders must be inside this parent folder.
For each file/folder, provide:
path (e.g., pages/index.tsx)
type (e.g., page, component, asset, etc.)
description (optional, 1-sentence purpose)
If a folder, list key child files.
Output should be valid JSON—an array of objects, one for each file/folder.
Do not generate any code or content, only the file/folder structure.
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
// Researcher Agent System Prompt
// This agent conducts research and gathers information
// TODO: Add specific prompt content
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
        'decomposer': DECOMPOSER_AGENT_PROMPT
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
        'decomposer': 'Breaks down complex tasks into smaller components'
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
        'decomposer'
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
    }
};
async function executeAgent(options) {
    const startTime = Date.now();
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
        const filledPrompt = fillPromptWithUserInput(systemPrompt, userInput);
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
"[project]/src/services/new_project_agent.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getNewProjectAgentPrompt": ()=>getNewProjectAgentPrompt,
    "runNewProjectAgent": ()=>runNewProjectAgent,
    "runNewProjectAgentSimple": ()=>runNewProjectAgentSimple
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$executor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agent-executor.ts [app-route] (ecmascript)");
;
async function runNewProjectAgent(userInput, modelOverride) {
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$executor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["executeAgent"])({
        agentType: 'new-project',
        userInput,
        modelOverride
    });
}
async function runNewProjectAgentSimple(userInput, modelOverride) {
    const result = await runNewProjectAgent(userInput, modelOverride);
    if (!result.success) {
        throw new Error(result.error || 'Agent execution failed');
    }
    return result.response || '';
}
async function getNewProjectAgentPrompt(userInput) {
    // This is a simplified version for debugging - in production you'd use the agent executor
    const { getAgentPrompt } = await __turbopack_context__.r("[project]/src/services/system-prompts.ts [app-route] (ecmascript, async loader)")(__turbopack_context__.i);
    const prompt = getAgentPrompt('new-project');
    // Basic prompt filling for debugging
    let filledPrompt = prompt;
    // Handle structure data if present
    if (userInput.structure) {
        const { selectedPages, pageSections, totalPages } = userInput.structure;
        const structureInfo = `
Site Type: ${userInput.site_type}
Total Pages: ${totalPages}
Selected Pages: ${selectedPages.join(', ')}
Page Sections:
${selectedPages.map((page)=>{
            const sections = pageSections[page] || [];
            return `- ${page}: ${sections.join(', ')}`;
        }).join('\n')}
Target Country: ${userInput.target_country}
Target Language: ${userInput.target_language}
Industry: Casino/Gaming`;
        filledPrompt = filledPrompt.replace('{structure}', structureInfo);
    }
    filledPrompt = filledPrompt.replace('{project_name}', userInput.brand_name).replace('{site_type}', userInput.site_type);
    return filledPrompt;
}
}),
"[project]/src/app/api/claude/new-project/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "GET": ()=>GET,
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$new_project_agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/new_project_agent.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const body = await request.json();
        const { userInput, modelOverride } = body;
        if (!userInput) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'userInput is required'
            }, {
                status: 400
            });
        }
        // Validate required fields
        if (!userInput.brand_name || !userInput.target_country || !userInput.target_language || !userInput.site_type) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Missing required fields: brand_name, target_country, target_language, site_type'
            }, {
                status: 400
            });
        }
        // Run the new project agent with the new system
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$new_project_agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runNewProjectAgent"])(userInput, modelOverride);
        // Get the filled prompt for debugging
        const filledPrompt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$new_project_agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNewProjectAgentPrompt"])(userInput);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ...result,
            filledPrompt,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error in new-project agent:', error);
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
        const sampleUserInput = {
            brand_name: 'SuperCasino',
            target_country: 'United States',
            target_language: 'English',
            site_type: 'multi-page',
            structure: {
                selectedPages: [
                    'Home',
                    'Reviews',
                    'Bonuses',
                    'FAQ'
                ],
                pageSections: {
                    'Home': [
                        'Hero Banner',
                        'Why Choose Us',
                        'Featured Games',
                        'Footer'
                    ],
                    'Reviews': [
                        'Review Headline',
                        'Rating Summary Box',
                        'Detailed Reviews'
                    ],
                    'Bonuses': [
                        'Bonuses Headline',
                        'Top Bonus Offers Table',
                        'Bonus Terms'
                    ],
                    'FAQ': [
                        'FAQ Headline',
                        'Categorized Q&A Blocks'
                    ]
                },
                totalPages: 4,
                structureCompletedAt: new Date().toISOString()
            }
        };
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$new_project_agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runNewProjectAgent"])(sampleUserInput);
        const filledPrompt = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$new_project_agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNewProjectAgentPrompt"])(sampleUserInput);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ...result,
            filledPrompt,
            sampleInput: sampleUserInput,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error('Error in new-project agent test:', error);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__07fe4cc6._.js.map