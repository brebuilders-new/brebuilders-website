import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Blue Reef Builders'
  const sub = searchParams.get('sub') || 'Licensed General Contractor · Reno, NV & California'
  const badge = searchParams.get('badge') || ''

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#050a0f',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(30,207,201,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,207,201,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Teal glow orb */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(30,207,201,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Content area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '64px 80px',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Badge if present */}
          {badge && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  background: 'rgba(30,207,201,0.1)',
                  border: '1px solid rgba(30,207,201,0.3)',
                  borderRadius: 6,
                  padding: '4px 12px',
                  fontSize: 13,
                  color: '#1ecfc9',
                  fontFamily: 'monospace',
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                }}
              >
                {badge}
              </div>
            </div>
          )}

          {/* Line accent */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
            <div style={{ width: 40, height: 1, background: '#1ecfc9' }} />
            <span
              style={{
                fontSize: 13,
                color: '#1ecfc9',
                fontFamily: 'monospace',
                letterSpacing: 3,
                textTransform: 'uppercase',
              }}
            >
              Blue Reef Builders · Est. 1989
            </span>
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: title.length > 40 ? 52 : 68,
              fontWeight: 300,
              color: '#f0ece4',
              lineHeight: 1.0,
              fontFamily: 'Georgia, serif',
              marginBottom: 20,
              maxWidth: 900,
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 20,
              color: 'rgba(240,236,228,0.45)',
              fontFamily: 'monospace',
              letterSpacing: 0.5,
              marginBottom: 40,
            }}
          >
            {sub}
          </div>

          {/* Footer bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              paddingTop: 24,
            }}
          >
            <div style={{ display: 'flex', gap: 32 }}>
              <span style={{ fontSize: 14, color: 'rgba(240,236,228,0.3)', fontFamily: 'monospace' }}>
                NV Lic #0085999
              </span>
              <span style={{ fontSize: 14, color: 'rgba(240,236,228,0.3)', fontFamily: 'monospace' }}>
                CA Lic #1093798
              </span>
              <span style={{ fontSize: 14, color: 'rgba(240,236,228,0.3)', fontFamily: 'monospace' }}>
                Free Estimates
              </span>
            </div>
            <span
              style={{
                fontSize: 14,
                color: 'rgba(30,207,201,0.6)',
                fontFamily: 'monospace',
                letterSpacing: 1,
              }}
            >
              brebuilders.com
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
