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
          background: '#080604',
          borderRadius: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Gold left accent bar */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 6,
          bottom: 6,
          width: 2,
          background: '#d4a032',
          borderRadius: 2,
        }} />
        <span
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 19,
            fontWeight: 400,
            color: '#f8f0e0',
            fontStyle: 'italic',
            letterSpacing: '-0.5px',
            marginLeft: 2,
          }}
        >
          B
        </span>
      </div>
    ),
    { ...size }
  )
}
