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

__turbopack_context__.s({
    "callClaudeAPI": ()=>callClaudeAPI,
    "testClaudeConnection": ()=>testClaudeConnection
});
async function callClaudeAPI(prompt) {
    const apiKey = process.env.CLAUDE_API_KEY;
    if (!apiKey) {
        throw new Error('CLAUDE_API_KEY environment variable is not set');
    }
    const requestBody = {
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1000,
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
"[project]/src/services/new_project_agent.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getNewProjectAgentPrompt": ()=>getNewProjectAgentPrompt,
    "runNewProjectAgent": ()=>runNewProjectAgent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/claude-api.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/system-prompts.ts [app-route] (ecmascript)");
;
;
function fillPrompt(template, userInput) {
    // Format structure information if available
    let structureInfo = 'No structure defined yet';
    if (userInput.structure) {
        const { selectedPages, pageSections, totalPages } = userInput.structure;
        structureInfo = `
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
    }
    return template.replace('{project_name}', userInput.brand_name).replace('{structure}', structureInfo).replace('{site_type}', userInput.site_type);
}
async function runNewProjectAgent(userInput) {
    const prompt = fillPrompt(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NEW_PROJECT_AGENT_PROMPT"], userInput);
    const reply = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["callClaudeAPI"])(prompt);
    return reply;
}
function getNewProjectAgentPrompt(userInput) {
    return fillPrompt(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$prompts$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NEW_PROJECT_AGENT_PROMPT"], userInput);
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
        const { userInput } = body;
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
        // Run the new project agent
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$new_project_agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runNewProjectAgent"])(userInput);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            response: response,
            prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$new_project_agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNewProjectAgentPrompt"])(userInput),
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
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$new_project_agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runNewProjectAgent"])(sampleUserInput);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            response: response,
            prompt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$new_project_agent$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNewProjectAgentPrompt"])(sampleUserInput),
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

//# sourceMappingURL=%5Broot-of-the-server%5D__f474e707._.js.map