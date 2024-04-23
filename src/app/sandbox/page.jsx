"use client";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";

export default function Page() {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:05");

  const getTimeRemaining = (endtime) => {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return {
      total,
      minutes,
      seconds,
    };
  };

  const startTimer = (endtime) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(endtime);
    if (total <= 0) {
      setTimer("00:00:00");
      if (Ref.current) clearInterval(Ref.current);
      Swal.fire("Countdown Complete!", "The timer has reached zero.", "success");
    } else {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (endtime) => {
    if (Ref.current) clearInterval(Ref.current);
    setTimer("00:00:05");

    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    Ref.current = id;
  };

  const getTimeUp = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 5);
    return deadline;
  };

  // useEffect(() => {
  //   const TimeUp = getTimeUp();
  //   clearTimer(TimeUp);

  //   return () => {
  //     if (Ref.current) clearInterval(Ref.current);
  //   };
  // }, []);

  const onClickReset = () => {
    clearTimer(getTimeUp());
  };

  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <h1 style={{ color: "green" }}>GeeksforGeeks</h1>
      <h3>Countdown Timer Using React JS</h3>
      <button onClick={() => { clearTimer(getTimeUp()); }}>
        Start
      </button>
      <h2>{timer}</h2>
      <button onClick={onClickReset}>Reset</button>
    </div>
  );
}
