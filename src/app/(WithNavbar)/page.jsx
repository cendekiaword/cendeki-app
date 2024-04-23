import React from "react";
import Teaser from "@/components/Teaser";
import HeroBanner from "@/components/HeroBanner";
import HeroIntro from "@/components/HeroIntro";
import TeamIntroduction from "@/components/TeamIntroduction";
import TechStack from "@/components/TechStack";
import HeroFooter from "@/components/HeroFooter";
import HeroCategory from "@/components/HeroCategory";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <HeroCategory />
      <HeroIntro />
      <Teaser />
      <TeamIntroduction />
      <TechStack />
      <HeroFooter />
    </>
  );
}
