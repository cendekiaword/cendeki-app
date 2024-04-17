import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0 flex justify-between px-5 py-3 z-10">
        <div className="w-[70dvw]">
          <Link
            href=""
            className="text-lg px-3 pb-3 hover:border-b-4 border-black text-black"
          >
            Mockup Logo
          </Link>
          <Link
            href=""
            className="text-lg px-3 pb-3 hover:border-b-4 border-black text-black"
          >
            Home
          </Link>
          <Link
            href=""
            className="text-lg px-3 pb-3 hover:border-b-4 border-black text-black"
          >
            Start Journey
          </Link>
          <Link
            href=""
            className="text-lg px-3 pb-3 hover:border-b-4 border-black text-black"
          >
            Leaderboard
          </Link>
        </div>
        <div className="flex w-[30dvw] justify-end gap-5">
          <Link
            href=""
            className="text-lg px-3 pb-3 hover:border-b-4 border-black text-black"
          >
            Profile
          </Link>
          <Link
            href=""
            className="text-lg px-3 pb-3 hover:border-b-4 border-black text-black"
          >
            Login
          </Link>
        </div>
      </nav>
    </>
  );
}
