"use client";
import React from "react";
import { Vortex } from "../../components/ui/vortex";

function Page() {
  return (
    <div className="w-screen mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={100}
        particleCount={100}
        baseHue={120}
        className="flex items-center justify-center px-2 py-4 w-10 h-full"></Vortex>
    </div>
  );
}

export default Page;
