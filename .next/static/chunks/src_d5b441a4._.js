(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/db/supabase.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "supabase": ()=>supabase,
    "typedSupabase": ()=>typedSupabase
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://elhqvvjetvlwdhfswrzd.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsaHF2dmpldHZsd2RoZnN3cnpkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4MzU1OTgsImV4cCI6MjA2ODQxMTU5OH0._BodrQWWui6azTTaDuPQfF0jOUPI5-6u_6S9FpuHbSM");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
const typedSupabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/db/queries.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/supabase.ts [app-client] (ecmascript)");
;
async function createProject(data) {
    try {
        const { data: project, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('projects').insert([
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
        const { data: projects, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('projects').select('*').order('created_at', {
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
        const { data: project, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('projects').select('*').eq('id', id).single();
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
        const { data: project, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('projects').update(data).eq('id', id).select().single();
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
        const { data: file, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('project_files').insert([
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
        const { data: files, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('project_files').select('*').eq('project_id', projectId).order('created_at', {
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
        const { data: task, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('agent_tasks').insert([
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
        const { data: tasks, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('agent_tasks').select('*').eq('project_id', projectId).order('created_at', {
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
        const { data: version, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('project_versions').insert([
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
        const { data: errorLog, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('error_log').insert([
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
        const { data: item, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('library').insert([
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
        const { data: edit, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('edits').insert([
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
        const { data: asset, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('assets').insert([
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
        const { data: report, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('seo_reports').insert([
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
        const { data: log, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('orchestrator_logs').insert([
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/page-library.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/web-ui/main-page/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/queries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2d$library$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/page-library.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Remove server-side import
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
// Client-side function to call agent API
const executeAgentAPI = async (agentType, userInput)=>{
    const response = await fetch('/api/claude/agent', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            agentType,
            userInput
        })
    });
    if (!response.ok) {
        throw new Error("HTTP error! status: ".concat(response.status));
    }
    return await response.json();
};
const MainPage = ()=>{
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('initial');
    const [showMessage, setShowMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createdProjectId, setCreatedProjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [claudeResponse, setClaudeResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filledPrompt, setFilledPrompt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [researchResults, setResearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [researchStatus, setResearchStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [researchProgress, setResearchProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [researchStep, setResearchStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Client-side function to start background research
    const startBackgroundResearch = async (projectId, projectName, brandName, targetCountry, targetLanguage)=>{
        try {
            const response = await fetch('/api/researcher/start', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    projectId,
                    projectName,
                    brandName,
                    targetCountry,
                    targetLanguage
                })
            });
            if (!response.ok) {
                console.error('Failed to start background research:', response.status);
            } else {
                console.log('Background research started successfully');
                setResearchStatus('started');
            }
        } catch (error) {
            console.error('Error starting background research:', error);
        }
    };
    // Client-side function to check research status
    const checkResearchStatus = async (projectId)=>{
        try {
            const response = await fetch("/api/researcher/start?projectId=".concat(projectId));
            if (response.ok) {
                var _data_status, _data_status1, _data_status2, _data_status3;
                const data = await response.json();
                // Update progress and step information
                if (data.status) {
                    setResearchProgress(data.status.progress || 0);
                    setResearchStep(getStepDescription(data.status.progress || 0));
                }
                // Check for completion
                if (data.isCompleted && data.results) {
                    setResearchResults(data.results);
                    setResearchStatus('completed');
                    setResearchProgress(100);
                    setResearchStep('Research completed successfully!');
                    return data.results;
                } else if (((_data_status = data.status) === null || _data_status === void 0 ? void 0 : _data_status.status) === 'completed' && data.results) {
                    setResearchResults(data.results);
                    setResearchStatus('completed');
                    setResearchProgress(100);
                    setResearchStep('Research completed successfully!');
                    return data.results;
                } else if (((_data_status1 = data.status) === null || _data_status1 === void 0 ? void 0 : _data_status1.status) === 'in_progress') {
                    setResearchStatus('in_progress');
                } else if (((_data_status2 = data.status) === null || _data_status2 === void 0 ? void 0 : _data_status2.status) === 'completed') {
                    setResearchStatus('completed');
                    setResearchProgress(100);
                    if (data.results) {
                        setResearchResults(data.results);
                    }
                } else if (((_data_status3 = data.status) === null || _data_status3 === void 0 ? void 0 : _data_status3.status) === 'failed') {
                    setResearchStatus('failed');
                    setResearchStep(data.status.error || 'Research failed');
                }
            }
        } catch (error) {
            console.error('Error checking research status:', error);
        }
        return null;
    };
    // Helper function to get step description based on progress
    const getStepDescription = (progress)=>{
        if (progress === 0) return 'Initializing research...';
        if (progress <= 10) return 'Starting research task...';
        if (progress <= 30) return 'Preparing research prompt...';
        if (progress <= 50) return 'Executing ChatGPT API call...';
        if (progress <= 70) return 'Processing research results...';
        if (progress <= 90) return 'Saving results to database...';
        if (progress < 100) return 'Finalizing research...';
        return 'Research completed!';
    };
    // Check research status periodically
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MainPage.useEffect": ()=>{
            let interval;
            if (createdProjectId && (researchStatus === 'started' || researchStatus === 'in_progress')) {
                interval = setInterval({
                    "MainPage.useEffect": async ()=>{
                        await checkResearchStatus(createdProjectId);
                    }
                }["MainPage.useEffect"], 2000); // Check every 2 seconds (faster)
            }
            return ({
                "MainPage.useEffect": ()=>{
                    if (interval) {
                        clearInterval(interval);
                    }
                }
            })["MainPage.useEffect"];
        }
    }["MainPage.useEffect"], [
        createdProjectId,
        researchStatus
    ]);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        brand_name: '',
        target_country: '',
        target_language: ''
    });
    const [siteTypeData, setSiteTypeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        site_type: ''
    });
    const [structureData, setStructureData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        selectedPages: [],
        pageSections: {}
    });
    // Function to generate project name
    const generateProjectName = (brandName, country, language)=>{
        var _countries_find, _languages_find;
        const countryCode = ((_countries_find = countries.find((c)=>c.name === country)) === null || _countries_find === void 0 ? void 0 : _countries_find.code) || 'XX';
        const languageCode = ((_languages_find = languages.find((l)=>l.name === language)) === null || _languages_find === void 0 ? void 0 : _languages_find.code) || 'XX';
        const date = new Date().toISOString().split('T')[0].replace(/-/g, ''); // YYYYMMDD format
        // Clean brand name (remove special characters, replace spaces with hyphens)
        const cleanBrandName = brandName.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').substring(0, 20); // Limit length
        return "".concat(cleanBrandName, "-").concat(countryCode, "-").concat(languageCode, "-").concat(date);
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
                    const projectFile = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProjectFile"])({
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
                const pageTemplate = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2d$library$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageLibrary"][pageKey];
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
        setFilledPrompt(null);
        setResearchResults(null);
        setResearchStatus('idle');
        setResearchProgress(0);
        setResearchStep('');
        setCurrentStep('initial');
        setCreatedProjectId(null);
        setShowMessage(false);
    };
    const handleStructureSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        try {
            var _currentProject_user_input, _currentProject_user_input1, _currentProject_user_input2, _currentProject_user_input3, _currentProject_user_input4;
            if (!createdProjectId) {
                throw new Error('No project ID found');
            }
            // Get current project to preserve existing data
            const currentProject = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProjectById"])(createdProjectId);
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
                    const pageTemplate = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2d$library$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageLibrary"][pageKey];
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
            // Reorganize user_input with project info at top and structure at bottom
            const updatedUserInput = {
                brand_name: ((_currentProject_user_input = currentProject.user_input) === null || _currentProject_user_input === void 0 ? void 0 : _currentProject_user_input.brand_name) || '',
                target_country: ((_currentProject_user_input1 = currentProject.user_input) === null || _currentProject_user_input1 === void 0 ? void 0 : _currentProject_user_input1.target_country) || '',
                target_language: ((_currentProject_user_input2 = currentProject.user_input) === null || _currentProject_user_input2 === void 0 ? void 0 : _currentProject_user_input2.target_language) || '',
                site_type: ((_currentProject_user_input3 = currentProject.user_input) === null || _currentProject_user_input3 === void 0 ? void 0 : _currentProject_user_input3.site_type) || null,
                site_type_selected_at: ((_currentProject_user_input4 = currentProject.user_input) === null || _currentProject_user_input4 === void 0 ? void 0 : _currentProject_user_input4.site_type_selected_at) || null,
                structure: structureInfo
            };
            // Update project with structure data in user_input
            const updateData = {
                state: 'agent-processing',
                user_input: updatedUserInput
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProject"])(createdProjectId, updateData);
            if (result) {
                // Call the new_project_agent with complete structure data
                const agentUserInput = {
                    brand_name: updatedUserInput.brand_name,
                    target_country: updatedUserInput.target_country,
                    target_language: updatedUserInput.target_language,
                    site_type: updatedUserInput.site_type,
                    structure: updatedUserInput.structure
                };
                const agentResult = await executeAgentAPI('new-project', agentUserInput);
                if (agentResult.success && agentResult.response) {
                    // Log the agent task
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAgentTask"])({
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
                    // Set Claude response and filled prompt to show on next step
                    setClaudeResponse(agentResult.response);
                    setFilledPrompt(agentResult.filledPrompt || null);
                    setCurrentStep('claude-response');
                    setShowMessage(true);
                    // Update project state
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProject"])(createdProjectId, {
                        state: 'structure-generated',
                        user_input: updatedUserInput
                    });
                    // Hide message after 3 seconds
                    setTimeout(()=>{
                        setShowMessage(false);
                    }, 3000);
                } else {
                    // Log failed agent task
                    console.error('Agent execution failed:', agentResult);
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAgentTask"])({
                        project_id: createdProjectId,
                        agent: 'new-project',
                        task: 'Generate project file structure',
                        input: agentUserInput,
                        output: null,
                        status: 'error',
                        error: agentResult.error || 'Unknown error'
                    });
                    alert("Failed to generate project structure with Claude: ".concat(agentResult.error || 'Unknown error'));
                }
            } else {
                alert('Failed to update project. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting structure:', error);
            alert("An error occurred: ".concat(error instanceof Error ? error.message : 'Unknown error'));
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
            // Create project with the reorganized structure
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createProject"])(projectData);
            if (result) {
                setCreatedProjectId(result.id);
                // Start background research after step 1 completion
                await startBackgroundResearch(result.id, projectName, formData.brand_name, formData.target_country, formData.target_language);
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
            var _currentProject_user_input, _currentProject_user_input1, _currentProject_user_input2, _currentProject_user_input3;
            if (!createdProjectId) {
                throw new Error('No project ID found');
            }
            // First, get the current project to preserve existing data
            const currentProject = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProjectById"])(createdProjectId);
            if (!currentProject) {
                throw new Error('Project not found');
            }
            // Update user_input with site type, maintaining organized structure
            const updatedUserInput = {
                brand_name: ((_currentProject_user_input = currentProject.user_input) === null || _currentProject_user_input === void 0 ? void 0 : _currentProject_user_input.brand_name) || '',
                target_country: ((_currentProject_user_input1 = currentProject.user_input) === null || _currentProject_user_input1 === void 0 ? void 0 : _currentProject_user_input1.target_country) || '',
                target_language: ((_currentProject_user_input2 = currentProject.user_input) === null || _currentProject_user_input2 === void 0 ? void 0 : _currentProject_user_input2.target_language) || '',
                site_type: siteTypeData.site_type,
                site_type_selected_at: new Date().toISOString(),
                structure: ((_currentProject_user_input3 = currentProject.user_input) === null || _currentProject_user_input3 === void 0 ? void 0 : _currentProject_user_input3.structure) || null
            };
            // Update project with site type in user_input
            const updateData = {
                state: 'structure-selection',
                user_input: updatedUserInput
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProject"])(createdProjectId, updateData);
            if (result) {
                // Initialize Home page sections when moving to structure step
                const homePage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2d$library$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageLibrary"]['Home'];
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
    const renderInitialForm = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleInitialSubmit,
            className: "w-full max-w-sm space-y-6 bg-slate-50 p-8 rounded shadow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "brand_name",
                            className: "block text-sm font-medium text-slate-700 mb-1",
                            children: "Casino Brand Name"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 599,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            lineNumber: 602,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 598,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "target_country",
                            className: "block text-sm font-medium text-slate-700 mb-1",
                            children: "Target Country"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 614,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            id: "target_country",
                            name: "target_country",
                            required: true,
                            value: formData.target_country,
                            onChange: handleInputChange,
                            className: "block w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select a country"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 625,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                countries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: country.name,
                                        children: country.name
                                    }, country.code, false, {
                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                        lineNumber: 629,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 617,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 613,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "target_language",
                            className: "block text-sm font-medium text-slate-700 mb-1",
                            children: "Target Language"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 636,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            id: "target_language",
                            name: "target_language",
                            required: true,
                            value: formData.target_language,
                            onChange: handleInputChange,
                            className: "block w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    value: "",
                                    children: "Select a language"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 647,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                languages.map((language)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: language.name,
                                        children: language.name
                                    }, language.code, false, {
                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                        lineNumber: 651,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 639,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 635,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: isLoading,
                    className: "w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed",
                    children: isLoading ? 'Creating Project...' : 'Submit'
                }, void 0, false, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 657,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
            lineNumber: 597,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    const renderSiteTypeForm = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-sm space-y-6",
            children: [
                renderResearchStatus(),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSiteTypeSubmit,
                    className: "w-full space-y-6 bg-slate-50 p-8 rounded shadow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-slate-800 mb-2",
                                    children: "Choose Site Type"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 674,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-600",
                                    children: "Select the type of website you want to generate"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 677,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 673,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "site_type",
                                    className: "block text-sm font-medium text-slate-700 mb-1",
                                    children: "Site Type"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 683,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    id: "site_type",
                                    name: "site_type",
                                    required: true,
                                    value: siteTypeData.site_type,
                                    onChange: handleSiteTypeChange,
                                    className: "block w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "Select site type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 694,
                                            columnNumber: 11
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        siteTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: type.value,
                                                children: type.name
                                            }, type.value, false, {
                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                lineNumber: 698,
                                                columnNumber: 13
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 686,
                                    columnNumber: 9
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 682,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isLoading,
                            className: "w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed",
                            children: isLoading ? 'Updating Project...' : 'Continue'
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 705,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 672,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
            lineNumber: 668,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    const renderStructureForm = ()=>{
        const isSinglePage = siteTypeData.site_type === 'single-page';
        const availablePages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2d$library$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvailablePages"])();
        const homePage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2d$library$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageLibrary"]['Home'];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-4xl space-y-6",
            children: [
                renderResearchStatus(),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleStructureSubmit,
                    className: "w-full space-y-6 bg-slate-50 p-8 rounded shadow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-slate-800 mb-2",
                                    children: isSinglePage ? 'Choose Home Page Structure' : 'Choose Pages & Structure'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 728,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-600",
                                    children: isSinglePage ? 'Select which sections to include in your single-page website' : 'Select additional pages and their sections for your multi-page website'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 731,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 727,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-slate-200 rounded-lg p-6 bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-slate-800 mb-4 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-2",
                                            children: "Always Included"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 742,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        homePage.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 741,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                    children: homePage.suggestedSections.map((section)=>{
                                        var _structureData_pageSections_Home;
                                        var _structureData_pageSections_Home_includes;
                                        const isSelected = (_structureData_pageSections_Home_includes = (_structureData_pageSections_Home = structureData.pageSections['Home']) === null || _structureData_pageSections_Home === void 0 ? void 0 : _structureData_pageSections_Home.includes(section.name)) !== null && _structureData_pageSections_Home_includes !== void 0 ? _structureData_pageSections_Home_includes : true;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ".concat(isSelected ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-slate-50 hover:border-slate-300'),
                                            onClick: ()=>handleSectionSelection('Home', section.name, !isSelected),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        id: "home-".concat(section.name),
                                                        checked: isSelected,
                                                        onChange: (e)=>handleSectionSelection('Home', section.name, e.target.checked),
                                                        className: "mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded",
                                                        onClick: (e)=>e.stopPropagation()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                        lineNumber: 759,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "home-".concat(section.name),
                                                                className: "text-sm font-semibold text-slate-800 cursor-pointer block",
                                                                children: section.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                lineNumber: 768,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-600 mt-2 leading-relaxed",
                                                                children: section.purpose
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                lineNumber: 771,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            section.seoNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 p-2 bg-blue-100 rounded text-xs text-blue-800 font-medium",
                                                                children: [
                                                                    "💡 ",
                                                                    section.seoNote
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                lineNumber: 773,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                        lineNumber: 767,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                lineNumber: 758,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, section.name, false, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 749,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 745,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 740,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        !isSinglePage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-slate-200 rounded-lg p-6 bg-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-slate-800 mb-4",
                                    children: "Additional Pages"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 788,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                    children: availablePages.map((pageKey)=>{
                                        const pageTemplate = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$page$2d$library$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pageLibrary"][pageKey];
                                        const isSelected = structureData.selectedPages.includes(pageKey);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border border-slate-200 rounded-lg p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md mb-3 ".concat(isSelected ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-slate-50 hover:border-slate-300'),
                                                    onClick: ()=>handlePageSelection(pageKey, !isSelected),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-start space-x-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                id: "page-".concat(pageKey),
                                                                checked: isSelected,
                                                                onChange: (e)=>handlePageSelection(pageKey, e.target.checked),
                                                                className: "mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded",
                                                                onClick: (e)=>e.stopPropagation()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                lineNumber: 805,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "page-".concat(pageKey),
                                                                    className: "text-sm font-semibold text-slate-800 cursor-pointer block",
                                                                    children: pageTemplate.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                    lineNumber: 814,
                                                                    columnNumber: 27
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                lineNumber: 813,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                        lineNumber: 804,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                    lineNumber: 796,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-slate-500 font-medium mb-3",
                                                            children: "Select sections:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                            lineNumber: 824,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 gap-2",
                                                            children: pageTemplate.suggestedSections.map((section)=>{
                                                                var _structureData_pageSections_pageKey;
                                                                var _structureData_pageSections_pageKey_includes;
                                                                const isSectionSelected = (_structureData_pageSections_pageKey_includes = (_structureData_pageSections_pageKey = structureData.pageSections[pageKey]) === null || _structureData_pageSections_pageKey === void 0 ? void 0 : _structureData_pageSections_pageKey.includes(section.name)) !== null && _structureData_pageSections_pageKey_includes !== void 0 ? _structureData_pageSections_pageKey_includes : true;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:shadow-sm ".concat(isSectionSelected ? 'border-green-500 bg-green-50' : 'border-slate-200 bg-slate-50 hover:border-slate-300'),
                                                                    onClick: ()=>handleSectionSelection(pageKey, section.name, !isSectionSelected),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-start space-x-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "checkbox",
                                                                                id: "".concat(pageKey, "-").concat(section.name),
                                                                                checked: isSectionSelected,
                                                                                onChange: (e)=>handleSectionSelection(pageKey, section.name, e.target.checked),
                                                                                className: "mt-0.5 h-3 w-3 text-green-600 focus:ring-green-500 border-slate-300 rounded",
                                                                                onClick: (e)=>e.stopPropagation()
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                                lineNumber: 839,
                                                                                columnNumber: 35
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                        htmlFor: "".concat(pageKey, "-").concat(section.name),
                                                                                        className: "text-xs font-medium text-slate-700 cursor-pointer block",
                                                                                        children: section.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                                        lineNumber: 848,
                                                                                        columnNumber: 37
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-xs text-slate-500 mt-1 leading-relaxed",
                                                                                        children: section.purpose
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                                        lineNumber: 851,
                                                                                        columnNumber: 37
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    section.seoNote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "mt-1 p-1 bg-blue-100 rounded text-xs text-blue-800",
                                                                                        children: [
                                                                                            "💡 ",
                                                                                            section.seoNote
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                                        lineNumber: 853,
                                                                                        columnNumber: 39
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                                lineNumber: 847,
                                                                                columnNumber: 35
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                        lineNumber: 838,
                                                                        columnNumber: 33
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, section.name, false, {
                                                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                                    lineNumber: 829,
                                                                    columnNumber: 31
                                                                }, ("TURBOPACK compile-time value", void 0));
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                            lineNumber: 825,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                    lineNumber: 823,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, pageKey, true, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 795,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0));
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 789,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 787,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setCurrentStep('site-type'),
                                    className: "px-4 py-2 text-slate-600 border border-slate-300 rounded hover:bg-slate-50 transition-colors",
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 873,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isLoading,
                                    className: "px-6 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed",
                                    children: isLoading ? 'Generating with Claude...' : 'Generate Project Structure'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 880,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 872,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 726,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
            lineNumber: 722,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const renderResearchResults = ()=>{
        var _researchResults_metadata, _researchResults_metadata1, _researchResults_bonuses, _researchResults_providers, _researchResults_topSlots, _researchResults_metadata2, _researchResults_metadata_sourcesChecked, _researchResults_metadata3;
        if (!researchResults) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-4xl bg-white rounded-lg p-6 border mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-slate-800 flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm mr-2",
                                    children: "Research"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 900,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "🔍 Casino Research Results"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 899,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-slate-500",
                                    children: [
                                        "Search Time: ",
                                        ((_researchResults_metadata = researchResults.metadata) === null || _researchResults_metadata === void 0 ? void 0 : _researchResults_metadata.searchTime) ? "".concat(Math.round(researchResults.metadata.searchTime / 1000), "s") : 'N/A'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 904,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-slate-400",
                                    children: ((_researchResults_metadata1 = researchResults.metadata) === null || _researchResults_metadata1 === void 0 ? void 0 : _researchResults_metadata1.note) && "(".concat(researchResults.metadata.note, ")")
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 907,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 903,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 898,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                        ((_researchResults_bonuses = researchResults.bonuses) === null || _researchResults_bonuses === void 0 ? void 0 : _researchResults_bonuses.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 rounded-lg p-4 border border-blue-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-blue-800 flex items-center",
                                            children: [
                                                "💰 Bonuses (",
                                                researchResults.bonuses.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 917,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded",
                                            children: "Found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 920,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 916,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-sm text-blue-700 space-y-1",
                                    children: researchResults.bonuses.map((bonus, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-blue-500 mr-2",
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                    lineNumber: 927,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: bonus
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                    lineNumber: 928,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 926,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 924,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 915,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        ((_researchResults_providers = researchResults.providers) === null || _researchResults_providers === void 0 ? void 0 : _researchResults_providers.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-green-50 rounded-lg p-4 border border-green-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-green-800 flex items-center",
                                            children: [
                                                "🎮 Providers (",
                                                researchResults.providers.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 938,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-green-600 bg-green-100 px-2 py-1 rounded",
                                            children: "Found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 941,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 937,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-sm text-green-700 space-y-1",
                                    children: researchResults.providers.map((provider, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-500 mr-2",
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                    lineNumber: 948,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: provider
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                    lineNumber: 949,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 947,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 945,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 936,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        ((_researchResults_topSlots = researchResults.topSlots) === null || _researchResults_topSlots === void 0 ? void 0 : _researchResults_topSlots.length) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-yellow-50 rounded-lg p-4 border border-yellow-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-yellow-800 flex items-center",
                                            children: [
                                                "🎰 Top Slots (",
                                                researchResults.topSlots.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 959,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded",
                                            children: "Found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 962,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 958,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "text-sm text-yellow-700 space-y-1",
                                    children: researchResults.topSlots.map((slot, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-yellow-500 mr-2",
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                    lineNumber: 969,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: slot
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                    lineNumber: 970,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 968,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 966,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 957,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        researchResults.logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-purple-50 rounded-lg p-4 border border-purple-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-purple-800 flex items-center",
                                            children: "🎨 Logo"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 980,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded",
                                            children: "Found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 983,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 979,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-purple-700",
                                    children: researchResults.logo
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 987,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 978,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 913,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 pt-4 border-t border-slate-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-xs text-slate-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Research completed at: ",
                                    new Date(((_researchResults_metadata2 = researchResults.metadata) === null || _researchResults_metadata2 === void 0 ? void 0 : _researchResults_metadata2.timestamp) || '').toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                lineNumber: 994,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Sources checked: ",
                                    ((_researchResults_metadata3 = researchResults.metadata) === null || _researchResults_metadata3 === void 0 ? void 0 : (_researchResults_metadata_sourcesChecked = _researchResults_metadata3.sourcesChecked) === null || _researchResults_metadata_sourcesChecked === void 0 ? void 0 : _researchResults_metadata_sourcesChecked.length) || 0,
                                    " websites"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                lineNumber: 997,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                        lineNumber: 993,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 992,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
            lineNumber: 897,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const renderResearchStatus = ()=>{
        if (researchStatus === 'idle') return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-4xl bg-white rounded-lg p-6 border mb-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-6 rounded-full flex items-center justify-center ".concat(researchStatus === 'started' ? 'bg-blue-500 animate-pulse' : researchStatus === 'in_progress' ? 'bg-yellow-500 animate-pulse' : researchStatus === 'completed' ? 'bg-green-500' : 'bg-red-500'),
                                    children: [
                                        researchStatus === 'completed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 text-white",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M5 13l4 4L19 7"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                lineNumber: 1021,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 1020,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        researchStatus === 'failed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4 text-white",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                                lineNumber: 1026,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 1025,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 1013,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-semibold text-slate-800",
                                            children: "🔍 Casino Research Progress"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 1031,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-600",
                                            children: researchStep
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                            lineNumber: 1034,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 1030,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 1012,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-right",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-2xl font-bold text-slate-800",
                                    children: [
                                        researchProgress,
                                        "%"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 1038,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-slate-500",
                                    children: "Complete"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 1039,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 1037,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 1011,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-slate-200 rounded-full h-3 mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 rounded-full transition-all duration-500 ease-out ".concat(researchStatus === 'completed' ? 'bg-green-500' : researchStatus === 'failed' ? 'bg-red-500' : 'bg-blue-500'),
                        style: {
                            width: "".concat(researchProgress, "%")
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                        lineNumber: 1045,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 1044,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-3 rounded-full ".concat(researchProgress >= 10 ? 'bg-green-500' : 'bg-slate-300')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 1058,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: researchProgress >= 10 ? 'text-green-700' : 'text-slate-500',
                                    children: "Task Initialized"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 1061,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 1057,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-3 rounded-full ".concat(researchProgress >= 30 ? 'bg-green-500' : 'bg-slate-300')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 1066,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: researchProgress >= 30 ? 'text-green-700' : 'text-slate-500',
                                    children: "API Call"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 1069,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 1065,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-3 h-3 rounded-full ".concat(researchProgress >= 70 ? 'bg-green-500' : 'bg-slate-300')
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 1074,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: researchProgress >= 70 ? 'text-green-700' : 'text-slate-500',
                                    children: "Processing"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 1077,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 1073,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 1056,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                researchStatus === 'failed' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 p-3 bg-red-50 border border-red-200 rounded",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 text-red-500",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                        lineNumber: 1088,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 1087,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-red-700 font-medium",
                                    children: "Research Error"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 1090,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 1086,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-red-600 mt-1",
                            children: researchStep
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 1092,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 1085,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
            lineNumber: 1010,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const renderClaudeResponse = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-4xl space-y-6 bg-slate-50 p-8 rounded shadow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-slate-800 mb-2",
                            children: "🎉 Project Structure Generated!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 1102,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600",
                            children: "Claude has analyzed your requirements and generated a complete project structure"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 1105,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 1101,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                renderResearchStatus(),
                renderResearchResults(),
                filledPrompt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 border mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-slate-800 mb-4 flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-2",
                                    children: "Input"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 1119,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "📝 Prompt Sent to Claude"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 1118,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 rounded p-4 max-h-64 overflow-y-auto border border-blue-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed",
                                children: filledPrompt
                            }, void 0, false, {
                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                lineNumber: 1123,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 1122,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 1117,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                claudeResponse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 border",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-slate-800 mb-4 flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-2",
                                    children: "Output"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                    lineNumber: 1133,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "🤖 Claude's Response"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 1132,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-100 rounded p-4 max-h-96 overflow-y-auto border border-slate-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                className: "text-sm text-slate-700 whitespace-pre-wrap font-mono leading-relaxed",
                                children: claudeResponse
                            }, void 0, false, {
                                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                lineNumber: 1137,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 1136,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 1131,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center space-x-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleStartOver,
                            className: "px-6 py-2 bg-slate-600 text-white rounded font-semibold hover:bg-slate-700 transition-colors",
                            children: "Start New Project"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 1145,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                console.log('Project completed:', createdProjectId);
                                alert('Project structure has been saved to the database!');
                            },
                            className: "px-6 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 transition-colors",
                            children: "View Project Details"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 1151,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 1144,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
            lineNumber: 1100,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col items-center justify-center bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-5xl font-bold mb-12 text-center",
                children: "SEO GEN"
            }, void 0, false, {
                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                lineNumber: 1166,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded",
                children: currentStep === 'initial' ? 'Project created successfully!' : currentStep === 'claude-response' ? 'Project structure generated successfully!' : 'Project updated successfully!'
            }, void 0, false, {
                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                lineNumber: 1169,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            currentStep === 'initial' && renderInitialForm(),
            currentStep === 'site-type' && renderSiteTypeForm(),
            currentStep === 'structure' && renderStructureForm(),
            currentStep === 'claude-response' && renderClaudeResponse()
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
        lineNumber: 1165,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MainPage, "IYdTUW4sOyJYKeMtiz+YQbz6nhY=");
_c = MainPage;
const __TURBOPACK__default__export__ = MainPage;
var _c;
__turbopack_context__.k.register(_c, "MainPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_d5b441a4._.js.map