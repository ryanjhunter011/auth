import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const publicRoutes = [
  "/",
  "/page",
  "/post",
];

const sessionRoutes = [
  "/sign-in(.*)",
  "/sign-up(.*)",
];

const isPublicRoute = createRouteMatcher(publicRoutes);
const isSessionRoute = createRouteMatcher(sessionRoutes);

export default clerkMiddleware(async (auth, request) => {
  const authObject = await auth();
  const { userId } = authObject;

  if (isPublicRoute(request)) {
    return NextResponse.next();
  }

  if (isSessionRoute(request) && userId) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!userId && !isSessionRoute(request)) {
    await auth.protect();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
