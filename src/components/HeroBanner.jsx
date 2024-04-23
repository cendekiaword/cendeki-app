import Link from "next/link";
import React from "react";
import Image from "next/image";
import hero from '/public/Learn.png'

export default function HeroBanner() {
  return (
    <div
      className="mx-auto mt-16 flex h-[363px] md:max-w-[920px] flex-col items-center justify-center gap-4 rounded-2xl overflow-clip"
      style={{
        backgroundImage: 'url(/Learn.png)',
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
      <Link href="/login" className="flex max-w-[150px] items-center justify-center rounded-lg bg-primary px-4 py-3">
        <p className="invert font-semibold">Try it for free!</p>
      </Link>
    </div>
  );
}
