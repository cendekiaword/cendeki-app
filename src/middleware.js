import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";
import { verifyToken } from "./db/helpers/jwt";

// Middleware function
export async function middleware(request) {
  // Get the token from the cookie
  const data = cookies(request).get('Authorization')
  if (!data) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  
  const token = data.value.split(" ")[1]

  // Create a new header object
  const requestHeader = new Headers(request.headers);


  // If a token exists
  if (token) {
    try {
      // Verify the token
      const decoded = await verifyToken(token);
      // Set user id and email as headers
      requestHeader.set("x-id-user", decoded._id);
      requestHeader.set("x-email-user", decoded.email);
      // Return the modified headers
      return NextResponse.next({
        request: {
          headers: requestHeader,
        },
      });
    } catch (error) {
      // Token verification failed, redirect to login
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  // If no token found, redirect to login
  return NextResponse.redirect(new URL("/login", request.url));
}

// Matching Paths
export const config = {
  // Define the paths for which the middleware will run
  matcher: ['/lobby', '/api/language/story', '/api/history/story', '/api/profile', '/api/scoring', '/:journey*/new'],
};
