// Auto-Continue LLM Utility for Claude & ChatGPT
// This module provides a generic function to iteratively call an LLM (Claude, ChatGPT, etc.)
// until a complete result is obtained, using a continuation marker (e.g., 'CONTINUE').
//
// Usage: Pass in your LLM call function, initial prompt, a parser, and options.
//
// Example:
//   const { allResults } = await autoContinueLLM({ ... });

export interface AutoContinueOptions<T> {
  // Function to call the LLM. Receives a prompt, returns a string response.
  callLLM: (prompt: string) => Promise<string>;
  // Initial prompt to send.
  initialPrompt: string;
  // Function to parse the LLM response. Should return { results, needsContinue }.
  parseResponse: (response: string) => { results: T[]; needsContinue: boolean };
  // Prompt to use for continuation (default: 'Continue from where you left off. Do not repeat previous items.')
  continuePrompt?: string;
  // Maximum number of loops to prevent infinite cycles (default: 5)
  maxLoops?: number;
  // Optional: Called after each chunk is received (for progress updates, etc)
  onChunk?: (chunk: T[], loop: number) => void;
}

export async function autoContinueLLM<T>({
  callLLM,
  initialPrompt,
  parseResponse,
  continuePrompt = 'Continue from where you left off. Do not repeat previous items.',
  maxLoops = 5,
  onChunk,
}: AutoContinueOptions<T>): Promise<{ allResults: T[]; loops: number }> {
  let allResults: T[] = [];
  let prompt = initialPrompt;
  let needsContinue = true;
  let loops = 0;

  while (needsContinue && loops < maxLoops) {
    const response = await callLLM(prompt);
    const { results, needsContinue: shouldContinue } = parseResponse(response);
    allResults = allResults.concat(results);
    if (onChunk) onChunk(results, loops);
    if (shouldContinue) {
      prompt = continuePrompt;
      loops++;
    } else {
      needsContinue = false;
    }
  }

  return { allResults, loops };
}

// Example parser for a list response with 'CONTINUE' marker
export function parseListWithContinueMarker(response: string): { results: string[]; needsContinue: boolean } {
  // Extract lines, remove empty, trim
  const lines = response
    .split('\n')
    .map(l => l.trim())
    .filter(l => l && l.toUpperCase() !== 'CONTINUE');
  // Check for CONTINUE marker
  const needsContinue = /CONTINUE\s*$/i.test(response);
  return { results: lines, needsContinue };
} 