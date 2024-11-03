import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // NOTE: 임시: 로그인 해야 마이페이지 갈수있음. 
  if (!request.cookies.get("session-id")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const res = NextResponse.next();
  // add the CORS headers to the response
  res.headers.append("Access-Control-Allow-Credentials", "true");
  res.headers.append("Access-Control-Allow-Origin", "*"); // replace this your actual origin
  res.headers.append(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT"
  );
  res.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  return res;
}

export const config = {
  matcher: ["/api/youtube", "/mypage/:path*"],
};
