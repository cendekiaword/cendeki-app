"use client";

import Link from "next/link";
import React from "react";
import Lottie from "lottie-react";
import * as animationData from "@/lotties/reading1.json";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-[300dvh] flex-col items-center bg-sky-300">
      <Navbar />
      <div className="w-full flex h-dvh relative border border-black items-center">
        <div className="w-[60%] border z-5">
          <p className="text-4xl tracking-tight mb-5 text-black">
            Interactive learning platform where education meets entertainment!
          </p>
          <p>
            Dive into a world of captivating storytelling that puts you at the
            center of the narrative. Engage your mind and enhance your learning
            experience by filling in missing words from our engaging stories.
            Whether you're a student looking to improve your language skills or
            someone eager to learn in a fun and interactive way, our platform
            offers a unique blend of fun and education. Join us on this exciting
            journey of discovery and unlock your full learning potential!
          </p>
        </div>
        <div className="h-[30rem] right-0 rounded-full overflow-hidden">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
      <div className="min-h-dvh w-full bg-orange-300"></div>
      <div className="min-h-dvh w-full bg-violet-300"></div>
    </main>
  );
}
