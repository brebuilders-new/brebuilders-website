'use client'

import MobileCarousel from '@/components/ui/MobileCarousel'

interface Testimonial {
  name: string
  loc?: string
  location?: string
  text: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  label?: string
  heading?: string
  headingItalic?: string
  className?: string
}

export default function TestimonialsSection({
  testimonials,
  label = 'Client Reviews',
  heading,
  headingItalic,
  className = '',
}: TestimonialsSectionProps) {
  return (
    <div className={className}>
      {(heading || headingItalic) && (
        <h2 className="font-display text-[clamp(28px,4vw,52px)] font-light leading-[1.05] tracking-tight mb-10">
          {heading}{headingItalic && <><br /><span className="italic text-teal">{headingItalic}</span></>}
        </h2>
      )}
      <MobileCarousel
        items={testimonials}
        desktopClassName="md:grid md:grid-cols-3 md:gap-5"
        itemWidth="82vw"
        renderItem={(t) => (
          <div className="bg-panel border border-white/[0.055] rounded-xl p-7 hover:border-teal/15 transition-colors relative h-full">
            <div className="font-display text-[56px] leading-none text-teal/35 absolute top-4 left-5 select-none">&ldquo;</div>
            <div className="flex gap-0.5 mb-3 pt-8">
              {[1,2,3,4,5].map(s => <span key={s} className="text-gold text-[14px]">&#9733;</span>)}
            </div>
            <p className="font-display text-[15px] italic text-cream/85 leading-relaxed mb-5">{t.text}</p>
            <div className="font-semibold text-[13px] text-cream">{t.name}</div>
            <div className="font-mono text-[10px] text-cream/60 tracking-wider mt-0.5">{t.loc || t.location}</div>
          </div>
        )}
      />
    </div>
  )
}
