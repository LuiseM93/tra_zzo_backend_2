import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Skip middleware for Stripe webhook
  const path = request.nextUrl.pathname
  if (path.startsWith('/api/webhook')) {
    return NextResponse.next()
  }
  
  // Add any other middleware logic here
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}