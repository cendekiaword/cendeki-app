"use client"
import Sidebar from "@/components/Sidebar";
import { useAppContext } from "@/context";
import { BASE_URL } from "@/db/config/constant";
import { socket } from "@/socket";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const [champ, setChamp] = useState([])
  const [trigger, setTrigger] = useState("")
  const router = useRouter()
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [transport, setTransport] = useState("N/A");
  const update = useAppContext()
  console.log(update.trigger, '<< ini updated');

  const getLeader = async () => {
    let res = await fetch(`${BASE_URL}/api/leaderboard`, {
      cache: 'no-store'
    })
    let result = await res.json()
    let {data} = result
    let hasil = data.map(({ totalScore, user }) => ({ totalScore, name: user.name }))
    setChamp(hasil)
    // router.refresh()
  }
  
  useEffect(() => {
    getLeader()
  },[trigger])

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on("upgrade", (transport) => {
        setTransport(transport.name);
      });
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    socket.on("hello", (value) => {
      console.log(value);
    })

    socket.emit("coba", champ)
    socket.on("leader", (value) => {
      console.log(value);
    })

    // console.log('lewat');
    socket.on("send", (value) => {
      console.log(value);
      setTrigger(value)
    })
    

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, [update]);



  let date = new Date().toLocaleDateString()
  
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center md:max-h-dvh">
        <h1 className="text-center text-4xl font-bold">Global Leaderboard</h1>
        <p>Latest update: {date}</p>

        <div className="my-8 flex items-end">
          <div className="flex h-44 w-32 flex-col">
            <img src="logo.png" alt="" className="mb-2 size-12 self-center" />
            <p className="text-center font-extrabold">{champ[1]?.name}</p>
            <p className="text-center font-bold">{champ[1]?.totalScore}</p>
            <div className="h-full bg-sky-400"></div>
          </div>
          <div className="flex h-52 w-32 flex-col">
            <img src="logo.png" alt="" className="size-12 self-center" />

            <p className="text-center font-extrabold">{champ[0]?.name}</p>
            <p className="text-center font-bold">{champ[0]?.totalScore}</p>
            <div className="h-full bg-sky-600"></div>
          </div>
          <div className="flex h-36 w-32 flex-col">
            <img src="logo.png" alt="" className="size-12 self-center" />

            <p className="text-center font-extrabold">{champ[2]?.name}</p>
            <p className="text-center font-bold">{champ[2]?.totalScore}</p>
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
