// components/PhotoGrid.tsx
// Fetches and displays approved photos from Supabase
// Real-time subscription for new photos
// Lazy loads images to prevent CLS

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
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
      setError('Failed to load photos. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-stone-200 rounded-lg aspect-video animate-pulse" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-800">{error}</p>
        <button
          onClick={fetchPhotos}
          className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="bg-stone-100 border border-stone-300 rounded-lg p-12 text-center">
        <p className="text-stone-600 text-lg">No photos yet. Check back as projects progress!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

interface PhotoCardProps {
  photo: Photo;
}

function PhotoCard({ photo }: PhotoCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition group">
      {/* Fixed aspect ratio prevents CLS */}
      <div className="relative w-full bg-stone-200" style={{ paddingBottom: '66.67%' }}>
        <Image
          src={photo.blob_url}
          alt={photo.title}
          fill
          className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadingComplete={() => setLoaded(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
          priority={false}
        />
      </div>

      {/* Photo metadata - fixed height prevents CLS */}
      <div className="p-4 h-32 flex flex-col justify-between">
        <div>
          <h3 className="font-bold text-sm text-stone-900 line-clamp-2 mb-1">
            {photo.title}
          </h3>
          <p className="text-xs text-stone-600 line-clamp-2 mb-2">
            {photo.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">
            {photo.construction_phase}
          </span>
          <span className="text-xs bg-stone-100 text-stone-700 px-2 py-1 rounded">
            {photo.location_description}
          </span>
        </div>
      </div>
    </div>
  );
}
