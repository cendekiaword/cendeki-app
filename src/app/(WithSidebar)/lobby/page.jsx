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
              <div key={idx} className="col-span-2 flex min-h-80 flex-col overflow-clip rounded-xl bg-gray-800  hover:shadow-lg hover:shadow-blue-600">
                <img
                  src="https://images.pexels.com/photos/3958516/pexels-photo-3958516.jpeg"
                  alt=""
                  className="w-72 bg-cover"
                />
                <div className="flex flex-col gap-4 py-4">
                  <p className="text-center text-xl font-semibold text-white">
                    {el.name}
                  </p>
                  <Link
                    href={`/${category}/new`}
                    className="bg-primary mx-auto w-[80%] rounded-md py-2 text-center text-white"
                  >
                    + New Story
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

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
    name: "Physics",
  },
];
