"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Cookies from "universal-cookie";

export default function HeroBanner() {
  const cookies = new Cookies();
  const router = useRouter();
  const goToLogin = async () => {
    let data = await cookies.get("Authorization");
    if (!data) {
      return router.push("/login");
    }
    if (data) {
      const token = data.split(" ")[1];
      if (token) {
        return router.push("/lobby");
      }
    }
  };
  return (
    <div
      className="mx-auto mt-16 flex h-[363px] flex-col items-center justify-center gap-4 overflow-clip rounded-2xl md:max-w-[920px]"
      style={{
        backgroundImage: "url(/Learn.png)",
        maxHeight: "40dvw",
        maxWidth: "80dvw",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p className="text-4xl font-semibold invert">
        CENDEKIA LEARNING PLATFORM
      </p>
      <p className="text-xl invert">Where education meets entertainment!</p>
      <div className="flex gap-8">
        <button
          onClick={() => goToLogin()}
          className="bg-primary flex w-36 max-w-[150px] items-center justify-center rounded-lg px-4 py-3"
        >
          <p className="font-semibold invert">Login</p>
        </button>
        <Link
          href="#teaser"
          className="bg-primary flex w-36 max-w-[150px] items-center justify-center rounded-lg px-4 py-3"
        >
          <p className="font-semibold invert">Try it for free!</p>
        </Link>
      </div>
    </div>
  );
}
