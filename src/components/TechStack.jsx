import React from "react";

export default function TechStack() {
  return (
    <div className="mx-auto mt-32 flex max-w-[80dvw] flex-col items-center justify-center gap-16">
      <h2 className="text-4xl font-bold">Our Tech Stack</h2>
      <div className="flex w-[80%] items-center justify-center gap-12">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          className="size-16"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
          alt=""
          className=" w-28"
        />
        <img
          className=" w-32"
          src="https://upload.wikimedia.org/wikipedia/commons/9/95/Tailwind_CSS_logo.svg"
          alt=""
        />
      </div>
    </div>
  );
}
