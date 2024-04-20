"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { AnimatedPinDemo } from "./animated-pin";



export function SparklesPreview() {
  return (
    <div className="min-h-[55.7rem] w-screen bg-sky-300 flex flex-col items-center justify-center overflow-hidden">
      <h1 className="md:text-7xl text-3xl lg:text-5xl font-semibold text-center -mb-14 z-20 underline invert">
      Choose What You Want to Learn.
      </h1>
      <div className="flex flex-row">
        <AnimatedPinDemo/>
      </div>
      <div className="w-[80%] h-96 relative -mt-96">
        {/* Gradients */}
        {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.8}
          maxSize={1.5}
          particleDensity={1200}
          className="w-[100%] h-full z-0"
          particleColor="141b41"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-sky-300 [mask-image:radial-gradient(800px_700px_at_top,transparent_20%,white)] "></div>
      </div>
    </div>
  );
}
