import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware is ready for Clerk integration
// Uncomment and configure when Clerk is set up

export function middleware(request: NextRequest) {
  // For now, allow all requests
  // When Clerk is configured, replace with:
  // import { authMiddleware } from "@clerk/nextjs";
  // export default authMiddleware({ publicRoutes: ["/", "/sign-in", "/sign-up", "/docs"] });

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
