// lib/before-after-detection.ts
// Auto-detect before/after photo pairs in Supabase
// Triggered when photo is approved

import { createClient } from '@supabase/supabase-js';

/**
 * Detect and create before/after pairs for a newly approved photo
 * Called after photo.approval_status = 'approved'
 * 
 * Logic:
 * 1. Find other photos in same project
 * 2. Match by location_description (fuzzy match)
 * 3. If different construction_phase → create pair
 * 4. Store in bre_before_after table
 */
export async function detectBeforeAfterPairs(photoId: string) {
  try {
    console.log(`[BEFORE-AFTER] Detecting pairs for photo: ${photoId}`);

    // Initialize Supabase client at runtime
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || '',
      process.env.SUPABASE_SERVICE_ROLE_KEY || ''
    );

    // Step 1: Get the new photo
    const { data: newPhoto, error: fetchError } = await supabase
      .from('bre_photos')
      .select('id, project_id, location_description, construction_phase, date_taken')
      .eq('id', photoId)
      .single();

    if (fetchError || !newPhoto) {
      console.error('[BEFORE-AFTER] Failed to fetch photo:', fetchError);
      return;
    }

    if (!newPhoto.project_id) {
      console.log('[BEFORE-AFTER] Photo has no project_id, skipping pairing');
      return;
    }

    console.log(`[BEFORE-AFTER] Photo: ${newPhoto.location_description} (${newPhoto.construction_phase})`);

    // Step 2: Find similar photos in same project
    const { data: similarPhotos, error: searchError } = await supabase
      .from('bre_photos')
      .select('id, location_description, construction_phase, date_taken')
      .eq('project_id', newPhoto.project_id)
      .neq('id', photoId)
      .eq('approval_status', 'approved')
      .limit(50);

    if (searchError) {
      console.error('[BEFORE-AFTER] Search failed:', searchError);
      return;
    }

    console.log(`[BEFORE-AFTER] Found ${similarPhotos?.length || 0} similar photos`);

    if (!similarPhotos || similarPhotos.length === 0) {
      console.log('[BEFORE-AFTER] No similar photos found');
      return;
    }

    // Step 3: Match by location (fuzzy similarity)
    let matchedPairs = 0;

    for (const similarPhoto of similarPhotos) {
      const isSimilarLocation = fuzzyLocationMatch(
        newPhoto.location_description,
        similarPhoto.location_description
      );

      if (!isSimilarLocation) {
        console.log(
          `[BEFORE-AFTER] Location mismatch: "${newPhoto.location_description}" vs "${similarPhoto.location_description}"`
        );
        continue;
      }

      // Different phases = potential before/after pair
      if (similarPhoto.construction_phase === newPhoto.construction_phase) {
        console.log(
          `[BEFORE-AFTER] Same phase (${newPhoto.construction_phase}), skipping`
        );
        continue;
      }

      console.log(
        `[BEFORE-AFTER] ✓ Match: ${similarPhoto.construction_phase} → ${newPhoto.construction_phase}`
      );

      // Determine before/after order (by date)
      const newPhotoDate = new Date(newPhoto.date_taken);
      const similarPhotoDate = new Date(similarPhoto.date_taken);
      const beforeIsNewer = newPhotoDate > similarPhotoDate;

      const beforePhotoId = beforeIsNewer ? similarPhoto.id : photoId;
      const afterPhotoId = beforeIsNewer ? photoId : similarPhoto.id;

      // Step 4: Create pair in database (ignore if duplicate)
      const { error: pairError } = await supabase
        .from('bre_before_after')
        .insert({
          project_id: newPhoto.project_id,
          location: newPhoto.location_description,
          before_photo_id: beforePhotoId,
          after_photo_id: afterPhotoId,
        })
        .select()
        .single();

      if (pairError) {
        if (pairError.code === '23505') {
          // Unique constraint violation = pair already exists
          console.log(
            '[BEFORE-AFTER] Pair already exists for this location'
          );
        } else {
          console.error('[BEFORE-AFTER] Insert failed:', pairError);
        }
      } else {
        console.log(`[BEFORE-AFTER] ✓ Created pair for ${newPhoto.location_description}`);
        matchedPairs++;
      }
    }

    console.log(`[BEFORE-AFTER] Completed: ${matchedPairs} pair(s) created`);
  } catch (error) {
    console.error('[BEFORE-AFTER] Fatal error:', error);
  }
}

/**
 * Fuzzy match location descriptions
 * Examples:
 * - "Interior kitchen" matches "Kitchen interior"
 * - "Kitchen countertops" matches "Kitchen counter"
 * - "Roof area" does NOT match "Kitchen roof"
 */
function fuzzyLocationMatch(loc1: string, loc2: string): boolean {
  if (!loc1 || !loc2) return false;

  const normalize = (s: string) =>
    s
      .toLowerCase()
      .split(/\s+/)
      .filter((word) => word.length > 3)
      .sort()
      .join(' ');

  const norm1 = normalize(loc1);
  const norm2 = normalize(loc2);

  // Exact match
  if (norm1 === norm2) return true;

  // Partial match (>50% words overlap)
  const words1 = norm1.split(' ');
  const words2 = norm2.split(' ');
  const overlap = words1.filter((w) => words2.includes(w)).length;
  const maxWords = Math.max(words1.length, words2.length);

  return overlap / maxWords >= 0.5;
}
