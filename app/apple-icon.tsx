import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  const imgData = fs.readFileSync(path.join(process.cwd(), 'public/favicon-180.png'))
  const base64 = imgData.toString('base64')
  return new ImageResponse(
    (
      <img
        src={`data:image/png;base64,${base64}`}
        width={180}
        height={180}
        style={{ objectFit: 'contain' }}
        alt="BRE Builders"
      />
    ),
    { ...size }
  )
}
