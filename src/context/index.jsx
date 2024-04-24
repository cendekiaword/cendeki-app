"use client";
import { editProfile, profile } from "@/actions/actions";
import { socket } from "@/socket";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [state, setState] = useState({});
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [transport, setTransport] = useState("N/A");
  const [trigger, setTrigger] = useState("")

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
    });

    socket.emit("coba", "balikin");

    socket.on("leader", (value) => {
      console.log(value);
    });

    // console.log("lewat");
    socket.on("send", (value) => {
      console.log(value);
      setTrigger(value)
    });

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  async function getProfile() {
    let res = await profile();
    setState(res);
  }

  useEffect(() => {
    getProfile();
  }, [editProfile]);

  return (
    <AppContext.Provider value={{ state, getProfile, trigger }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
