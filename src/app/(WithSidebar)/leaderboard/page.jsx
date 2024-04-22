import Sidebar from "@/components/Sidebar";
import React from "react";

export default function page() {
  // Simulating a more realistic rank data
  const ranks = Array.from({ length: 100 }, (_, idx) => ({
    name: `User ${idx + 1}`,
    score: (idx + 1) * 200,
  }));

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center md:max-h-dvh">
        <h1 className="text-center text-4xl font-bold">Global Leaderboard</h1>
        <p>Latest update: 22/04/2024</p>

        <div className="mb-8 flex items-end">
          <div className="flex h-44 w-32 flex-col">
            <img src="logo.png" alt="" className="mb-2 size-12 self-center" />
            <p className="text-center font-extrabold">User 2</p>
            <p className="text-center font-bold">1000 Poin</p>
            <div className="h-full bg-sky-400"></div>
          </div>
          <div className="flex h-52 w-32 flex-col">
            <img src="logo.png" alt="" className="size-12 self-center" />

            <p className="text-center font-extrabold">User 1</p>
            <p className="text-center font-bold">2000 Poin</p>
            <div className="h-full bg-sky-600"></div>
          </div>
          <div className="flex h-36 w-32 flex-col">
            <img src="logo.png" alt="" className="size-12 self-center" />

            <p className="text-center font-extrabold">User 3</p>
            <p className="text-center font-bold">500 Poin</p>
            <div className="h-full bg-sky-200"></div>
          </div>
        </div>

        <div className="h-[50%] w-[50%] overflow-hidden rounded-lg">
          <table className="min-w-full rounded-xl border">
            <thead className="sticky top-0 h-8 text-left font-bold text-white">
              <tr className="bg-primary">
                <th>No.</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody className="h-[20%] overflow-y-auto overflow-x-hidden">
              {ranks.map((rank, idx) => (
                <tr className="px-4 py-2 text-left font-bold" key={idx}>
                  <td>{idx + 1}</td>
                  <td>{rank.name}</td>
                  <td>{rank.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
