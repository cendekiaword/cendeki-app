import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 z-10 flex h-12 w-full items-center justify-between px-5">
        <div className="">
          <Link
            href=""
            className="border-black px-3 pb-3 text-lg text-black hover:border-b-4"
          >
            Mockup Logo
          </Link>
          <Link
            href=""
            className="border-black px-3 pb-3 text-lg text-black hover:border-b-4"
          >
            Home
          </Link>
          <Link
            href=""
            className="border-black px-3 pb-3 text-lg text-black hover:border-b-4"
          >
            Start Journey
          </Link>
          <Link
            href=""
            className="border-black px-3 pb-3 text-lg text-black hover:border-b-4"
          >
            Leaderboard
          </Link>
        </div>
        <div className="">
          <Link
            href=""
            className="border-black px-3 pb-3 text-lg text-black hover:border-b-4"
          >
            Profile
          </Link>
          <Link
            href=""
            className="border-black px-3 pb-3 text-lg text-black hover:border-b-4"
          >
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}
