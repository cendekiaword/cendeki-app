import React from "react";

export default function HeroCard({ el }) {
  return (
    <div className="bg-primary relative min-h-[470px] min-w-[320px] rounded-2xl">
      <div className="text-primary absolute bottom-0 h-14 w-32 rounded-tr-lg bg-white p-3">
        <p className="font-semibold">{el.category}</p>
        <p className="">{el.stories.length} Stories</p>
      </div>
    </div>
  );
}
