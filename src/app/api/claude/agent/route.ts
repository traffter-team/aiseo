import { NextRequest, NextResponse } from 'next/server';
import { executeAgent, AGENT_CONFIGS, getAvailableModels } from '@/lib/agent-executor';
import { ClaudeModel } from '@/lib/claude-api';
import { getAllAgentTypes } from '@/services/system-prompts';

// Main agent execution endpoint
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      agentType, 
      userInput, 
      customPrompt,
      modelOverride,
      maxTokensOverride,
      temperatureOverride 
    } = body;

    // Validate required fields
    if (!agentType) {
      return NextResponse.json(
        { error: 'agentType is required' },
        { status: 400 }
      );
    }

    if (!userInput) {
      return NextResponse.json(
        { error: 'userInput is required' },
        { status: 400 }
      );
    }

    // Validate agent type
    if (!getAllAgentTypes().includes(agentType)) {
      return NextResponse.json(
        { error: `Invalid agent type: ${agentType}. Valid types: ${getAllAgentTypes().join(', ')}` },
        { status: 400 }
      );
    }

    // Special validation for new-project agent
    if (agentType === 'new-project') {
      if (!userInput.brand_name || !userInput.target_country || !userInput.target_language || !userInput.site_type) {
        return NextResponse.json(
          { error: 'Missing required fields for new-project: brand_name, target_country, target_language, site_type' },
          { status: 400 }
        );
      }
    }

    // Execute the agent
    const result = await executeAgent({
      agentType,
      userInput,
      customPrompt,
      modelOverride,
      maxTokensOverride,
      temperatureOverride
    });

    return NextResponse.json(result);
    
  } catch (error) {
    console.error('Error in agent execution:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}

// Get available agents and models
export async function GET() {
  try {
    const agentTypes = getAllAgentTypes();
    const agentConfigs = AGENT_CONFIGS;
    const availableModels = getAvailableModels();

    return NextResponse.json({
      success: true,
      data: {
        agentTypes,
        agentConfigs,
        availableModels
      },
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error getting agent information:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}