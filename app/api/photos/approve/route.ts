// app/api/photos/approve/route.ts
// Approve a photo and trigger before/after detection

import { createClient } from '@supabase/supabase-js';
import { detectBeforeAfterPairs } from '@/lib/before-after-detection';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Initialize Supabase client at runtime
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    );

    // Verify auth (check session or API key)
    const auth = request.headers.get('authorization');
    if (!auth || !auth.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { photoId } = await request.json();

    if (!photoId) {
      return NextResponse.json(
        { error: 'photoId required' },
        { status: 400 }
      );
    }

    // Update photo status
    const { data: updatedPhoto, error: updateError } = await supabase
      .from('bre_photos')
      .update({
        approval_status: 'approved',
        published_to_website: true,
        approved_at: new Date().toISOString(),
      })
      .eq('id', photoId)
      .select()
      .single();

    if (updateError || !updatedPhoto) {
      console.error('[PHOTO-APPROVE] Update failed:', updateError);
      return NextResponse.json(
        { error: 'Failed to approve photo' },
        { status: 500 }
      );
    }

    // Trigger before/after detection (async, don't wait)
    detectBeforeAfterPairs(photoId).catch((err) => {
      console.error('[PHOTO-APPROVE] Detection failed:', err);
    });

    return NextResponse.json({
      success: true,
      photo: updatedPhoto,
      message: 'Photo approved and published',
    });
  } catch (error) {
    console.error('[PHOTO-APPROVE] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
