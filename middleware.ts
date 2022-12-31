import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
const PUBLIC_FILE = /\.(.*)$/;

const verifyToken = async (token: string) => {
  const { payload } = await jwtVerify(
    token,
    new TextEncoder().encode(process.env.JWR_SECRETE)
  );

  if (payload) {
    return true;
  } else {
    return false;
  }
};

const isAuthenticated = async (jwt: string) => {
  if (!jwt) {
    return false;
  }
  await verifyToken(jwt);
  return true;
};

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const unAuthenticatedRoutes =
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.startsWith('/login') ||
    pathname.startsWith('/about') ||
    pathname === '/' ||
    pathname.startsWith('/register') ||
    PUBLIC_FILE.test(pathname);

  const authenticatedRoutes = pathname.startsWith('/dashboard');

  const jwt = req.cookies.get(process.env.COOKIES_NAME)?.value as string;
  const authenticatedUser = await isAuthenticated(jwt);

  console.log(req.method, req.url, authenticatedUser);

  if (authenticatedUser) {
    if (unAuthenticatedRoutes) {
      req.nextUrl.pathname = '/dashboard';
      return NextResponse.redirect(req.nextUrl);
    }
    return NextResponse.next();
  } else {
    if (unAuthenticatedRoutes) {
      return NextResponse.next();
    } else {
      req.nextUrl.pathname = '/login';
      return NextResponse.redirect(req.nextUrl);
    }
  }
}

// https://stackoverflow.com/questions/73229148/uncaught-syntaxerror-expected-expression-got-while-using-next-js-middlewar
export const config = {
  matcher: ['/', '/dashboard', '/about', '/login', '/register'],
};
