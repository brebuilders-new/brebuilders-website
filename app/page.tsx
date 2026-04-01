import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'General Contractor Reno NV – Home & Commercial | Blue Reef Builders',
  description:
    'BRE Builders – licensed general contractor serving Reno, Sparks, Lake Tahoe & Northern California since 1989. ADUs, custom homes, repairs, commercial. NV #0085999.',
}

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#050a0f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        color: '#f0ece4',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 600, padding: '0 24px' }}>
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: 11,
            letterSpacing: 3,
            color: '#1ecfc9',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          Coming Soon · Northern Nevada & California
        </div>
        <h1
          style={{
            fontSize: 52,
            fontWeight: 300,
            lineHeight: 1.05,
            marginBottom: 20,
          }}
        >
          Blue Reef Builders
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(240,236,228,0.55)', marginBottom: 32 }}>
          Licensed general contractor serving Reno, Sparks, Lake Tahoe &amp; Northern California
          since 1989. New website launching soon.
        </p>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="tel:7753914517"
            style={{ color: '#1ecfc9', textDecoration: 'none', fontSize: 15 }}
          >
            (775) 391-4517
          </a>
          <a
            href="mailto:brebuilders@gmail.com"
            style={{ color: '#1ecfc9', textDecoration: 'none', fontSize: 15 }}
          >
            brebuilders@gmail.com
          </a>
          <a
            href="https://brebuilders.com"
            style={{ color: 'rgba(240,236,228,0.4)', textDecoration: 'none', fontSize: 15 }}
          >
            Current Site →
          </a>
        </div>
        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.07)',
            fontFamily: 'monospace',
            fontSize: 10,
            color: 'rgba(240,236,228,0.2)',
            letterSpacing: 2,
          }}
        >
          NV LIC #0085999 · PHASE 1 BUILD IN PROGRESS
        </div>
      </div>
    </main>
  )
}
