import React from "react";

export default function HeroCard({ el }) {
  return (
    <div className="bg-primary relative flex min-h-[470px] min-w-[320px] flex-col rounded-2xl">
      <img
        src={`/${el.category}.png`}
        className="min-h-[470px] rounded-2xl object-cover"
      />
      <div className="text-primary absolute bottom-0 h-14 w-32 rounded-tr-lg bg-white px-3 pt-1 ">
        <p className="pl-2 font-semibold">{el.category}</p>
        <p className="pl-2">{el.stories.length} Stories</p>
      </div>
    </div>
  );
}
