"use client";
import React from "react";

import Link from "next/link";
export default function page() {
  return (
    <>
      <div className="flex min-h-full w-full flex-col items-center justify-center">
        <h1 className="mb-12 text-center text-4xl font-bold">
          Choose what you want to learn
        </h1>
        <div className="flex min-h-[60%] max-w-[80%] flex-wrap items-center justify-center gap-8">
          {categories.map((el, idx) => {
            const category = el.name.toLowerCase();
            return (
              <div
                key={idx}
                className="col-span-2 flex min-h-80 flex-col overflow-clip rounded-xl bg-gray-800  hover:shadow-lg hover:shadow-blue-600"
              >
                <img
                  src={`/${el.name}.png`}
                  alt=""
                  className="h-60 w-96 bg-cover"
                />
                <div className="flex flex-col gap-4 py-4">
                  <p className="text-center text-xl font-semibold text-white">
                    {el.name}
                  </p>
                  <div className="mx-auto flex w-full justify-evenly">
                    <Link
                      href={`/${category}/new`}
                      className="bg-primary w-[30%] rounded-md py-2 text-center text-white hover:opacity-80"
                    >
                      New
                    </Link>
                    <Link
                      className="bg-primary w-[30%] rounded-md py-2 text-center text-white hover:opacity-80"
                      href={`/${category}/curated`}
                    >
                      Available
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

const act = [
  {
    id: 1,
    text: "+ New",
    description: "",
  },
  {
    id: 2,
    text: "Available",
    description: "",
  },
];

const categories = [
  {
    name: "History",
  },
  {
    name: "Language",
  },
  {
    name: "Science",
  },
  {
    name: "Art",
  },
];
