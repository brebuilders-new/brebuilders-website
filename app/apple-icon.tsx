import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: 180, height: 180, background: '#1a2d5a', borderRadius: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg viewBox="0 0 92 92" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
          <path d="M58 8 L62 12 L68 10 L72 16 L70 22 L74 28 L72 35 L76 40 L72 48 L68 55 L62 60 L58 68 L52 72 L46 70 L40 74 L34 70 L28 65 L24 58 L20 50 L22 42 L18 36 L22 30 L26 24 L24 18 L28 12 L34 10 L38 14 L44 10 L50 8 Z" fill="white" opacity="0.95"/>
          <rect x="32" y="32" width="8" height="20" fill="#1a2d5a"/>
          <rect x="42" y="26" width="8" height="26" fill="#1a2d5a"/>
          <rect x="52" y="36" width="8" height="16" fill="#1a2d5a"/>
          <rect x="34" y="36" width="2" height="3" fill="white" opacity="0.8"/>
          <rect x="38" y="36" width="2" height="3" fill="white" opacity="0.8"/>
          <rect x="44" y="30" width="2" height="3" fill="white" opacity="0.8"/>
          <rect x="48" y="30" width="2" height="3" fill="white" opacity="0.8"/>
          <rect x="44" y="36" width="2" height="3" fill="white" opacity="0.8"/>
          <rect x="48" y="36" width="2" height="3" fill="white" opacity="0.8"/>
          <rect x="44" y="42" width="2" height="3" fill="white" opacity="0.8"/>
          <rect x="48" y="42" width="2" height="3" fill="white" opacity="0.8"/>
        </svg>
      </div>
    ),
    { ...size }
  )
}
