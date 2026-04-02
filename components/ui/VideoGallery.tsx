'use client'

import { useState } from 'react'
import { VIDEOS, type BREVideo } from '@/lib/videos'

interface VideoGalleryProps {
  filter?: string
  featured?: boolean
  maxItems?: number
  className?: string
}

function VideoCard({ video, onPlay }: { video: BREVideo; onPlay: (v: BREVideo) => void }) {
  const thumb = video.thumbnail || `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`
  return (
    <div
      className="group relative overflow-hidden rounded-xl cursor-pointer"
      style={{ aspectRatio: '16/9' }}
      onClick={() => onPlay(video)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={thumb} alt={video.title + ' — BRE Builders'} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
      <div className="absolute inset-0 bg-void/40 group-hover:bg-void/20 transition-colors duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 rounded-full bg-teal/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
          <svg className="w-6 h-6 text-void ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-void/90 to-transparent">
        <div className="font-mono text-[9px] tracking-[2px] uppercase text-teal mb-1">{video.category} · {video.location}</div>
        <h3 className="font-display text-[15px] text-white leading-snug">{video.title.split(' — ')[0]}</h3>
      </div>
    </div>
  )
}

function VideoModal({ video, onClose }: { video: BREVideo; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(8,6,4,0.95)' }} onClick={onClose}>
      <div className="w-full max-w-4xl" onClick={e => e.stopPropagation()}>
        <div className="relative" style={{ aspectRatio: '16/9' }}>
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            className="absolute inset-0 w-full h-full rounded-xl"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-[18px] text-cream mb-1">{video.title.split(' — ')[0]}</h2>
            <p className="text-[13px] text-cream/60 leading-relaxed">{video.description}</p>
          </div>
          <button onClick={onClose} className="flex-shrink-0 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-cream/60 hover:text-cream transition-colors">✕</button>
        </div>
      </div>
    </div>
  )
}

export default function VideoGallery({ filter, featured, maxItems, className = '' }: VideoGalleryProps) {
  const [playing, setPlaying] = useState<BREVideo | null>(null)
  let videos = VIDEOS
  if (filter) videos = videos.filter(v => v.category.toLowerCase().includes(filter.toLowerCase()))
  if (featured) videos = videos.filter(v => v.featured)
  if (maxItems) videos = videos.slice(0, maxItems)
  if (!videos.length) return null
  return (
    <>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {videos.map(v => <VideoCard key={v.id} video={v} onPlay={setPlaying} />)}
      </div>
      {playing && <VideoModal video={playing} onClose={() => setPlaying(null)} />}
    </>
  )
}
