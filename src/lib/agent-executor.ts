import { callClaudeAPI, ClaudeModel, ClaudeAPIOptions, MODEL_CONFIGS } from './claude-api';
import { getAgentPrompt, getAllAgentTypes } from '@/services/system-prompts';

// Agent configuration interface
export interface AgentConfig {
  name: string;
  description: string;
  model: ClaudeModel;
  maxTokens: number;
  temperature?: number;
}

// Default configurations for each agent type
export const AGENT_CONFIGS: Record<string, AgentConfig> = {
  'new-project': {
    name: 'New Project Agent',
    description: 'Handles initial project setup and file structure generation',
    model: ClaudeModel.SONNET_3_5,
    maxTokens: 4096,
    temperature: 0.3
  },
  'ui': {
    name: 'UI Agent',
    description: 'Handles UI design and user interface creation',
    model: ClaudeModel.SONNET_3,
    maxTokens: 3000,
    temperature: 0.5
  },
  'html-structure': {
    name: 'HTML Structure Agent',
    description: 'Creates HTML structure and page layouts',
    model: ClaudeModel.SONNET_3_5,
    maxTokens: 4096,
    temperature: 0.2
  },
  'composer': {
    name: 'Composer Agent',
    description: 'Composes and assembles content and components',
    model: ClaudeModel.OPUS_3,
    maxTokens: 4096,
    temperature: 0.4
  },
  'tester-validator-reviewer': {
    name: 'Tester/Validator/Reviewer Agent',
    description: 'Tests, validates, and reviews generated content and code',
    model: ClaudeModel.SONNET_3_5,
    maxTokens: 4096,
    temperature: 0.1
  },
  'seo': {
    name: 'SEO Agent',
    description: 'Handles SEO optimization and analysis',
    model: ClaudeModel.SONNET_3_5,
    maxTokens: 3000,
    temperature: 0.3
  },
  'content': {
    name: 'Content Agent',
    description: 'Generates and manages content',
    model: ClaudeModel.SONNET_3,
    maxTokens: 4096,
    temperature: 0.6
  },
  'researcher': {
    name: 'Researcher Agent',
    description: 'Conducts research and gathers information',
    model: ClaudeModel.HAIKU_3_5,
    maxTokens: 3000,
    temperature: 0.4
  },
  'unicalizator': {
    name: 'Unicalizator Agent',
    description: 'Ensures content uniqueness and originality',
    model: ClaudeModel.HAIKU_3_5,
    maxTokens: 2000,
    temperature: 0.2
  },
  'decomposer': {
    name: 'Decomposer Agent',
    description: 'Breaks down complex tasks into smaller components',
    model: ClaudeModel.HAIKU_3_5,
    maxTokens: 2000,
    temperature: 0.3
  },
  'orchestrator': {
    name: 'Orchestrator Agent',
    description: 'Supervises and controls the entire workflow',
    model: ClaudeModel.SONNET_3_5,
    maxTokens: 4096,
    temperature: 0.2
  },
  'summarizer': {
    name: 'Summarizer Agent',
    description: 'Analyzes and summarizes project status',
    model: ClaudeModel.SONNET_3,
    maxTokens: 2000,
    temperature: 0.4
  },
  'file-report': {
    name: 'File Report Agent',
    description: 'Generates file structure reports for agents',
    model: ClaudeModel.HAIKU_3_5,
    maxTokens: 3000,
    temperature: 0.1
  }
};

// Generic agent execution interface
export interface AgentExecutionOptions {
  agentType: string;
  userInput: Record<string, any>;
  customPrompt?: string;
  modelOverride?: ClaudeModel;
  maxTokensOverride?: number;
  temperatureOverride?: number;
}

export interface AgentExecutionResult {
  success: boolean;
  response?: string;
  error?: string;
  filledPrompt?: string;
  metadata: {
    agentType: string;
    model: ClaudeModel;
    maxTokens: number;
    temperature?: number;
    executionTime: number;
    timestamp: string;
  };
}

// Main agent executor function
export async function executeAgent(options: AgentExecutionOptions): Promise<AgentExecutionResult> {
  const startTime = Date.now();
  let filledPrompt = '';
  
  try {
    const { agentType, userInput, customPrompt, modelOverride, maxTokensOverride, temperatureOverride } = options;
    
    // Validate agent type
    if (!getAllAgentTypes().includes(agentType)) {
      throw new Error(`Invalid agent type: ${agentType}`);
    }
    
    // Get agent configuration
    const agentConfig = AGENT_CONFIGS[agentType];
    if (!agentConfig) {
      throw new Error(`No configuration found for agent: ${agentType}`);
    }
    
    // Get the system prompt
    const systemPrompt = customPrompt || getAgentPrompt(agentType);
    if (!systemPrompt || systemPrompt === 'Agent prompt not found') {
      throw new Error(`No system prompt found for agent: ${agentType}`);
    }
    
    // Fill the prompt with user input
    filledPrompt = fillPromptWithUserInput(systemPrompt, userInput);
    
    // Prepare Claude API options
    const claudeOptions: ClaudeAPIOptions = {
      model: modelOverride || agentConfig.model,
      maxTokens: maxTokensOverride || agentConfig.maxTokens,
      temperature: temperatureOverride || agentConfig.temperature
    };
    
    // Execute the agent
    const response = await callClaudeAPI(filledPrompt, claudeOptions);
    
    const executionTime = Date.now() - startTime;
    
    return {
      success: true,
      response,
      filledPrompt,
      metadata: {
        agentType,
        model: claudeOptions.model || ClaudeModel.SONNET_3_5,
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
        model: options.modelOverride || AGENT_CONFIGS[options.agentType]?.model || ClaudeModel.SONNET_3_5,
        maxTokens: options.maxTokensOverride || AGENT_CONFIGS[options.agentType]?.maxTokens || 4096,
        temperature: options.temperatureOverride || AGENT_CONFIGS[options.agentType]?.temperature,
        executionTime,
        timestamp: new Date().toISOString()
      }
    };
  }
}

// Helper function to fill prompts with user input
function fillPromptWithUserInput(prompt: string, userInput: Record<string, any>): string {
  let filledPrompt = prompt;
  
  // Replace common patterns
  const replacements: Record<string, string> = {
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
${selectedPages?.map((page: string) => {
  const sections = pageSections?.[page] || [];
  return `- ${page}: ${sections.join(', ')}`;
}).join('\n') || 'No sections defined'}
Target Country: ${userInput.target_country || 'Unknown'}
Target Language: ${userInput.target_language || 'Unknown'}
Industry: ${userInput.industry || 'Casino/Gaming'}`;
    
    replacements['{structure}'] = structureInfo;
  }
  
  // Apply all replacements
  Object.entries(replacements).forEach(([key, value]) => {
    filledPrompt = filledPrompt.replace(new RegExp(key.replace(/[{}]/g, '\\$&'), 'g'), value);
  });
  
  return filledPrompt;
}

// Helper function to get recommended model for an agent
export function getRecommendedModel(agentType: string): ClaudeModel {
  const agentConfig = AGENT_CONFIGS[agentType];
  return agentConfig?.model || ClaudeModel.SONNET_3_5;
}

// Helper function to get all available models
export function getAvailableModels(): Array<{model: ClaudeModel, config: typeof MODEL_CONFIGS[ClaudeModel]}> {
  return Object.entries(MODEL_CONFIGS).map(([model, config]) => ({
    model: model as ClaudeModel,
    config
  }));
}