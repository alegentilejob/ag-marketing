import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Static mapping: EN slug -> IT internal path
const EN_TO_IT_MAP: Record<string, string> = {
  'about-me': '/chi-sono',
  'experience': '/esperienze',
  'projects': '/progetti',
  'skills': '/skills',
  'blog': '/blog',
  'thank-you': '/grazie',
  'cv': '/cv',
  'portfolio-pdf': '/portfolio-pdf',
  'profile': '/profile'
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-next-path', pathname);

  // 1. Handle /en prefix
  if (pathname.startsWith('/en')) {
    const enPath = pathname.replace(/^\/en/, '') || '/';
    
    // Check if it's a static mapped page
    const cleanEnPath = enPath.startsWith('/') ? enPath.slice(1) : enPath;
    
    // Handle home /en/
    if (cleanEnPath === '') {
      const response = NextResponse.rewrite(new URL('/', request.url), {
          request: { headers: requestHeaders }
      });
      response.headers.set('x-next-lang', 'en');
      return response;
    }

    // Normalize cleanEnPath to remove trailing slashes for lookup
    const lookupPath = cleanEnPath.endsWith('/') ? cleanEnPath.slice(0, -1) : cleanEnPath;

    // Handle static mapping (e.g. /en/about-me -> /chi-sono)
    const itPath = EN_TO_IT_MAP[lookupPath];
    if (itPath) {
        // Ensure we preserve the trailing slash if it was there in the original rewrite target
        const response = NextResponse.rewrite(new URL(itPath, request.url), {
            request: { headers: requestHeaders }
        });
        response.headers.set('x-next-lang', 'en');
        return response;
    }

    // Handle dynamic routes with prefixes: experience/, projects/, blog/
    const dynamicPrefixes = ['projects/', 'blog/', 'experience/'];
    const matchedPrefix = dynamicPrefixes.find(p => cleanEnPath.startsWith(p));
    
    if (matchedPrefix) {
        let internalPath = cleanEnPath;
        if (matchedPrefix === 'projects/') internalPath = cleanEnPath.replace('projects/', '/progetti/');
        else if (matchedPrefix === 'blog/') internalPath = cleanEnPath.replace('blog/', '/blog/');
        else if (matchedPrefix === 'experience/') internalPath = cleanEnPath.replace('experience/', '/esperienze/');
            
        const response = NextResponse.rewrite(new URL(internalPath, request.url), {
            request: { headers: requestHeaders }
        });
        response.headers.set('x-next-lang', 'en');
        return response;
    }
    
    // Default fallback for other /en/ paths
    const response = NextResponse.rewrite(new URL(enPath, request.url), {
        request: { headers: requestHeaders }
    });
    response.headers.set('x-next-lang', 'en');
    return response;
  }

  // 2. Handle root paths (IT by default)
  const response = NextResponse.next({
      request: { headers: requestHeaders }
  });
  response.headers.set('x-next-lang', 'it');
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
     * - media (media folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|media).*)',
  ],
};
