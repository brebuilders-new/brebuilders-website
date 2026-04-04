import { NextRequest, NextResponse } from 'next/server'

const SPAM_PATHS = [
  '/step-into-the-spotlight-win-big-with-nine-casino-today-4226',
  '/step-into-the-spotlight-win-big-with-nine-casino-today-4226/',
  '/vavada-casino',
  '/vavada-casino/',
]

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  if (SPAM_PATHS.includes(path)) {
    return new NextResponse(null, { status: 410 })
  }
}

export const config = {
  matcher: [
    '/step-into-the-spotlight-win-big-with-nine-casino-today-4226',
    '/step-into-the-spotlight-win-big-with-nine-casino-today-4226/',
    '/vavada-casino',
    '/vavada-casino/',
  ],
}
