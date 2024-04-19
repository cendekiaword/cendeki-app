"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <>
    {items && items.map((el, i) => (
      <div className="flex h-[40rem] w-full items-center justify-center" key={i}>
        <PinContainer
          title={el.description}
          href="https://twitter.com/mannupaaji"
        >
          <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
            <h3 className="!m-0 max-w-xs !pb-2 text-base text-center  font-bold text-slate-100">
              {el.title}
            </h3>
            <div className="mt-4 flex w-full flex-1 rounded-lg h-[80%] justify-center" >
                <img src="https://as2.ftcdn.net/v2/jpg/02/09/05/49/1000_F_209054939_2ZkFKbChO0m4NSMZnEUhfyNZ6HFJTuHM.jpg"  className="border rounded"/>
            </div>
          </div>
        </PinContainer>
      </div>
    ))}
    </>
  );
}

const items = [
  {
    title: "History",
    description: "Crafted detailed historical narratives encapsulating pivotal events and cultural developments in concise, informative sentences.",
    href: "/history",
  },
  {
    title: "Languange",
    description: "Dedicated to mastering new languages through immersive learning experiences and continuous practice.",
    href: "/languange",
  },
  {
    title: "Math",
    description: "Utilized engaging teaching methodologies to facilitate students' understanding and mastery of mathematical concepts.",
    href: "/math",
  },
];
