"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Link from "next/link";

export function AnimatedPinDemo() {
  return (
    <>
      {items &&
        items.map((el, i) => (
          <div
            className="flex h-[40rem] w-full items-center justify-center"
            key={i}
          >
            <PinContainer
              title={el.description}
              href="https://twitter.com/mannupaaji"
            >
              <Link href={el.href}>
                <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
                  <h3 className="!m-0 max-w-xs !pb-2 text-center text-base  font-bold text-slate-100">
                    {el.title}
                  </h3>
                  <div className="mt-4 flex h-[80%] w-full flex-1 justify-center rounded-lg">
                    <img
                      src="https://as2.ftcdn.net/v2/jpg/02/09/05/49/1000_F_209054939_2ZkFKbChO0m4NSMZnEUhfyNZ6HFJTuHM.jpg"
                      className="rounded border"
                    />
                  </div>
                </div>
              </Link>
            </PinContainer>
          </div>
        ))}
    </>
  );
}

const items = [
  {
    title: "History",
    description:
      "Crafted detailed historical narratives encapsulating pivotal events and cultural developments in concise, informative sentences.",
    href: "/history",
  },
  {
    title: "Language",
    description:
      "Dedicated to mastering new languages through immersive learning experiences and continuous practice.",
    href: "/language",
  },
  {
    title: "Math",
    description:
      "Utilized engaging teaching methodologies to facilitate students' understanding and mastery of mathematical concepts.",
    href: "/math",
  },
];
