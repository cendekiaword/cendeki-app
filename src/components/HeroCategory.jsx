import React from "react";
import HeroCard from "./HeroCard";

export default function HeroCategory() {
  return (
    <>
      <div className="mx-auto mt-32 flex w-dvw justify-center md:max-w-[60dvw] md:gap-40">
        <p className="flex w-[90%] text-wrap justify-center text-4xl font-bold md:max-w-[50%]">
          Pick your favourite Stories
        </p>
      </div>
      <div className="mx-auto mt-16 flex max-w-[80dvw] flex-nowrap gap-8 overflow-x-auto py-1 md:max-w-[80dvw]">
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
    ready: true
  },
  {
    category: "Language",
    stories: Array(10).fill("story"),
    ready: true
  },
  {
    category: "Science",
    stories: Array(10).fill("story"),
    ready: false
  },
  {
    category: "Mathematic",
    stories: Array(10).fill("story"),
    ready: false
  },
  {
    category: "Sport",
    stories: Array(10).fill("story"),
    ready: false
  },
  {
    category: "Astronomy",
    stories: Array(10).fill("story"),
    ready: false
  },
  {
    category: "Art",
    stories: Array(10).fill("story"),
    ready: false
  },
];
