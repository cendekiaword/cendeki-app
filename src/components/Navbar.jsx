import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

export default function Navbar({ className }) {
  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-10 mx-auto my-12 flex h-24 max-w-[80dvw] items-center justify-between bg-transparent",
          className,
        )}
      >
        <Link href="/" className="flex items-center gap-2 text-primary">
          <img src="/logo.png" className="size-12" alt="" />
          <h1 className="text-4xl font-bold">Cendeki App</h1>
        </Link>
        <div className="">
          <Link
            href="/lobby"
            className="border-primary text-primary px-3 pb-3 text-lg font-bold hover:border-b-4"
          >
            Category
          </Link>
          <Link
            href="/leaderboard"
            className="border-primary text-primary px-3 pb-3 text-lg font-bold hover:border-b-4"
          >
            Leaderboard
          </Link>
          <Link
            href="#about"
            className="border-primary text-primary px-3 pb-3 text-lg font-bold hover:border-b-4"
          >
            About Us
          </Link>
        </div>
      </nav>
    </>
  );
}
