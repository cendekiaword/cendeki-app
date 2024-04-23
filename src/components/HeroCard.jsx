import React from "react";
import Image from "next/image";

export default function HeroCard({ el }) {
  return (
    <div className="bg-primary relative min-h-[470px] min-w-[320px] rounded-2xl">
      <div className="text-primary absolute h-full bottom-0 rounded-tr-lg bg-white">
        <Image src={`/${el.category}.png`} className="h-4/5 rounded-2xl" width={500} height={500}/>
        <p className="font-semibold pl-2">{el.category}</p>
        <p className="pl-2">{el.stories.length} Stories</p>
      </div>
    </div>
  );
}
