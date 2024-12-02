import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { updateSession } from "./util/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // if (pathname.startsWith("/mypage") && !request.cookies.get("session-id")) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  const res = NextResponse.next();

  // CORS 헤더 추가는 모든 API 요청에 적용
  if (pathname.startsWith("/api/")) {
    res.headers.append("Access-Control-Allow-Credentials", "true");
    res.headers.append("Access-Control-Allow-Origin", "*");
    res.headers.append(
      "Access-Control-Allow-Methods",
      "GET,DELETE,PATCH,POST,PUT"
    );
    res.headers.append(
      "Access-Control-Allow-Headers",
      "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );
  }

  return await updateSession(request);
}

export const config = {
  matcher: ["/api/:path*", "/mypage/:path*"],
};
