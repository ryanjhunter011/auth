import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 justify-center items-center">
        <h1
          className="text-center text-4xl font-bold"
        >
          Auth
        </h1>
        <SignedOut>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent h-12 px-4 px-5 min-w-44"
            href="/sign-in"
          >
            Sign In
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        </main>
    </div>
  );
}
