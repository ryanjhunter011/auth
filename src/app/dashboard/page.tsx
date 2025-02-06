import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 justify-center items-center">
        <h1
          className="text-center text-4xl font-bold"
        >
          Dashboard
        </h1>
        <SignedIn>
          <SignOutButton />
        </SignedIn>
      </main>
    </div>
  );
}