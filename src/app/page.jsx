import React from "react";
import * as animationData from "@/lotties/reading1.json";
import history from "@/lotties/history1.json";
import { LottieMediumRound } from "@/components/Lottie";
import Branding from "@/components/Branding";
import Teaser from "@/components/Teaser";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <div className="mx-auto flex max-w-[60dvw] justify-between gap-40 mt-16">
        <p className="max-w-[50%] text-wrap text-4xl font-bold">
          Pick your favourite Stories
        </p>
        <p className="max-w-[50%] text-pretty">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          officiis, dolore quos libero hic quis! Placeat molestiae alias non
          officiis odit quis ea eos, voluptates doloribus ex aliquam minima
          ratione.
        </p>
      </div>
    </>
  );
}
