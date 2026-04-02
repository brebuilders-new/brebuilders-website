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
          background: '#050a0f',
          border: '6px solid #1ecfc9',
          borderRadius: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 4,
        }}
      >
        <span
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 90,
            fontWeight: 400,
            color: '#1ecfc9',
            fontStyle: 'italic',
            lineHeight: 1,
          }}
        >
          B
        </span>
        <span
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 16,
            color: 'rgba(240,236,228,0.5)',
            letterSpacing: 4,
          }}
        >
          BRE
        </span>
      </div>
    ),
    { ...size }
  )
}
