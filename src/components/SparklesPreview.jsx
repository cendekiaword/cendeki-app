"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { AnimatedPinDemo } from "./animated-pin";

export function SparklesPreview() {
  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      <h1 className="md:text-7xl text-3xl lg:text-5xl font-bold text-center text-white -mb-14 z-20 underline">
      Choose What You Want to Learn
      </h1>
      <div className="flex flex-row">
        <AnimatedPinDemo/>
      </div>
      <div className="w-[70%] h-40 relative -mt-40">
        {/* Gradients */}
        {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-[100%] h-full z-0"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(500px_400px_at_top,transparent_20%,white)] "></div>
      </div>
    </div>
  );
}
