import { SparklesPreview } from "@/components/SparklesPreview";
import { AnimatedPinDemo } from "@/components/animated-pin";
import { SparklesCore } from "@/components/ui/sparkles";
import { Vortex } from "@/components/ui/vortex";
import React from "react";

const Page = () => {
  return (
    <>
      {/* <div className=" h-screen bg-black">
      <div className="flex flex-col items-center justify-center">
        <div className="text-white">Choose What You Want to Learn</div>
        <div className="flex flex-row">
          <AnimatedPinDemo />
        </div>
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="h-full w-full -mt-80"
            particleColor="#FFFFFF"
          />
      </div>
    </div> */}
      <SparklesPreview/>
    </>
  );
};

export default Page;
