import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: '#080604',
          borderRadius: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Gold left accent bar */}
        <div style={{
          position: 'absolute',
          left: 22,
          top: 36,
          bottom: 36,
          width: 4,
          background: '#d4a032',
          borderRadius: 2,
        }} />
        {/* BRE monogram */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingLeft: 12,
        }}>
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 86,
              fontWeight: 400,
              color: '#f8f0e0',
              fontStyle: 'italic',
              lineHeight: 0.92,
              letterSpacing: '-2px',
            }}
          >
            B
          </span>
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 15,
              color: '#d4a032',
              letterSpacing: 5,
              marginTop: 6,
              fontWeight: 400,
            }}
          >
            BRE
          </span>
          <span
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 9,
              color: 'rgba(248,240,224,0.35)',
              letterSpacing: 2.5,
              marginTop: 2,
            }}
          >
            BUILDERS
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
