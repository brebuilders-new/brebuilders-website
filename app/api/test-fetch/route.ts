// Test route to check if Vercel can fetch from Supabase storage
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { url } = await req.json()
  try {
    const resp = await fetch(url, { signal: AbortSignal.timeout(10000) })
    const ct = resp.headers.get('content-type')
    const data = await resp.arrayBuffer()
    return NextResponse.json({ 
      ok: resp.ok, status: resp.status, 
      contentType: ct, size: data.byteLength 
    })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
