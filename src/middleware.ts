// 미들웨어는 각 페이지를 접근하기 전에 실행되는 코드이다. (문지기 역할?)
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어 - 경로를 리다이렉팅함!');
    return NextResponse.redirect(new URL('/products', request.url));
  }
}

// 미들웨어 실행 범위를 제한한다. (설정하지 않으면 모든 페이지에서 계속 실행)
export const config = {
  matcher: ['/products/:path*'],
}