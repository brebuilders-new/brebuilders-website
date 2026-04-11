// components/BeforeAfterSlider.tsx
// Interactive before/after slider with image comparison
// Client-side only (minimal JS)

'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
  before: {
    url: string;
    title: string;
  };
  after: {
    url: string;
    title: string;
  };
  location: string;
}

export default function BeforeAfterSlider({
  before,
  after,
  location,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle mouse/touch events
  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
      
      if (newPosition >= 0 && newPosition <= 100) {
        setPosition(newPosition);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const newPosition = ((touch.clientX - rect.left) / rect.width) * 100;
      
      if (newPosition >= 0 && newPosition <= 100) {
        setPosition(newPosition);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div className="w-full">
      {/* Slider Container */}
      <div
        ref={containerRef}
        className="relative w-full bg-stone-200 rounded-lg overflow-hidden cursor-col-resize select-none"
        style={{ paddingBottom: '66.67%' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Before Image (Full background) */}
        <div className="absolute inset-0">
          <Image
            src={before.url}
            alt={before.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
            quality={85}
            priority={false}
          />
        </div>

        {/* After Image (Overlay, clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <div className="relative w-screen h-full">
            <Image
              src={after.url}
              alt={after.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
              quality={85}
              priority={false}
            />
          </div>
        </div>

        {/* Divider Line & Handle */}
        <div
          className="absolute top-0 h-full w-1 bg-white shadow-lg"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          {/* Drag Handle */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '60px',
              height: '60px',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '50%',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
          >
            {/* Arrow Icons */}
            <div className="absolute inset-0 flex items-center justify-center gap-2">
              <span className="text-stone-700 font-bold">‹</span>
              <span className="text-stone-700 font-bold">›</span>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/40 text-white px-3 py-1 rounded text-sm font-bold">
          {before.title}
        </div>
        <div className="absolute top-4 right-4 bg-black/40 text-white px-3 py-1 rounded text-sm font-bold">
          {after.title}
        </div>
      </div>

      {/* Location Label Below */}
      <p className="mt-3 text-center text-sm text-stone-600 font-medium">
        {location}
      </p>

      {/* Mobile Instructions */}
      <p className="mt-2 text-center text-xs text-stone-500 md:hidden">
        Drag to compare
      </p>
    </div>
  );
}
