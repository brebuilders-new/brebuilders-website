import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  const imgData = fs.readFileSync(path.join(process.cwd(), 'public/favicon-32.png'))
  const base64 = imgData.toString('base64')
  return new ImageResponse(
    (
      <img
        src={`data:image/png;base64,${base64}`}
        width={32}
        height={32}
        style={{ objectFit: 'contain' }}
        alt="BRE Builders"
      />
    ),
    { ...size }
  )
}
