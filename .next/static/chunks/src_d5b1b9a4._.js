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
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('initial');
    const [showMessage, setShowMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createdProjectId, setCreatedProjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
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
            return {
                ...prev,
                selectedPages: newSelectedPages
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
    const handleStructureSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        try {
            if (!createdProjectId) {
                throw new Error('No project ID found');
            }
            // Get current project to preserve existing meta data
            const currentProject = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProjectById"])(createdProjectId);
            if (!currentProject) {
                throw new Error('Project not found');
            }
            // Prepare structure data
            const structureInfo = {
                selectedPages: structureData.selectedPages,
                pageSections: structureData.pageSections,
                totalPages: siteTypeData.site_type === 'single-page' ? 1 : structureData.selectedPages.length + 1,
                structureCompletedAt: new Date().toISOString()
            };
            // Merge existing meta with structure data
            const existingMeta = currentProject.meta || {};
            const updatedMeta = {
                ...existingMeta,
                structure: structureInfo
            };
            // Update project with structure data
            const updateData = {
                state: 'ready-for-generation',
                meta: updatedMeta
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProject"])(createdProjectId, updateData);
            if (result) {
                setShowMessage(true);
                // Reset form and go back to initial step
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
                setCurrentStep('initial');
                setCreatedProjectId(null);
                // Hide message after 3 seconds
                setTimeout(()=>{
                    setShowMessage(false);
                }, 3000);
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
                user_input: formData,
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
            // First, get the current project to preserve existing meta data
            const currentProject = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProjectById"])(createdProjectId);
            if (!currentProject) {
                throw new Error('Project not found');
            }
            // Merge existing meta with new site type data
            const existingMeta = currentProject.meta || {};
            const updatedMeta = {
                ...existingMeta,
                site_type: siteTypeData.site_type,
                site_type_selected_at: new Date().toISOString()
            };
            // Update project with merged meta data
            const updateData = {
                state: 'ready-for-generation',
                meta: updatedMeta
            };
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$queries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProject"])(createdProjectId, updateData);
            if (result) {
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
                            lineNumber: 282,
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
                            lineNumber: 285,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 281,
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
                            lineNumber: 297,
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
                                    lineNumber: 308,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                countries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: country.name,
                                        children: country.name
                                    }, country.code, false, {
                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                        lineNumber: 312,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 300,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 296,
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
                            lineNumber: 319,
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
                                    lineNumber: 330,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                languages.map((language)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: language.name,
                                        children: language.name
                                    }, language.code, false, {
                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                        lineNumber: 334,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 322,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 318,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: isLoading,
                    className: "w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed",
                    children: isLoading ? 'Creating Project...' : 'Submit'
                }, void 0, false, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 340,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
            lineNumber: 280,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    const renderSiteTypeForm = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSiteTypeSubmit,
            className: "w-full max-w-sm space-y-6 bg-slate-50 p-8 rounded shadow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-slate-800 mb-2",
                            children: "Choose Site Type"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 353,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-slate-600",
                            children: "Select the type of website you want to generate"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 356,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 352,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            htmlFor: "site_type",
                            className: "block text-sm font-medium text-slate-700 mb-1",
                            children: "Site Type"
                        }, void 0, false, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 362,
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
                                    lineNumber: 373,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                siteTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: type.value,
                                        children: type.name
                                    }, type.value, false, {
                                        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                            lineNumber: 365,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 361,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: isLoading,
                    className: "w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed",
                    children: isLoading ? 'Updating Project...' : 'Continue'
                }, void 0, false, {
                    fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                    lineNumber: 384,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/web-ui/main-page/page.tsx",
            lineNumber: 351,
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
                lineNumber: 396,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded",
                children: currentStep === 'initial' ? 'Project created successfully!' : 'Project updated successfully!'
            }, void 0, false, {
                fileName: "[project]/src/app/web-ui/main-page/page.tsx",
                lineNumber: 399,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            currentStep === 'initial' ? renderInitialForm() : renderSiteTypeForm()
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/web-ui/main-page/page.tsx",
        lineNumber: 395,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MainPage, "b4XkmePOKPLPmwEz66NUSGCRDnU=");
_c = MainPage;
const __TURBOPACK__default__export__ = MainPage;
var _c;
__turbopack_context__.k.register(_c, "MainPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_d5b1b9a4._.js.map