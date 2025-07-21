module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/lib/claude-api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "callClaudeAPI": ()=>callClaudeAPI,
    "testClaudeConnection": ()=>testClaudeConnection
});
async function callClaudeAPI(prompt) {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
        throw new Error('ANTHROPIC_API_KEY environment variable is not set');
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
"[project]/src/services/system-prompts.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/services/new_project_agent.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getNewProjectAgentPrompt": ()=>getNewProjectAgentPrompt,
    "runNewProjectAgent": ()=>runNewProjectAgent
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/claude-api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$prompts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/system-prompts.ts [app-ssr] (ecmascript)");
;
;
function fillPrompt(template, userInput) {
    return template.replace('{project_name}', userInput.brand_name).replace('{user_requirements}', `Country: ${userInput.target_country}, Language: ${userInput.target_language}`).replace('{site_type}', userInput.site_type).replace('{industry}', 'Casino');
}
async function runNewProjectAgent(userInput) {
    const prompt = fillPrompt(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$prompts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NEW_PROJECT_AGENT_PROMPT"], userInput);
    const reply = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callClaudeAPI"])(prompt);
    return reply;
}
function getNewProjectAgentPrompt(userInput) {
    return fillPrompt(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$prompts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NEW_PROJECT_AGENT_PROMPT"], userInput);
}
}),
"[project]/src/app/api/claude/new-project-test/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>NewProjectAgentTestPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$new_project_agent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/new_project_agent.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const initialInput = {
    brand_name: 'SuperCasino',
    target_country: 'United States',
    target_language: 'English',
    site_type: 'multi-page'
};
function NewProjectAgentTestPage() {
    const [userInput, setUserInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialInput);
    const [prompt, setPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [reply, setReply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setUserInput((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleRunAgent = async ()=>{
        setLoading(true);
        setError('');
        setReply('');
        const filledPrompt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$new_project_agent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNewProjectAgentPrompt"])(userInput);
        setPrompt(filledPrompt);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$new_project_agent$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["runNewProjectAgent"])(userInput);
            setReply(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-12 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold mb-8",
                    children: "New Project Agent Test"
                }, void 0, false, {
                    fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow-md p-6 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold mb-4",
                            children: "User Input"
                        }, void 0, false, {
                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Brand Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "brand_name",
                                            value: userInput.brand_name,
                                            onChange: handleChange,
                                            className: "w-full border px-3 py-2 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Target Country"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "target_country",
                                            value: userInput.target_country,
                                            onChange: handleChange,
                                            className: "w-full border px-3 py-2 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Target Language"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "target_language",
                                            value: userInput.target_language,
                                            onChange: handleChange,
                                            className: "w-full border px-3 py-2 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium mb-1",
                                            children: "Site Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "site_type",
                                            value: userInput.site_type,
                                            onChange: handleChange,
                                            className: "w-full border px-3 py-2 rounded",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "single-page",
                                                    children: "Single Page"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "multi-page",
                                                    children: "Multi Page"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleRunAgent,
                            disabled: loading,
                            className: "bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed",
                            children: loading ? 'Running...' : 'Run New Project Agent'
                        }, void 0, false, {
                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                prompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-100 rounded-lg p-4 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-semibold mb-2",
                            children: "Filled Prompt"
                        }, void 0, false, {
                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                            lineNumber: 102,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "whitespace-pre-wrap text-sm text-gray-800",
                            children: prompt
                        }, void 0, false, {
                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                            lineNumber: 103,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-50 border border-red-200 rounded-lg p-4 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-red-800 font-semibold mb-2",
                            children: "Error"
                        }, void 0, false, {
                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                            lineNumber: 109,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-red-700",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                    lineNumber: 108,
                    columnNumber: 11
                }, this),
                reply && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-green-50 border border-green-200 rounded-lg p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-green-800 font-semibold mb-2",
                            children: "Claude Reply"
                        }, void 0, false, {
                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                            className: "whitespace-pre-wrap text-sm text-gray-800",
                            children: reply
                        }, void 0, false, {
                            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
                    lineNumber: 115,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/api/claude/new-project-test/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b22523d8._.js.map