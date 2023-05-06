// 미들웨어는 각 페이지를 접근하기 전에 실행되는 코드이다. (문지기 역할?)
import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";

// More on how NextAuth.js middleware works: https://next-auth.js.org/configuration/nextjs#middleware
export default withAuth(
  function middleware(request: NextRequest) {
    if (request.nextUrl.pathname.startsWith("/products/1004")) {
      console.log("미들웨어 - 경로를 리다이렉팅함!");
      return NextResponse.redirect(new URL("/products", request.url));
    }
  },
  {
    callbacks: {
      authorized({ req, token }) {
        // `/admin` requires admin role
        if (req.nextUrl.pathname === "/admin") {
          return token?.userRole === "admin";
        }
        // `/me` only requires the user to be logged in
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: ["/admin", "/me"],
};
