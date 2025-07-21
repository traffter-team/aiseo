import { NextRequest, NextResponse } from 'next/server';
import { callClaudeAPI } from '@/lib/claude-api';

export async function GET() {
  try {
    // Simple test endpoint
    const testPrompt = "Hello, this is a test message. Please respond with a short greeting.";
    const response = await callClaudeAPI(testPrompt);
    
    return NextResponse.json({
      success: true,
      message: response,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error in Claude API GET:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt } = body;

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const response = await callClaudeAPI(prompt);
    
    return NextResponse.json({
      success: true,
      message: response,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error in Claude API POST:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      },
      { status: 500 }
    );
  }
}