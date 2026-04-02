import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#050a0f',
          border: '1.5px solid #1ecfc9',
          borderRadius: 7,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 18,
            fontWeight: 400,
            color: '#1ecfc9',
            letterSpacing: '-0.5px',
            fontStyle: 'italic',
          }}
        >
          B
        </span>
      </div>
    ),
    { ...size }
  )
}
