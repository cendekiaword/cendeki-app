'use client'
import React, { useState } from "react";
import { LuBarChart2 } from "react-icons/lu";
import { FaBookBookmark } from "react-icons/fa6";
import { IoRibbonSharp } from "react-icons/io5";
import { useAppContext } from "@/context";

export default function ProfileSummary() {
  const [profile, setProfile] = useState({})
  let category = useAppContext()
  console.log(category.state);

  return (
    <div className="border-primary flex min-h-[20dvh] w-[80%] justify-evenly overflow-clip rounded-lg border">
      <div className="border-primary flex w-full max-w-[35%] items-center justify-between gap-4 border-r px-8">
        <div className="bg-primary size-16 content-center rounded-full text-center 2xl:size-24">
          <FaBookBookmark className="mx-auto self-center text-4xl text-white 2xl:text-7xl" />
        </div>
        <div className="w-[60%] max-w-[60%]">
          <p className="text-md mb-2 text-gray-500 2xl:text-xl">
            Total Stories
          </p>
          <p className="text-4xl font-extrabold 2xl:text-6xl">{category.state?.history?.length}</p>
        </div>
      </div>
      <div className="border-primary flex w-full max-w-[35%] items-center justify-between gap-4 border-r px-8">
        <div className="bg-primary text-centerr size-16 content-center rounded-full 2xl:size-24">
          <LuBarChart2 className="mx-auto self-center text-4xl text-white 2xl:text-7xl" />
        </div>
        <div className="w-[60%] max-w-[60%]">
          <p className="text-md mb-2 text-gray-500 2xl:text-xl">
            Highest Score
          </p>
          <p className="text-4xl font-extrabold 2xl:text-6xl">{category.state?.highestScore}</p>
        </div>
      </div>
      <div className="border-primary flex w-full max-w-[35%] items-center justify-between gap-4 border-r px-8">
        <div className="bg-primary size-16 content-center rounded-full text-center 2xl:size-24">
          <IoRibbonSharp className="mx-auto self-center text-4xl text-white 2xl:text-7xl" />
        </div>
        <div className="w-[70%] max-w-[70%]">
          <p className="text-md mb-2 text-gray-500 2xl:text-xl">
            Total Score
          </p>
          <p className="text-4xl font-extrabold 2xl:text-6xl">
            {category.state?.totalScore}
            </p>
        </div>
      </div>
    </div>
  );
}
