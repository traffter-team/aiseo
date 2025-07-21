import { NextRequest, NextResponse } from 'next/server';
import { updateProject } from '@/lib/db/queries';

export async function POST(request: NextRequest) {
  try {
    const { projectId } = await request.json();

    if (!projectId) {
      return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
    }

    console.log(`[TEST] Adding test research data to project: ${projectId}`);

    // Simulate research data
    const testResearchData = {
      bonuses: [
        { name: "Welcome Bonus", description: "100% up to $500", terms: "40x wagering" },
        { name: "Free Spins", description: "50 free spins on signup", terms: "30x wagering" }
      ],
      providers: ["NetEnt", "Microgaming", "Play'n GO", "Evolution Gaming"],
      top_slots: ["Starburst", "Gonzo's Quest", "Book of Dead", "Sweet Bonanza"],
      logo_info: {
        colors: ["#FF6B35", "#1E3A8A"],
        style: "Modern, bold casino branding",
        found: true
      }
    };

    // Update user_input with research data
    const updatedData = {
      user_input: {
        site_type: null,
        structure: null,
        brand_name: "PinUp",
        target_country: "Canada",
        target_language: "English",
        site_type_selected_at: null,
        research_status: "completed",
        research_data: testResearchData
      }
    };

    const result = await updateProject(projectId, updatedData);

    if (!result) {
      return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Test research data added successfully',
      projectId,
      data: testResearchData
    });

  } catch (error) {
    console.error('[TEST] Error adding test research data:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}