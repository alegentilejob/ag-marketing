import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  
  // If user already selected a language, respect it
  if (cookieLocale) {
    return NextResponse.next();
  }

  // Get country from Vercel header, fallback to 'IT' locally
  const country = request.headers.get('x-vercel-ip-country') || 'IT';
  
  // Determine default language: Italian only if in Italy, otherwise English
  const defaultLocale = country === 'IT' ? 'it' : 'en';

  const response = NextResponse.next();
  // Set cookie so future requests have it
  response.cookies.set('NEXT_LOCALE', defaultLocale, { path: '/', maxAge: 60 * 60 * 24 * 365 });
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - media (public files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|media).*)',
  ],
};
