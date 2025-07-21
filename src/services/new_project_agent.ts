import { executeAgent, AgentExecutionResult } from '@/lib/agent-executor';
import { ClaudeModel } from '@/lib/claude-api';

export interface NewProjectUserInput {
  brand_name: string;
  target_country: string;
  target_language: string;
  site_type: string;
  site_type_selected_at?: string;
  structure?: {
    selectedPages: string[];
    pageSections: Record<string, string[]>;
    totalPages: number;
    structureCompletedAt: string;
  };
}

// Main function to run the new project agent
export async function runNewProjectAgent(
  userInput: NewProjectUserInput,
  modelOverride?: ClaudeModel
): Promise<AgentExecutionResult> {
  return await executeAgent({
    agentType: 'new-project',
    userInput,
    modelOverride
  });
}

// Simple function that returns just the response string (for backward compatibility)
export async function runNewProjectAgentSimple(
  userInput: NewProjectUserInput,
  modelOverride?: ClaudeModel
): Promise<string> {
  const result = await runNewProjectAgent(userInput, modelOverride);
  
  if (!result.success) {
    throw new Error(result.error || 'Agent execution failed');
  }
  
  return result.response || '';
}

// For debugging: get the filled prompt
export async function getNewProjectAgentPrompt(userInput: NewProjectUserInput): Promise<string> {
  // This is a simplified version for debugging - in production you'd use the agent executor
  const { getAgentPrompt } = await import('./system-prompts');
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
${selectedPages.map(page => {
  const sections = pageSections[page] || [];
  return `- ${page}: ${sections.join(', ')}`;
}).join('\n')}
Target Country: ${userInput.target_country}
Target Language: ${userInput.target_language}
Industry: Casino/Gaming`;
    
    filledPrompt = filledPrompt.replace('{structure}', structureInfo);
  }
  
  filledPrompt = filledPrompt
    .replace('{project_name}', userInput.brand_name)
    .replace('{site_type}', userInput.site_type);
  
  return filledPrompt;
} 