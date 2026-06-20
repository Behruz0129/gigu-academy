import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isValidLocale, locales } from "@/lib/i18n/translations";

const LOCALE_PREFIX_PATTERN = new RegExp(`^/(${locales.join("|")})(/|$)`);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (LOCALE_PREFIX_PATTERN.test(pathname)) {
    const locale = pathname.split("/")[1];
    if (isValidLocale(locale)) {
      return NextResponse.next();
    }
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  return NextResponse.redirect(
    new URL(`/${defaultLocale}${pathname}`, request.url),
  );
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
