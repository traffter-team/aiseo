// Available Claude models with their capabilities
export enum ClaudeModel {
  SONNET_3_5 = 'claude-3-5-sonnet-20241022',
  SONNET_3 = 'claude-3-sonnet-20240229',
  HAIKU_3_5 = 'claude-3-5-haiku-20241022',
  OPUS_3 = 'claude-3-opus-20240229'
}

// Model configurations for different use cases
export const MODEL_CONFIGS = {
  [ClaudeModel.SONNET_3_5]: {
    name: 'Claude 3.5 Sonnet',
    description: 'Best for complex reasoning, coding, and analysis',
    maxTokens: 4096,
    recommended: ['new-project', 'html-structure', 'seo', 'tester-validator-reviewer']
  },
  [ClaudeModel.SONNET_3]: {
    name: 'Claude 3 Sonnet',
    description: 'Good balance of performance and cost',
    maxTokens: 4096,
    recommended: ['ui', 'composer', 'content']
  },
  [ClaudeModel.HAIKU_3_5]: {
    name: 'Claude 3.5 Haiku',
    description: 'Fastest and most cost-effective',
    maxTokens: 4096,
    recommended: ['researcher', 'unicalizator', 'decomposer']
  },
  [ClaudeModel.OPUS_3]: {
    name: 'Claude 3 Opus',
    description: 'Most capable for complex tasks',
    maxTokens: 4096,
    recommended: ['composer', 'tester-validator-reviewer']
  }
};

interface ClaudeMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ClaudeRequest {
  model: string;
  max_tokens: number;
  messages: ClaudeMessage[];
}

interface ClaudeResponse {
  content: Array<{
    type: 'text';
    text: string;
  }>;
  usage: {
    input_tokens: number;
    output_tokens: number;
  };
}

export interface ClaudeAPIOptions {
  model?: ClaudeModel;
  maxTokens?: number;
  temperature?: number;
}

export async function callClaudeAPI(
  prompt: string, 
  options: ClaudeAPIOptions = {}
): Promise<string> {
  const apiKey = process.env.CLAUDE_API_KEY;
  
  if (!apiKey) {
    throw new Error('CLAUDE_API_KEY environment variable is not set');
  }

  const {
    model = ClaudeModel.SONNET_3_5,
    maxTokens = 4096
  } = options;

  const requestBody: ClaudeRequest = {
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
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
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
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }
        }
        
        throw new Error(`Claude API error: ${response.status} - ${errorText}`);
      }
      
      // Success - process response
      const data: ClaudeResponse = await response.json();
      
      // Extract the text content from the response
      const textContent = data.content.find(content => content.type === 'text');
      
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

// Utility function to test the API connection
export async function testClaudeConnection(): Promise<boolean> {
  try {
    const response = await callClaudeAPI('Hello, this is a test message.');
    return response.length > 0;
  } catch (error) {
    console.error('Claude API connection test failed:', error);
    return false;
  }
} 