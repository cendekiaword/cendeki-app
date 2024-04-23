"use server";
import Sidebar from "@/components/Sidebar";
import { BASE_URL } from "@/db/config/constant";
import React from "react";

export default async function page() {
  // Simulating a more realistic rank data
  // const ranks = Array.from({ length: 100 }, (_, idx) => ({
  //   name: `User ${idx + 1}`,
  //   score: (idx + 1) * 200,
  // }));

  const getLeader = async () => {
    let res = await fetch(`${BASE_URL}/api/leaderboard`, {
      cache: "no-store",
    });
    let result = await res.json();

    return result.data;
  };

  let data = await getLeader();

  const highest = () => {
    const simplifiedData = data.map(({ totalScore, user }) => ({
      totalScore,
      user,
    }));
    return simplifiedData
  };

const leader = highest()

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center md:max-h-dvh">
        <h1 className="text-center text-4xl font-bold">Global Leaderboard</h1>
        <p>Latest update: 22/04/2024</p>

        <div className="my-8 flex items-end">
          <div className="flex h-44 w-32 flex-col">
            <img src="logo.png" alt="" className="mb-2 size-12 self-center" />
            <p className="text-center font-extrabold">{leader[1].user.name}</p>
            <p className="text-center font-bold">{leader[1].totalScore}</p>
            <div className="h-full bg-sky-400"></div>
          </div>
          <div className="flex h-52 w-32 flex-col">
            <img src="logo.png" alt="" className="size-12 self-center" />

            <p className="text-center font-extrabold">{leader[0].user.name}</p>
            <p className="text-center font-bold">{leader[0].totalScore}</p>
            <div className="h-full bg-sky-600"></div>
          </div>
          <div className="flex h-36 w-32 flex-col">
            <img src="logo.png" alt="" className="size-12 self-center" />

            <p className="text-center font-extrabold">User 3</p>
            <p className="text-center font-bold">500 Poin</p>
            <div className="h-full bg-sky-200"></div>
          </div>
        </div>

        <div className="h-[50%] w-[50%] overflow-hidden rounded-xl hover:overflow-y-auto">
          <table className="min-w-full rounded-xl border">
            <thead className="sticky top-0 h-8 text-left font-bold text-white">
              <tr className="bg-primary">
                <th className="p-2">No.</th>
                <th className="p-2">Name</th>
                <th className="p-2">Score</th>
              </tr>
            </thead>
            <tbody className="h-[20%] overflow-y-auto overflow-x-hidden">
              {data.map((rank, idx) => (
                <tr className="text-left font-bold hover:bg-sky-200" key={idx}>
                  <td className="w-6 p-2 text-center">{idx + 1}</td>
                  <td className="p-2 ">{rank.user.name}</td>
                  <td className="p-2 text-black">{rank.totalScore}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
