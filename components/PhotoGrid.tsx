// components/PhotoGrid.tsx
// Fetches and displays approved photos from Supabase
// Real-time subscription for new photos
// Styled to match BRE Builders gallery aesthetic

'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Photo {
  id: string;
  blob_url: string;
  title: string;
  description: string;
  construction_phase: string;
  location_description: string;
  date_taken: string;
}

export default function PhotoGrid() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPhotos();

    // Subscribe to new approved photos
    const channel = supabase
      .channel('public:bre_photos')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'bre_photos',
          filter: 'published_to_website=eq.true AND approval_status=eq.approved',
        },
        (payload) => {
          // New photo approved - add to top of grid
          const newPhoto = payload.new as Photo;
          setPhotos((prev) => [newPhoto, ...prev]);
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, []);

  async function fetchPhotos() {
    try {
      setLoading(true);
      const { data, error: queryError } = await supabase
        .from('bre_photos')
        .select('id, blob_url, title, description, construction_phase, location_description, date_taken')
        .eq('published_to_website', true)
        .eq('approval_status', 'approved')
        .order('date_taken', { ascending: false })
        .limit(100);

      if (queryError) throw queryError;

      setPhotos(data || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching photos:', err);
      setError('Failed to load photos.');
    } finally {
      setLoading(false);
    }
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="font-display text-[20px] text-cream/30 mb-3">{error}</p>
        <button
          onClick={fetchPhotos}
          className="font-mono text-[12px] text-teal tracking-wider"
        >
          Try Again →
        </button>
      </div>
    );
  }

  if (photos.length === 0 && !loading) {
    return (
      <div className="text-center py-12">
        <p className="font-display text-[20px] text-cream/30">No photos yet.</p>
        <p className="font-mono text-[11px] text-cream/40 tracking-wider mt-2">Check back as projects progress.</p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

function PhotoCard({ photo }: { photo: Photo }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <button
      className="group focus:outline-none text-left"
      onClick={() => {
        // Future: open lightbox with full res image
      }}
    >
      {/* Image container */}
      <div className="relative overflow-hidden rounded-xl bg-void/20 mb-3 group-hover:opacity-90 transition-opacity">
        <div style={{ aspectRatio: '16/9' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.blob_url}
            alt={photo.title}
            loading="lazy"
            className={`w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
        </div>
      </div>

      {/* Metadata */}
      <div className="space-y-2">
        <h3 className="font-display text-[13px] leading-tight text-cream line-clamp-2">
          {photo.title}
        </h3>
        <p className="font-mono text-[10px] tracking-wider text-cream/50 line-clamp-1">
          {photo.location_description} · {photo.construction_phase}
        </p>
        <p className="font-mono text-[9px] tracking-wider text-cream/30">
          {photo.description}
        </p>
      </div>
    </button>
  );
}

