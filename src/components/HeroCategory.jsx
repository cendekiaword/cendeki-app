import React from "react";
import HeroCard from "./HeroCard";

export default function HeroCategory() {
  return (
    <>
      <div className="mx-auto mt-32 flex w-dvw justify-between md:max-w-[60dvw] md:gap-40">
        <p className="flex w-[90%] text-wrap  text-4xl font-bold md:max-w-[50%]">
          Pick your favourite Stories
        </p>
        <p className="max-w-[80%] text-pretty md:max-w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          officiis, dolore quos libero hic quis! Placeat molestiae alias non
          officiis odit quis ea eos, voluptates doloribus ex aliquam minima
          ratione.
        </p>
      </div>
      <div className="mt-16 flex flex-nowrap gap-8 overflow-x-auto py-1 max-w-[80dvw] md:max-w-[80dvw] mx-auto">
        {categories.map((el, idx) => {
          return <HeroCard el={el} key={idx} />;
        })}
      </div>
    </>
  );
}

const categories = [
  {
    category: "History",
    stories: Array(10).fill("story"),
  },
  {
    category: "Language",
    stories: Array(10).fill("story"),
  },
  {
    category: "Science",
    stories: Array(10).fill("story"),
  },
  {
    category: "Mathematic",
    stories: Array(10).fill("story"),
  },
  {
    category: "Sport",
    stories: Array(10).fill("story"),
  },
  {
    category: "Astronomy",
    stories: Array(10).fill("story"),
  },
  {
    category: "Art",
    stories: Array(10).fill("story"),
  },
];

