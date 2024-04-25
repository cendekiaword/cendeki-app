"use client";
import { BASE_URL } from "@/db/config/constant";
import React, { useEffect, useState } from "react";
import { PiStarFourBold } from "react-icons/pi";

export default function page() {
  const [champ, setChamp] = useState([]);

  const getLeader = async () => {
    let res = await fetch(`${BASE_URL}/api/leaderboard`, {
      cache: "no-store",
    });
    let result = await res.json();
    let { data } = result;
    let hasil = data.map(({ totalScore, user }) => ({
      totalScore,
      name: user.name,
    }));
    setChamp(hasil);
  };

  useEffect(() => {
    getLeader();
  }, []);

  let date = new Date().toLocaleDateString();

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center md:max-h-dvh">
        <h1 className="text-center text-4xl font-bold">Global Leaderboard</h1>
        <p>Latest update: {date}</p>

        <div className="my-8 flex items-end">
          <div className="flex h-56 min-h-56 w-32 flex-col">
          <div className="self-center">
              <img
                src="logo.png"
                alt=""
                className="mx-auto size-12 content-center"
              />
              <p className="text-center font-extrabold">{champ[1]?.name}</p>
              <div className="flex justify-center">
                <PiStarFourBold className="size-6" />
                <PiStarFourBold className="size-8" />
              </div>
            </div>

            <div className="h-full bg-sky-400">
              <p className="text-center font-bold">{champ[1]?.totalScore}</p>
            </div>
          </div>
          <div className="flex h-64 min-h-64 w-32 flex-col">
            <div className="self-center">
              <img
                src="logo.png"
                alt=""
                className="mx-auto size-12 content-center"
              />
              <p className="text-center font-extrabold">{champ[0]?.name}</p>
              <div className="flex justify-center">
                <PiStarFourBold className="size-6" />
                <PiStarFourBold className="size-8" />
                <PiStarFourBold className="size-6" />
              </div>
            </div>

            <div className="h-full bg-sky-600">
              <p className="text-center font-bold">{champ[0]?.totalScore}</p>
            </div>
          </div>
          <div className="flex h-48 min-h-48 w-32 flex-col">
            <div className="self-center">
              <img
                src="logo.png"
                alt=""
                className="mx-auto size-12 content-center"
              />
              <p className="text-center font-extrabold">{champ[2]?.name}</p>
              <div className="flex justify-center">
                <PiStarFourBold className="size-8" />
              </div>
            </div>

            <div className="h-full bg-sky-200">
              <p className="text-center font-bold">{champ[2]?.totalScore}</p>
            </div>
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
              {champ.map((rank, idx) => (
                <tr className="text-left font-bold hover:bg-sky-200" key={idx}>
                  <td className="w-6 p-2 text-center">{idx + 1}</td>
                  <td className="p-2 ">{rank.name}</td>
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
