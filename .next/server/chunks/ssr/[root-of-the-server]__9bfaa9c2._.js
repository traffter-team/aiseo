module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/net [external] (net, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}}),
"[externals]/tls [external] (tls, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/buffer [external] (buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[project]/src/lib/db/supabase.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "supabase": ()=>supabase,
    "typedSupabase": ()=>typedSupabase
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://elhqvvjetvlwdhfswrzd.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsaHF2dmpldHZsd2RoZnN3cnpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MzU1OTgsImV4cCI6MjA2ODQxMTU5OH0._BodrQWWui6azTTaDuPQfF0jOUPI5-6u_6S9FpuHbSM");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
const typedSupabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/src/lib/db/queries.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "createAgentTask": ()=>createAgentTask,
    "createAsset": ()=>createAsset,
    "createCasinoSubmission": ()=>createCasinoSubmission,
    "createEdit": ()=>createEdit,
    "createErrorLog": ()=>createErrorLog,
    "createLibraryItem": ()=>createLibraryItem,
    "createOrchestratorLog": ()=>createOrchestratorLog,
    "createProject": ()=>createProject,
    "createProjectFile": ()=>createProjectFile,
    "createProjectVersion": ()=>createProjectVersion,
    "createSeoReport": ()=>createSeoReport,
    "getAgentTasks": ()=>getAgentTasks,
    "getProjectById": ()=>getProjectById,
    "getProjectFiles": ()=>getProjectFiles,
    "getProjects": ()=>getProjects,
    "updateProject": ()=>updateProject
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/supabase.ts [app-ssr] (ecmascript)");
;
async function createProject(data) {
    try {
        const { data: project, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('projects').insert([
            data
        ]).select().single();
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
async function getProjects() {
    try {
        const { data: projects, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('projects').select('*').order('created_at', {
            ascending: false
        });
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
async function getProjectById(id) {
    try {
        const { data: project, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('projects').select('*').eq('id', id).single();
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
async function updateProject(id, data) {
    try {
        const { data: project, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('projects').update(data).eq('id', id).select().single();
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
async function createProjectFile(data) {
    try {
        const { data: file, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('project_files').insert([
            data
        ]).select().single();
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
async function getProjectFiles(projectId) {
    try {
        const { data: files, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('project_files').select('*').eq('project_id', projectId).order('created_at', {
            ascending: false
        });
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
async function createAgentTask(data) {
    try {
        const { data: task, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('agent_tasks').insert([
            data
        ]).select().single();
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
async function getAgentTasks(projectId) {
    try {
        const { data: tasks, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('agent_tasks').select('*').eq('project_id', projectId).order('created_at', {
            ascending: false
        });
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
async function createProjectVersion(data) {
    try {
        const { data: version, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('project_versions').insert([
            data
        ]).select().single();
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
async function createErrorLog(data) {
    try {
        const { data: errorLog, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('error_log').insert([
            data
        ]).select().single();
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
async function createLibraryItem(data) {
    try {
        const { data: item, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('library').insert([
            data
        ]).select().single();
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
async function createEdit(data) {
    try {
        const { data: edit, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('edits').insert([
            data
        ]).select().single();
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
async function createAsset(data) {
    try {
        const { data: asset, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('assets').insert([
            data
        ]).select().single();
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
async function createSeoReport(data) {
    try {
        const { data: report, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('seo_reports').insert([
            data
        ]).select().single();
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
async function createOrchestratorLog(data) {
    try {
        const { data: log, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from('orchestrator_logs').insert([
            data
        ]).select().single();
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
async function createCasinoSubmission(data) {
    console.warn('createCasinoSubmission is deprecated. Use createProject instead.');
    return createProject({
        status: 'created',
        state: 'initial',
        user_input: data,
        meta: null,
        output_refs: null
    });
}
}),
"[project]/src/lib/page-library.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getAllPageTemplates": ()=>getAllPageTemplates,
    "getAvailablePages": ()=>getAvailablePages,
    "getPageTemplate": ()=>getPageTemplate,
    "pageLibrary": ()=>pageLibrary
});
const pageLibrary = {
    Home: {
        name: "Home Page",
        suggestedSections: [
            {
                name: "Hero Banner",
                purpose: "Primary H1 + Unique Selling Proposition + Call to Action. Example: 'Welcome to [CasinoName] - Get Your [BonusDetails] Now!'",
                seoNote: "Very important—targets main brand keyword, drives click-throughs."
            },
            {
                name: "Top Casinos Showcase",
                purpose: "Visually appealing section to showcase 3–5 featured partner casinos or top game categories."
            },
            {
                name: "Why Choose Us",
                purpose: "Bullet points highlighting key benefits and trust factors (e.g., 'Licensed & Secure', 'Fast Payouts', '24/7 Support')."
            },
            {
                name: "Latest Reviews Feed",
                purpose: "Dynamic section displaying snippets or links to the latest casino/game reviews."
            },
            {
                name: "Trending Games",
                purpose: "Showcase popular or new games with links to their individual guides or play pages."
            },
            {
                name: "User Testimonials",
                purpose: "Section for social proof, featuring positive quotes or feedback from users."
            },
            {
                name: "FAQ Preview",
                purpose: "A small section with 2-3 common questions and answers, linking to the full FAQ page."
            },
            {
                name: "Blog Teasers",
                purpose: "Snippets of the latest blog articles to encourage further reading."
            },
            {
                name: "Footer",
                purpose: "Standard footer with navigation links, legal information, responsible gaming links, and copyright."
            }
        ]
    },
    Reviews: {
        name: "Casino Review Page",
        suggestedSections: [
            {
                name: "Review Headline",
                purpose: "H1: '[Casino Name] Review [Current Year] - Expert Analysis & Player Ratings'.",
                seoNote: "Very important—targets exact-match review keyword."
            },
            {
                name: "Rating Summary Box",
                purpose: "Overall star rating, brief pros/cons list, and a primary CTA to visit the casino."
            },
            {
                name: "Full In-depth Review",
                purpose: "Comprehensive analysis covering bonuses, game selection, user experience, mobile compatibility, customer support, and security. Use H2/H3 for sub-sections."
            },
            {
                name: "Exclusive Bonus Offers",
                purpose: "Highlight any special or exclusive bonuses available for the reviewed casino, with clear CTAs."
            },
            {
                name: "Game Library Overview",
                purpose: "Summary of game types and notable software providers available at the casino."
            },
            {
                name: "Banking Options Table",
                purpose: "Table detailing deposit and withdrawal methods, processing times, and limits."
            },
            {
                name: "Player Feedback & Comments",
                purpose: "Section to display or collect user-generated reviews and comments."
            },
            {
                name: "Casino-Specific FAQs",
                purpose: "Frequently asked questions specifically about the reviewed casino."
            },
            {
                name: "Related Casino Reviews",
                purpose: "Links to reviews of similar or alternative casinos."
            }
        ]
    },
    Guide: {
        name: "Game/Strategy Guide Page",
        suggestedSections: [
            {
                name: "Guide Headline",
                purpose: "H1: '[Game Name] - How to Play & Win' or '[Strategy Topic] Explained'."
            },
            {
                name: "Overview / Introduction",
                purpose: "Brief introduction to the game or strategy, including key features (e.g., RTP, volatility for games)."
            },
            {
                name: "How to Play / Step-by-Step",
                purpose: "Detailed, step-by-step instructions for playing the game or implementing the strategy."
            },
            {
                name: "Bonus Features / Key Elements",
                purpose: "Explanation of special rounds, bonus features (for games), or critical components of the strategy."
            },
            {
                name: "Payouts & Volatility / Success Metrics",
                purpose: "Data tables for game payouts or metrics for strategy effectiveness."
            },
            {
                name: "Pros & Cons",
                purpose: "Quick bullet list summarizing advantages and disadvantages."
            },
            {
                name: "Video Demonstration",
                purpose: "Embedded video showing gameplay or strategy in action."
            },
            {
                name: "Similar Games / Related Guides",
                purpose: "Links to other relevant internal content."
            },
            {
                name: "User Comments / Discussion",
                purpose: "Section for user feedback and discussion."
            }
        ]
    },
    Bonuses: {
        name: "Bonuses Page",
        suggestedSections: [
            {
                name: "Bonuses Headline",
                purpose: "H1: 'Best Online Casino Bonuses [Current Year] - Updated List'."
            },
            {
                name: "Explanation of Bonus Types",
                purpose: "Detailed explanations of different bonus types (e.g., Welcome, No-Deposit, Free Spins, Reload, Cashback)."
            },
            {
                name: "Top Bonus Offers Table",
                purpose: "A ranked or categorized table showcasing the best current bonus offers with key details and CTAs."
            },
            {
                name: "How to Claim a Bonus Guide",
                purpose: "Step-by-step instructions on how to claim bonuses."
            },
            {
                name: "Understanding Bonus Terms",
                purpose: "Explanation of common bonus terms and conditions like wagering requirements, game restrictions, and validity periods."
            },
            {
                name: "Regional Bonus Information",
                purpose: "Sections or filters for bonuses available in specific countries or regions, if applicable."
            }
        ]
    },
    Blog: {
        name: "Blog Post",
        suggestedSections: [
            {
                name: "Blog Post Headline",
                purpose: "H1: Engaging title targeting a specific long-tail keyword or topic."
            },
            {
                name: "Introduction",
                purpose: "Compelling introduction (100–150 words) that sets the context and user intent."
            },
            {
                name: "Main Content Subtopics",
                purpose: "Well-structured content using H2/H3 headings for subtopics, incorporating LSI keywords."
            },
            {
                name: "Internal and External Links",
                purpose: "Strategically placed links to relevant internal pages and 1-2 authoritative external resources."
            },
            {
                name: "FAQ Section for Article",
                purpose: "3–5 relevant Q&As related to the blog post topic, optimized for featured snippets."
            },
            {
                name: "Author Box",
                purpose: "Information about the author to build E-A-T (Expertise, Authoritativeness, Trustworthiness)."
            },
            {
                name: "Call to Action",
                purpose: "Encourage users to subscribe to a newsletter, read related articles, or explore casino offers."
            }
        ]
    },
    FAQ: {
        name: "FAQ Page",
        suggestedSections: [
            {
                name: "FAQ Headline",
                purpose: "H1: '[Site Name] - Frequently Asked Questions' or 'FAQ for [Specific Topic]'."
            },
            {
                name: "Categorized Q&A Blocks",
                purpose: "Questions and answers organized into categories (e.g., Account, Bonuses, Payments). Use accordion or <details> for better UX."
            },
            {
                name: "Search Functionality",
                purpose: "Allow users to search FAQs."
            },
            {
                name: "Related Links",
                purpose: "Links from answers to more detailed guides or relevant pages on the site."
            }
        ]
    },
    About: {
        name: "About Us Page",
        suggestedSections: [
            {
                name: "Our Story / Mission",
                purpose: "Narrative about the brand's mission, history, and values."
            },
            {
                name: "Meet the Team",
                purpose: "Introduce key team members with photos and brief bios to build trust and E-A-T."
            },
            {
                name: "Our Commitment",
                purpose: "Statements on fair play, security, responsible gaming, etc."
            },
            {
                name: "Contact Information Snippet",
                purpose: "Brief contact info with a link to the full Contact Us page."
            }
        ]
    },
    Contact: {
        name: "Contact Us Page",
        suggestedSections: [
            {
                name: "Contact Headline",
                purpose: "H1: 'Contact Us - Get in Touch with [Site Name]'."
            },
            {
                name: "Contact Form",
                purpose: "Form for user inquiries, categorized if possible (e.g., General, Support, Partnership)."
            },
            {
                name: "Direct Contact Methods",
                purpose: "Email addresses, phone numbers (if applicable), and physical address (for local SEO schema)."
            },
            {
                name: "Map Integration",
                purpose: "Embedded map if there's a physical office location."
            },
            {
                name: "Social Media Links",
                purpose: "Links to official social media profiles."
            }
        ]
    },
    Legal: {
        name: "Legal Pages (Terms, Privacy, etc.)",
        suggestedSections: [
            {
                name: "Page Title (e.g., Terms and Conditions)",
                purpose: "Clear H1 for the specific legal document."
            },
            {
                name: "Main Legal Text",
                purpose: "The full text of the terms, privacy policy, cookie policy, or responsible gambling policy. Properly structured with headings."
            },
            {
                name: "Last Updated Date",
                purpose: "Clearly state when the document was last revised."
            },
            {
                name: "Navigation to Other Legal Docs",
                purpose: "Easy links to other related legal pages."
            }
        ]
    },
    Slots: {
        name: "Slots/Games Hub Page",
        suggestedSections: [
            {
                name: "Games Hub Headline",
                purpose: "H1: 'Play Online Slots & Casino Games at [CasinoName]' or 'Explore Thousands of Casino Games'.",
                seoNote: "Important—targets broad game-category keywords."
            },
            {
                name: "Game Category Navigation",
                purpose: "Clear links or tabs for different game categories (e.g., Slots, Table Games, Live Dealer, Jackpots)."
            },
            {
                name: "Featured Slots/Games",
                purpose: "Showcase a selection of top, new, or popular games with appealing visuals and play links."
            },
            {
                name: "Filter & Sort Options",
                purpose: "Allow users to filter games by provider, type, features, RTP, volatility, etc."
            },
            {
                name: "Top RTP Games List",
                purpose: "Section highlighting games with high Return to Player percentages."
            },
            {
                name: "New Releases Section",
                purpose: "Display the newest game titles added to the platform."
            },
            {
                name: "Popular Game Providers Links",
                purpose: "Links to pages or sections dedicated to specific game software providers."
            },
            {
                name: "How to Choose a Game Guide Snippet",
                purpose: "Brief advice for players on selecting games that suit their preferences, linking to a full guide."
            }
        ]
    },
    Providers: {
        name: "Game Providers Page",
        suggestedSections: [
            {
                name: "Providers Headline",
                purpose: "H1: 'Top Casino Game Providers' or 'Discover Games by Leading Software Developers'.",
                seoNote: "Targets industry authority & brand names of providers."
            },
            {
                name: "Provider Listing",
                purpose: "Alphabetical or categorized list of game providers with their logos and a brief introduction."
            },
            {
                name: "Individual Provider Profile Teasers",
                purpose: "Short summaries for each provider, linking to dedicated review pages or filtered game lists for that provider."
            },
            {
                name: "Provider Comparison Table",
                purpose: "Table comparing key features, game types, or popular titles from different providers."
            },
            {
                name: "Search/Filter for Providers",
                purpose: "Allow users to search for specific providers or filter by game genres they specialize in, region, technology, etc."
            }
        ]
    },
    "Payment Methods": {
        name: "Payment Methods Page",
        suggestedSections: [
            {
                name: "Payments Headline",
                purpose: "H1: 'Casino Payment & Banking Options' or 'Secure Deposits & Withdrawals'.",
                seoNote: "Critical—keywords for transaction-related queries."
            },
            {
                name: "Deposit Methods Overview",
                purpose: "List of available deposit methods (e.g., Credit/Debit Cards, E-wallets, Bank Transfers, Cryptocurrency) with logos and brief descriptions."
            },
            {
                name: "Withdrawal Methods Overview",
                purpose: "List of available withdrawal methods, highlighting processing times and any differences from deposit methods."
            },
            {
                name: "Detailed Information Table",
                purpose: "Table showing methods, typical processing times for deposits/withdrawals, min/max limits, and any potential fees."
            },
            {
                name: "How to Deposit/Withdraw Guides",
                purpose: "Step-by-step instructions for making deposits and requesting withdrawals."
            },
            {
                name: "Security of Transactions",
                purpose: "Information on security measures used to protect financial transactions (SSL, encryption, etc.)."
            }
        ]
    },
    "Tournaments & Events": {
        name: "Tournaments & Events Page",
        suggestedSections: [
            {
                name: "Tournaments Headline",
                purpose: "H1: 'Join Exciting Casino Tournaments & Events'."
            },
            {
                name: "Upcoming Events Calendar/List",
                purpose: "Display a schedule of current and upcoming tournaments or special events, including dates, game types, and prize pools."
            },
            {
                name: "How to Participate Guide",
                purpose: "Clear instructions on how to enter tournaments, including entry fees, qualification criteria, and rules."
            },
            {
                name: "Featured Tournaments",
                purpose: "Highlight major or ongoing tournaments with more details."
            },
            {
                name: "Past Winners & Leaderboards",
                purpose: "Showcase previous tournament winners or current leaderboards to create excitement and social proof."
            },
            {
                name: "Event-Specific FAQs",
                purpose: "Address common questions related to participating in tournaments and events."
            }
        ]
    },
    "Mobile Apps": {
        name: "Mobile Apps Page",
        suggestedSections: [
            {
                name: "Mobile Apps Headline",
                purpose: "H1: 'Download Our Casino Mobile App - Play on iOS & Android'.",
                seoNote: "Useful for 'casino app' searches."
            },
            {
                name: "App Store Download Links",
                purpose: "Prominent buttons or badges linking directly to the app on the Apple App Store and Google Play Store."
            },
            {
                name: "Mobile App Features & Screenshots",
                purpose: "Showcase key features of the mobile app with appealing screenshots or mockups."
            },
            {
                name: "Device Compatibility Information",
                purpose: "Specify supported operating systems and device requirements."
            },
            {
                name: "Installation Guide",
                purpose: "Simple step-by-step instructions on how to download and install the app."
            },
            {
                name: "Mobile-Exclusive Bonuses",
                purpose: "Highlight any bonuses or promotions specifically for mobile app users."
            },
            {
                name: "Comparison with Mobile Website",
                purpose: "Briefly explain the benefits of using the app versus the mobile-responsive website, if applicable."
            }
        ]
    },
    "VIP / Loyalty Program": {
        name: "VIP / Loyalty Program Page",
        suggestedSections: [
            {
                name: "VIP Program Headline",
                purpose: "H1: 'Exclusive VIP & Loyalty Rewards Program'."
            },
            {
                name: "Program Overview & Benefits",
                purpose: "Introduce the VIP/Loyalty program and its main advantages for players."
            },
            {
                name: "Tier Structure Explained",
                purpose: "Detail the different VIP levels or loyalty tiers, including how to achieve them and the specific benefits of each tier (e.g., points system, cashback, exclusive bonuses, personal manager)."
            },
            {
                name: "How to Qualify / Join",
                purpose: "Clear explanation of the criteria for joining the program or progressing through tiers."
            },
            {
                name: "Exclusive Perks Showcase",
                purpose: "Highlight unique benefits like dedicated support, faster withdrawals, birthday gifts, exclusive tournaments, or luxury rewards."
            },
            {
                name: "VIP Member FAQs",
                purpose: "Address common questions about the VIP program, points, and rewards."
            }
        ]
    },
    News: {
        name: "News Page",
        suggestedSections: [
            {
                name: "News Headline",
                purpose: "H1: 'Latest iGaming News & Industry Updates' or '[CasinoName] News'.",
                seoNote: "Fresh content signal; important for topical authority."
            },
            {
                name: "Latest News Feed",
                purpose: "Chronological or categorized feed of news articles, press releases, or announcements."
            },
            {
                name: "Featured News Articles",
                purpose: "Highlight important or trending news items."
            },
            {
                name: "Industry Analysis & Commentary",
                purpose: "Section for expert opinions, market analysis, or commentary on gaming trends (if applicable)."
            },
            {
                name: "Event Coverage Recaps",
                purpose: "Summaries or reports from trade shows, conferences, or significant industry events."
            },
            {
                name: "Search and Filter Options",
                purpose: "Allow users to search news articles or filter by category/date."
            },
            {
                name: "Newsletter Signup for Updates",
                purpose: "Encourage users to subscribe for the latest news and updates via email."
            }
        ]
    },
    Glossary: {
        name: "Glossary Page",
        suggestedSections: [
            {
                name: "Glossary Headline",
                purpose: "H1: 'Casino & Gambling Terms Glossary'."
            },
            {
                name: "Alphabetical Navigation",
                purpose: "A-Z links for easy navigation."
            },
            {
                name: "Term & Definition Blocks",
                purpose: "Clear definitions for common casino, betting, and gaming terms."
            },
            {
                name: "Search Functionality",
                purpose: "Allow users to search for specific terms."
            }
        ]
    }
};
function getAvailablePages() {
    return Object.keys(pageLibrary).filter((key)=>key !== 'Home');
}
function getPageTemplate(pageKey) {
    return pageLibrary[pageKey] || null;
}
function getAllPageTemplates() {
    return Object.values(pageLibrary);
}
}),
"[project]/src/lib/claude-api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/lib/agent-executor.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "AGENT_CONFIGS": ()=>AGENT_CONFIGS,
    "executeAgent": ()=>executeAgent,
    "getAvailableModels": ()=>getAvailableModels,
    "getRecommendedModel": ()=>getRecommendedModel
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/claude-api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$prompts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/system-prompts.ts [app-ssr] (ecmascript)");
;
;
const AGENT_CONFIGS = {
    'new-project': {
        name: 'New Project Agent',
        description: 'Handles initial project setup and file structure generation',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3_5,
        maxTokens: 4096,
        temperature: 0.3
    },
    'ui': {
        name: 'UI Agent',
        description: 'Handles UI design and user interface creation',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3,
        maxTokens: 3000,
        temperature: 0.5
    },
    'html-structure': {
        name: 'HTML Structure Agent',
        description: 'Creates HTML structure and page layouts',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3_5,
        maxTokens: 4096,
        temperature: 0.2
    },
    'composer': {
        name: 'Composer Agent',
        description: 'Composes and assembles content and components',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClaudeModel"].OPUS_3,
        maxTokens: 4096,
        temperature: 0.4
    },
    'tester-validator-reviewer': {
        name: 'Tester/Validator/Reviewer Agent',
        description: 'Tests, validates, and reviews generated content and code',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3_5,
        maxTokens: 4096,
        temperature: 0.1
    },
    'seo': {
        name: 'SEO Agent',
        description: 'Handles SEO optimization and analysis',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3_5,
        maxTokens: 3000,
        temperature: 0.3
    },
    'content': {
        name: 'Content Agent',
        description: 'Generates and manages content',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3,
        maxTokens: 4096,
        temperature: 0.6
    },
    'researcher': {
        name: 'Researcher Agent',
        description: 'Conducts research and gathers information',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClaudeModel"].HAIKU_3_5,
        maxTokens: 3000,
        temperature: 0.4
    },
    'unicalizator': {
        name: 'Unicalizator Agent',
        description: 'Ensures content uniqueness and originality',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClaudeModel"].HAIKU_3_5,
        maxTokens: 2000,
        temperature: 0.2
    },
    'decomposer': {
        name: 'Decomposer Agent',
        description: 'Breaks down complex tasks into smaller components',
        model: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClaudeModel"].HAIKU_3_5,
        maxTokens: 2000,
        temperature: 0.3
    }
};
async function executeAgent(options) {
    const startTime = Date.now();
    try {
        const { agentType, userInput, customPrompt, modelOverride, maxTokensOverride, temperatureOverride } = options;
        // Validate agent type
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$prompts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllAgentTypes"])().includes(agentType)) {
            throw new Error(`Invalid agent type: ${agentType}`);
        }
        // Get agent configuration
        const agentConfig = AGENT_CONFIGS[agentType];
        if (!agentConfig) {
            throw new Error(`No configuration found for agent: ${agentType}`);
        }
        // Get the system prompt
        const systemPrompt = customPrompt || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$system$2d$prompts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAgentPrompt"])(agentType);
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
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callClaudeAPI"])(filledPrompt, claudeOptions);
        const executionTime = Date.now() - startTime;
        return {
            success: true,
            response,
            metadata: {
                agentType,
                model: claudeOptions.model || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3_5,
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
                model: options.modelOverride || AGENT_CONFIGS[options.agentType]?.model || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3_5,
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
    return agentConfig?.model || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClaudeModel"].SONNET_3_5;
}
function getAvailableModels() {
    return Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$claude$2d$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MODEL_CONFIGS"]).map(([model, config])=>({
            model: model,
            config
        }));
}
}),
"[project]/src/app/web-ui/main-page/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/queries.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2d$library$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/page-library.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$executor$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/agent-executor.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const countries = [
    {
        name: 'United States',
        code: 'US'
    },
    {
        name: 'United Kingdom',
        code: 'UK'
    },
    {
        name: 'Canada',
        code: 'CA'
    },
    {
        name: 'Australia',
        code: 'AU'
    },
    {
        name: 'Germany',
        code: 'DE'
    },
    {
        name: 'France',
        code: 'FR'
    },
    {
        name: 'Spain',
        code: 'ES'
    },
    {
        name: 'Italy',
        code: 'IT'
    },
    {
        name: 'Sweden',
        code: 'SE'
    },
    {
        name: 'Norway',
        code: 'NO'
    }
];
const languages = [
    {
        name: 'English',
        code: 'EN'
    },
    {
        name: 'Spanish',
        code: 'ES'
    },
    {
        name: 'French',
        code: 'FR'
    },
    {
        name: 'German',
        code: 'DE'
    },
    {
        name: 'Italian',
        code: 'IT'
    },
    {
        name: 'Swedish',
        code: 'SV'
    },
    {
        name: 'Norwegian',
        code: 'NO'
    }
];
const siteTypes = [
    {
        name: 'Single Page',
        value: 'single-page'
    },
    {
        name: 'Multi Page',
        value: 'multi-page'
    }
];
const MainPage = ()=>{
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('initial');
    const [showMessage, setShowMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createdProjectId, setCreatedProjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [claudeResponse, setClaudeResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        brand_name: '',
        target_country: '',
        target_language: ''
    });
    const [siteTypeData, setSiteTypeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        site_type: ''
    });
    const [structureData, setStructureData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        selectedPages: [],
        pageSections: {}
    });
    // Function to generate project name
    const generateProjectName = (brandName, country, language)=>{
        const countryCode = countries.find((c)=>c.name === country)?.code || 'XX';
        const languageCode = languages.find((l)=>l.name === language)?.code || 'XX';
        const date = new Date().toISOString().split('T')[0].replace(/-/g, ''); // YYYYMMDD format
        // Clean brand name (remove special characters, replace spaces with hyphens)
        const cleanBrandName = brandName.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').substring(0, 20); // Limit length
        return `${cleanBrandName}-${countryCode}-${languageCode}-${date}`;
    };
    // Function to parse Claude's response and create project files
    const parseAndCreateProjectFiles = async (projectId, claudeResponse)=>{
        try {
            // Try to parse Claude's response as JSON
            let fileStructure;
            try {
                // Extract JSON from Claude's response (it might be wrapped in markdown)
                const jsonMatch = claudeResponse.match(/```json\n([\s\S]*?)\n```/) || claudeResponse.match(/```\n([\s\S]*?)\n```/) || claudeResponse.match(/\[[\s\S]*\]/);
                if (jsonMatch) {
                    fileStructure = JSON.parse(jsonMatch[1] || jsonMatch[0]);
                } else {
                    // If no JSON found, try to parse the entire response
                    fileStructure = JSON.parse(claudeResponse);
                }
            } catch (parseError) {
                console.error('Failed to parse Claude response as JSON:', parseError);
                throw new Error('Claude response is not valid JSON');
            }
            // Validate that we have an array
            if (!Array.isArray(fileStructure)) {
                throw new Error('Claude response is not an array of files');
            }
            // Create project files in database
            const createdFiles = [];
            for (const file of fileStructure){
                try {
                    const projectFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProjectFile"])({
                        project_id: projectId,
                        path: file.path || 'unknown-path',
                        type: file.type || 'page',
                        content: file.description || '',
                        version: 1,
                        blocks: file,
                        author: 'new-project-agent'
                    });
                    if (projectFile) {
                        createdFiles.push(projectFile);
                    }
                } catch (fileError) {
                    console.error('Failed to create project file:', file.path, fileError);
                }
            }
            return createdFiles;
        } catch (error) {
            console.error('Error parsing Claude response:', error);
            throw error;
        }
    };
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSiteTypeChange = (e)=>{
        const { name, value } = e.target;
        setSiteTypeData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handlePageSelection = (pageKey, isSelected)=>{
        setStructureData((prev)=>{
            const newSelectedPages = isSelected ? [
                ...prev.selectedPages,
                pageKey
            ] : prev.selectedPages.filter((p)=>p !== pageKey);
            // When selecting a page, initialize all its sections as selected by default
            const newPageSections = {
                ...prev.pageSections
            };
            if (isSelected && !newPageSections[pageKey]) {
                const pageTemplate = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2d$library$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pageLibrary"][pageKey];
                if (pageTemplate) {
                    newPageSections[pageKey] = pageTemplate.suggestedSections.map((section)=>section.name);
                }
            }
            return {
                ...prev,
                selectedPages: newSelectedPages,
                pageSections: newPageSections
            };
        });
    };
    const handleSectionSelection = (pageKey, sectionName, isSelected)=>{
        setStructureData((prev)=>{
            const currentSections = prev.pageSections[pageKey] || [];
            const newSections = isSelected ? [
                ...currentSections,
                sectionName
            ] : currentSections.filter((s)=>s !== sectionName);
            return {
                ...prev,
                pageSections: {
                    ...prev.pageSections,
                    [pageKey]: newSections
                }
            };
        });
    };
    const handleStartOver = ()=>{
        // Reset all state
        setFormData({
            brand_name: '',
            target_country: '',
            target_language: ''
        });
        setSiteTypeData({
            site_type: ''
        });
        setStructureData({
            selectedPages: [],
            pageSections: {}
        });
        setClaudeResponse(null);
        setCurrentStep('initial');
        setCreatedProjectId(null);
        setShowMessage(false);
    };
    const handleStructureSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        try {
            if (!createdProjectId) {
                throw new Error('No project ID found');
            }
            // Get current project to preserve existing data
            const currentProject = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProjectById"])(createdProjectId);
            if (!currentProject) {
                throw new Error('Project not found');
            }
            // Always include Home as the first page
            const selectedPages = [
                'Home',
                ...structureData.selectedPages.filter((p)=>p !== 'Home')
            ];
            // For each selected page, ensure selected sections are present
            const pageSections = {};
            selectedPages.forEach((pageKey)=>{
                const selected = structureData.pageSections[pageKey];
                if (selected && selected.length > 0) {
                    // If sections are explicitly set, use them
                    pageSections[pageKey] = selected;
                } else {
                    // If no sections in state, default to all sections for this page
                    const pageTemplate = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2d$library$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pageLibrary"][pageKey];
                    if (pageTemplate) {
                        pageSections[pageKey] = pageTemplate.suggestedSections.map((section)=>section.name);
                    } else {
                        pageSections[pageKey] = [];
                    }
                }
            });
            // Prepare structure data
            const structureInfo = {
                selectedPages,
                pageSections,
                totalPages: selectedPages.length,
                structureCompletedAt: new Date().toISOString()
            };
            // Update user_input with structure data
            const updatedUserInput = {
                brand_name: currentProject.user_input?.brand_name || '',
                target_country: currentProject.user_input?.target_country || '',
                target_language: currentProject.user_input?.target_language || '',
                site_type: currentProject.user_input?.site_type || null,
                site_type_selected_at: currentProject.user_input?.site_type_selected_at || null,
                structure: structureInfo
            };
            // Update project with structure data in user_input
            const updateData = {
                state: 'agent-processing',
                user_input: updatedUserInput
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProject"])(createdProjectId, updateData);
            if (result) {
                // Call the new_project_agent with complete structure data
                const agentUserInput = {
                    brand_name: updatedUserInput.brand_name,
                    target_country: updatedUserInput.target_country,
                    target_language: updatedUserInput.target_language,
                    site_type: updatedUserInput.site_type,
                    structure: updatedUserInput.structure
                };
                const agentResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$agent$2d$executor$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["executeAgent"])({
                    agentType: 'new-project',
                    userInput: agentUserInput
                });
                if (agentResult.success && agentResult.response) {
                    // Log the agent task
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAgentTask"])({
                        project_id: createdProjectId,
                        agent: 'new-project',
                        task: 'Generate project file structure',
                        input: agentUserInput,
                        output: {
                            response: agentResult.response
                        },
                        status: 'success',
                        logs: agentResult.metadata
                    });
                    // Parse Claude's response and create project files
                    try {
                        const createdFiles = await parseAndCreateProjectFiles(createdProjectId, agentResult.response);
                        console.log('Created project files:', createdFiles);
                    } catch (parseError) {
                        console.error('Failed to parse Claude response:', parseError);
                    }
                    // Set Claude response to show on next step
                    setClaudeResponse(agentResult.response);
                    setCurrentStep('claude-response');
                    setShowMessage(true);
                    // Update project state
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProject"])(createdProjectId, {
                        state: 'structure-generated',
                        user_input: updatedUserInput
                    });
                    // Hide message after 3 seconds
                    setTimeout(()=>{
                        setShowMessage(false);
                    }, 3000);
                } else {
                    // Log failed agent task
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAgentTask"])({
                        project_id: createdProjectId,
                        agent: 'new-project',
                        task: 'Generate project file structure',
                        input: agentUserInput,
                        output: null,
                        status: 'error',
                        error: agentResult.error || 'Unknown error'
                    });
                    alert('Failed to generate project structure with Claude. Please try again.');
                }
            } else {
                alert('Failed to update project. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting structure:', error);
            alert('An error occurred. Please try again.');
        } finally{
            setIsLoading(false);
        }
    };
    const handleInitialSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        try {
            // Generate project name
            const projectName = generateProjectName(formData.brand_name, formData.target_country, formData.target_language);
            // Create project with the new structure
            const projectData = {
                status: 'created',
                state: 'site-type-selection',
                user_input: {
                    brand_name: formData.brand_name,
                    target_country: formData.target_country,
                    target_language: formData.target_language,
                    site_type: null,
                    site_type_selected_at: null,
                    structure: null
                },
                meta: {
                    form_version: '1.0',
                    submitted_at: new Date().toISOString(),
                    project_name: projectName
                },
                output_refs: null
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProject"])(projectData);
            if (result) {
                setCreatedProjectId(result.id);
                setCurrentStep('site-type');
                setShowMessage(true);
                // Hide message after 3 seconds
                setTimeout(()=>{
                    setShowMessage(false);
                }, 3000);
            } else {
                alert('Failed to save project. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again.');
        } finally{
            setIsLoading(false);
        }
    };
    const handleSiteTypeSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        try {
            if (!createdProjectId) {
                throw new Error('No project ID found');
            }
            // First, get the current project to preserve existing data
            const currentProject = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProjectById"])(createdProjectId);
            if (!currentProject) {
                throw new Error('Project not found');
            }
            // Update user_input with site type
            const updatedUserInput = {
                brand_name: currentProject.user_input?.brand_name || '',
                target_country: currentProject.user_input?.target_country || '',
                target_language: currentProject.user_input?.target_language || '',
                site_type: siteTypeData.site_type,
                site_type_selected_at: new Date().toISOString(),
                structure: currentProject.user_input?.structure || null
            };
            // Update project with site type in user_input
            const updateData = {
                state: 'structure-selection',
                user_input: updatedUserInput
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProject"])(createdProjectId, updateData);
            if (result) {
                // Initialize Home page sections when moving to structure step
                const homePage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2d$library$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pageLibrary"]['Home'];
                if (homePage && !structureData.pageSections['Home']) {
                    setStructureData((prev)=>({
                            ...prev,
                            pageSections: {
                                ...prev.pageSections,
                                'Home': homePage.suggestedSections.map((section)=>section.name)
                            }
                        }));
                }
                setCurrentStep('structure');
            } else {
                alert('Failed to update project. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting site type:', error);
            alert('An error occurred. Please try again.');
        } finally{
            setIsLoading(false);
        }
    };
    const renderInitialForm = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleInitialSubmit,
            className: "w-full max-w-sm space-y-6 bg-slate-50 p-8 rounded shadow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "brand_name",
                            className: "block text-sm font-medium text-slate-700 mb-1",
                            children: "Casino Brand Name"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 456,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            id: "brand_name",
                            name: "brand_name",
                            type: "text",
                            required: true,
                            value: formData.brand_name,
                            onChange: handleInputChange,
                            className: "block w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "Enter casino brand name"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 459,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 455,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "target_country",
                            className: "block text-sm font-medium text-slate-700 mb-1",
                            children: "Target Country"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 471,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            id: "target_country",
                            name: "target_country",
                            required: true,
                            value: formData.target_country,
                            onChange: handleInputChange,
                            className: "block w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select a country"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 482,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                countries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: country.name,
                                        children: country.name
                                    }, country.code, false, {
                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                        lineNumber: 486,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 474,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 470,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "target_language",
                            className: "block text-sm font-medium text-slate-700 mb-1",
                            children: "Target Language"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 493,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            id: "target_language",
                            name: "target_language",
                            required: true,
                            value: formData.target_language,
                            onChange: handleInputChange,
                            className: "block w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select a language"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 504,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                languages.map((language)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: language.name,
                                        children: language.name
                                    }, language.code, false, {
                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                        lineNumber: 508,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 496,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 492,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: isLoading,
                    className: "w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed",
                    children: isLoading ? 'Creating Project...' : 'Submit'
                }, void 0, false, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 514,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
            lineNumber: 454,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    const renderSiteTypeForm = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSiteTypeSubmit,
            className: "w-full max-w-sm space-y-6 bg-slate-50 p-8 rounded shadow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-slate-800 mb-2",
                            children: "Choose Site Type"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 527,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600",
                            children: "Select the type of website you want to generate"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 530,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 526,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "site_type",
                            className: "block text-sm font-medium text-slate-700 mb-1",
                            children: "Site Type"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 536,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            id: "site_type",
                            name: "site_type",
                            required: true,
                            value: siteTypeData.site_type,
                            onChange: handleSiteTypeChange,
                            className: "block w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select site type"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 547,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                siteTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: type.value,
                                        children: type.name
                                    }, type.value, false, {
                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                        lineNumber: 551,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 539,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 535,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: isLoading,
                    className: "w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed",
                    children: isLoading ? 'Updating Project...' : 'Continue'
                }, void 0, false, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 558,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
            lineNumber: 525,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    const renderStructureForm = ()=>{
        const isSinglePage = siteTypeData.site_type === 'single-page';
        const availablePages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2d$library$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAvailablePages"])();
        const homePage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2d$library$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pageLibrary"]['Home'];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleStructureSubmit,
            className: "w-full max-w-4xl space-y-6 bg-slate-50 p-8 rounded shadow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-slate-800 mb-2",
                            children: isSinglePage ? 'Choose Home Page Structure' : 'Choose Pages & Structure'
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 576,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600",
                            children: isSinglePage ? 'Select which sections to include in your single-page website' : 'Select additional pages and their sections for your multi-page website'
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 579,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 575,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border border-slate-200 rounded-lg p-6 bg-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-slate-800 mb-4 flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-2",
                                    children: "Always Included"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 590,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                homePage.name
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 589,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                            children: homePage.suggestedSections.map((section)=>{
                                const isSelected = structureData.pageSections['Home']?.includes(section.name) ?? true;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}`,
                                    onClick: ()=>handleSectionSelection('Home', section.name, !isSelected),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                id: `home-${section.name}`,
                                                checked: isSelected,
                                                onChange: (e)=>handleSectionSelection('Home', section.name, e.target.checked),
                                                className: "mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded",
                                                onClick: (e)=>e.stopPropagation()
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                lineNumber: 607,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: `home-${section.name}`,
                                                        className: "text-sm font-semibold text-slate-800 cursor-pointer block",
                                                        children: section.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                        lineNumber: 616,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-slate-600 mt-2 leading-relaxed",
                                                        children: section.purpose
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                        lineNumber: 619,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    section.seoNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 p-2 bg-blue-100 rounded text-xs text-blue-800 font-medium",
                                                        children: [
                                                            "💡 ",
                                                            section.seoNote
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                        lineNumber: 621,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                lineNumber: 615,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                        lineNumber: 606,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, section.name, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 597,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 593,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 588,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                !isSinglePage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border border-slate-200 rounded-lg p-6 bg-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-slate-800 mb-4",
                            children: "Additional Pages"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 636,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: availablePages.map((pageKey)=>{
                                const pageTemplate = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2d$library$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pageLibrary"][pageKey];
                                const isSelected = structureData.selectedPages.includes(pageKey);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-slate-200 rounded-lg p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md mb-3 ${isSelected ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}`,
                                            onClick: ()=>handlePageSelection(pageKey, !isSelected),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        id: `page-${pageKey}`,
                                                        checked: isSelected,
                                                        onChange: (e)=>handlePageSelection(pageKey, e.target.checked),
                                                        className: "mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded",
                                                        onClick: (e)=>e.stopPropagation()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                        lineNumber: 653,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: `page-${pageKey}`,
                                                            className: "text-sm font-semibold text-slate-800 cursor-pointer block",
                                                            children: pageTemplate.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                            lineNumber: 662,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                        lineNumber: 661,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                lineNumber: 652,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 644,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500 font-medium mb-3",
                                                    children: "Select sections:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                    lineNumber: 672,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 gap-2",
                                                    children: pageTemplate.suggestedSections.map((section)=>{
                                                        const isSectionSelected = structureData.pageSections[pageKey]?.includes(section.name) ?? true;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-sm ${isSectionSelected ? 'border-green-500 bg-green-50' : 'border-slate-200 bg-slate-50 hover:border-slate-300'}`,
                                                            onClick: ()=>handleSectionSelection(pageKey, section.name, !isSectionSelected),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start space-x-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "checkbox",
                                                                        id: `${pageKey}-${section.name}`,
                                                                        checked: isSectionSelected,
                                                                        onChange: (e)=>handleSectionSelection(pageKey, section.name, e.target.checked),
                                                                        className: "mt-0.5 h-3 w-3 text-green-600 focus:ring-green-500 border-slate-300 rounded",
                                                                        onClick: (e)=>e.stopPropagation()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                        lineNumber: 687,
                                                                        columnNumber: 35
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: `${pageKey}-${section.name}`,
                                                                                className: "text-xs font-medium text-slate-700 cursor-pointer block",
                                                                                children: section.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                                lineNumber: 696,
                                                                                columnNumber: 37
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-xs text-slate-500 mt-1 leading-relaxed",
                                                                                children: section.purpose
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                                lineNumber: 699,
                                                                                columnNumber: 37
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            section.seoNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1 p-1 bg-blue-100 rounded text-xs text-blue-800",
                                                                                children: [
                                                                                    "💡 ",
                                                                                    section.seoNote
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                                lineNumber: 701,
                                                                                columnNumber: 39
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                        lineNumber: 695,
                                                                        columnNumber: 35
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                lineNumber: 686,
                                                                columnNumber: 33
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, section.name, false, {
                                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                            lineNumber: 677,
                                                            columnNumber: 31
                                                        }, ("TURBOPACK compile-time value", void 0));
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                    lineNumber: 673,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 671,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, pageKey, true, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 643,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 637,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 635,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setCurrentStep('site-type'),
                            className: "px-4 py-2 text-slate-600 border border-slate-300 rounded hover:bg-slate-50 transition-colors",
                            children: "Back"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 721,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isLoading,
                            className: "px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed",
                            children: isLoading ? 'Generating with Claude...' : 'Generate Project Structure'
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 728,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 720,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
            lineNumber: 574,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const renderClaudeResponse = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-4xl space-y-6 bg-slate-50 p-8 rounded shadow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-slate-800 mb-2",
                            children: "🎉 Project Structure Generated!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 743,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600",
                            children: "Claude has analyzed your requirements and generated a complete project structure"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 746,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 742,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                claudeResponse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-slate-800 mb-4",
                            children: "Generated Project Structure"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 753,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-100 rounded p-4 max-h-96 overflow-y-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "text-sm text-slate-700 whitespace-pre-wrap",
                                children: claudeResponse
                            }, void 0, false, {
                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                lineNumber: 757,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 756,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 752,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center space-x-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleStartOver,
                            className: "px-6 py-2 bg-slate-600 text-white rounded font-semibold hover:bg-slate-700 transition-colors",
                            children: "Start New Project"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 765,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                console.log('Project completed:', createdProjectId);
                                alert('Project structure has been saved to the database!');
                            },
                            className: "px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 transition-colors",
                            children: "View Project Details"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 771,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 764,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
            lineNumber: 741,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-5xl font-bold mb-12 text-center",
                children: "SEO GEN"
            }, void 0, false, {
                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                lineNumber: 786,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded",
                children: currentStep === 'initial' ? 'Project created successfully!' : currentStep === 'claude-response' ? 'Project structure generated successfully!' : 'Project updated successfully!'
            }, void 0, false, {
                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                lineNumber: 789,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            currentStep === 'initial' && renderInitialForm(),
            currentStep === 'site-type' && renderSiteTypeForm(),
            currentStep === 'structure' && renderStructureForm(),
            currentStep === 'claude-response' && renderClaudeResponse()
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
        lineNumber: 785,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MainPage;
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__9bfaa9c2._.js.map