import React from "react";

export default function HeroCard({ el }) {
  return (
    <>
    {el.ready === true ? (
    <div className="bg-primary relative flex min-h-[470px] min-w-[320px] flex-col rounded-2xl">
      <img
        src={`/${el.category}.png`}
        className="min-h-[470px] rounded-2xl object-cover"
      />
      <div className="text-primary absolute bottom-0 h-14 w-32 rounded-tr-lg bg-white px-3 pt-1 flex items-center justify-center">
        <p className="font-semibold">{el.category}</p>
        {/* <p className="pl-2">{el.stories.length} Stories</p> */}
      </div>
    </div>
    ):
    <div className="bg-black relative flex min-h-[470px] min-w-[320px] flex-col rounded-2xl">
      <img
        src={`/${el.category}.png`}
        className="min-h-[470px] rounded-2xl object-cover opacity-30"
      />
      <div className="text-red-600 absolute bottom-0 h-14 w-32 rounded-tr-lg bg-white px-3 pt-1 ">
        <p className="pl-2 font-semibold">{el.category}</p>
        <p className="">Coming Soon</p>
      </div>
    </div>
    }
    </>
  );
}
