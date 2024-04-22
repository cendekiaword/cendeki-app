import React from "react";

export default function page() {
  const ranks = Array(10).fill("User");

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-4 outline">
      <div className="flex gap-10">
        {ranks.slice(0, 3).map((rank, idx) => {
          return (
            <div
              className={"bg-slate-400 " + (idx + 1 == 1 && "h-10")}
              key={idx}
            >
              {rank}
            </div>
          );
        })}
      </div>
      {ranks.map((rank, idx) => {
        return (
          <p
            key={idx}
            className={
              "h-8 w-[50%] content-center rounded-md px-3 " +
              (idx % 2 == 0 ? "bg-sky-300" : "bg-red-300")
            }
          >
            {rank + (idx + 1)}
          </p>
        );
      })}
    </div>
  );
}
