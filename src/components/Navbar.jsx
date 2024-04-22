"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar({ className }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-10 flex h-12 w-full items-center justify-between px-5 style={{ backdropFilter:}}",
          scrolled ? "" : "bg-sky-300",
          className,
        )}
      >
        <div className="">
          <Link
            href="/"
            className="border-black px-3 pb-3 text-lg text-black hover:border-b-4"
          >
            Mockup Logo
          </Link>
          {/* <Link
            href=""
            className="border-black px-3 pb-3 text-lg text-white hover:border-b-4"
          >
            Home
          </Link> */}
          <Link
            href="/lobby"
            className="border-black px-3 pb-3 text-lg text-black hover:border-b-4"

          >
            Start Journey
          </Link>
          <Link
            href=""
            className="border-black px-3 pb-3 text-lg text-white hover:border-b-4"
          >
            Leaderboard
          </Link>
        </div>
        <div className="">
          <Link
            href="/profile/me"
            className="border-black px-3 pb-3 text-lg text-black hover:border-b-4"
          >
            Profile
          </Link>
          <Link
            href="/login"
            className="border-black px-3 pb-3 text-lg text-black hover:border-b-4"
          >
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}
