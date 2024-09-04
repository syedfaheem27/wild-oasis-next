// import { NextResponse } from "next/server";

// export function middleware(request) {
//   return NextResponse.redirect(new URL("/about", request.url));
// }
// export const config = {
//   matcher: ["/account"],
// };
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/account/:path*"],
};
