import { NextRequest, NextResponse } from 'next/server'
import { runImageAnalysis } from '@/lib/analyzeImages'

export async function POST(req: NextRequest) {
  try {
    const { leadId, images } = await req.json()

    if (!leadId || !images?.length) {
      return NextResponse.json({ error: 'Missing leadId or images' }, { status: 400 })
    }

    const result = await runImageAnalysis(leadId, images)
    return NextResponse.json({ success: true, ...result })

  } catch (err) {
    console.error('Image analysis error:', err)
    return NextResponse.json({ error: 'Analysis failed' }, { status: 500 })
  }
}
