import Link from "next/link";
import React from "react";
import {
  FaSquareGithub,
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";
export default function HeroFooter() {
  return (
    <div className="mx-auto mb-16 mt-32 flex max-w-[70dvw] items-center justify-between">
      <Link href="#">
        <img src="logo.png" alt="" />
      </Link>
      <div className="flex gap-4">
        <Link href="/lobby">Category</Link>
        <Link href="/leaderboard">Leaderboard</Link>
        <Link href="#about">About Us</Link>
      </div>
      <div className="flex gap-2">
        <FaSquareXTwitter className="text-primary size-6" />
        <FaSquareFacebook className="text-primary size-6" />
        <FaSquareInstagram className="text-primary size-6" />
        <FaSquareGithub className="text-primary size-6" />
      </div>
    </div>
  );
}
