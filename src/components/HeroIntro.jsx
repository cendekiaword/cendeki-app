import React from "react";
import { cn } from "@/utils/cn";
export default function HeroIntro({ className }) {
  return (
    <>
      {/* Hero Intro */}
      <div
        className={cn(
          "mx-auto mt-32 flex max-w-[80dvw] md:max-w-[60dvw] flex-col items-center gap-8",
          className,
        )}
      >
        <h1 className=" text-8xl font-bold">Why Cendekia?</h1>
        <p className="text-center">
        We are an educational platform designed to facilitate learning management. It offers a range of features aimed at enhancing the teaching and learning experience for both educators and students.
        </p>
        <div className="flex gap-16">
          <div>
            <p className="text-primary text-8xl font-extrabold">300+</p>
            <p className="text-primary text-center">Variety of Stories</p>
          </div>
          <div>
            <p className="text-primary text-8xl font-extrabold">10.000</p>
            <p className="text-primary text-center">Monthly Users</p>
          </div>
        </div>
      </div>
    </>
  );
}
