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
      <img src="logo.png" alt="" />
      <div className="flex gap-4">
        <p>Category</p>
        <p>Leaderboard</p>
        <p>About Us</p>
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
