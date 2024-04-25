"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Cookies from "universal-cookie";

export default function Navbar({ className }) {
  const cookies = new Cookies();
  const router = useRouter();
  function hadleCategory() {
    let data = cookies.get("Authorization");
    if (!data) {
      return router.push("/login");
    }

    return router.push("/lobby");
  }
  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-10 mx-auto my-12 flex h-24 max-w-[80dvw] items-center justify-between bg-transparent",
          className,
        )}
      >
        <Link href="/" className="text-primary flex items-center gap-2">
          <img src="/logo.png" className="size-12" alt="" />
          <h1 className="text-4xl font-bold">Cendeki App</h1>
        </Link>
        <div className="flex flex-row">
          <button
            onClick={() => {
              hadleCategory();
            }}
            className="border-primary text-primary px-3 pb-3 text-lg font-bold hover:border-b-4"
          >
            Category
          </button>
          <Link
            href="/leaderboard"
            className="border-primary text-primary px-3 pb-3 text-lg font-bold hover:border-b-4"
          >
            Leaderboard
          </Link>
          <Link
            href="/#about"
            className="border-primary text-primary px-3 pb-3 text-lg font-bold hover:border-b-4"
          >
            About Us
          </Link>
        </div>
      </nav>
    </>
  );
}
