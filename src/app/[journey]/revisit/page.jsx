"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { getStory } from "@/actions/actions";

export default function page({ params }) {
  const Ref = useRef(null);
  async function callAction() {
    let data = await getStory(params.journey);
    setJourney(data);
  }

  const [journey, setJourney] = useState({});
  const [answers, setAnswers] = useState(Array(journey.answer.length));
  const [feedback, setFeedback] = useState(
    Array(journey.answer.length).fill(""),
  );
  const [border, setBorder] = useState(Array(journey.answer.length).fill(""));
  const [scores, setScores] = useState(Array(journey.answer.length).fill(0));
  const [finalScore, setFinalScore] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const [timer, setTimer] = useState("00:10");
  const router = useRouter();
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    if (!isNaN(total)) {
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const seconds = Math.floor((total / 1000) % 60);
      return {
        total,
        minutes,
        seconds,
      };
    }
    return {
      total: 0,
      minutes: 0,
      seconds: 0,
    };
  };

  useEffect(() => {
    if (gameEnd) {
      Swal.fire({
        title: "Time's up!",
        text: `Your final score is ${finalScore}`,
        icon: "info",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "okay",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/profile/history");
        }
      });
    }
    const sum = scores.reduce((acc, score) => acc + score, 0);
    setFinalScore(sum);
  }, [scores, gameEnd]);

  useEffect(() => {
    callAction();
    return () => {
      if (Ref.current) {
        clearInterval(Ref.current);
      }
    };
  }, []);

  const startTimer = (endtime) => {
    let { total, minutes, seconds } = getTimeRemaining(endtime);
    if (total <= 0) {
      if (Ref.current) clearInterval(Ref.current);
      setTimer("00:00");
      setGameEnd(true);
    } else {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds),
      );
    }
  };

  const clearTimer = (endtime) => {
    if (Ref.current) clearInterval(Ref.current);
    setTimer("00:10");

    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    Ref.current = id;
  };

  const getTimeUp = () => {
    let timeup = new Date();
    timeup.setSeconds(timeup.getSeconds() + 10);
    return timeup;
  };

  const onClickStart = () => {
    clearTimer(getTimeUp());
  };

  function handleSubmit(e) {
    if (e.key == "Enter") {
      const newFeedback = answers.map((answer, idx) => {
        if (scores[idx] > 0) {
          return;
        }
        const res =
          answer?.toLowerCase() === journey.answer[idx]?.toLowerCase()
            ? "Correct"
            : "Incorrect";

        setFeedback((prev) => {
          const updatedFeedback = [...prev];
          updatedFeedback[idx] = res;
          return updatedFeedback;
        });

        let borderClass = "";
        if (res === "Correct") {
          borderClass = "border-b-2 border-teal-400";
        } else if (res === "Incorrect" && answer && answer.length !== 0) {
          borderClass = "border-b-2 border-rose-400";
        } else {
          borderClass = "";
        }
        setBorder((prev) => {
          const updatedBorder = [...prev];
          updatedBorder[idx] = borderClass;
          return updatedBorder;
        });

        let score = 0;
        if (res === "Correct") {
          score += timer.split(":")[1] * 10;
        } else if (res === "Incorrect" && answer && answer.length !== 0) {
          score = 0;
        } else {
          score = 0;
        }
        setScores((prev) => {
          const updateScore = [...prev];
          updateScore[idx] = score;
          return updateScore;
        });

        return res;
      });
    }
  }

  const questions = journey.story.split("----").map((question, idx) => {
    if (idx !== journey.story.split("----").length - 1) {
      return (
        <React.Fragment key={idx}>
          <span className="">{question}</span>
          <span className="relative">
            <input
              type="text"
              placeholder="- - - -"
              value={answers[idx]}
              onKeyDown={handleSubmit}
              onChange={(e) => {
                const newAnswers = [...answers];
                newAnswers[idx] = e.target.value;
                setAnswers(newAnswers);
              }}
              className={
                "inline h-6 w-40 max-w-fit rounded-full border-b-2 border-sky-400 px-3 " +
                (border[idx] !== "" ? border[idx] : " bg-opacity-70")
              }
            />
            {feedback[idx] == "Correct" && (
              <>
                <span className="absolute right-6 top-0 text-sm">
                  {scores[idx]}
                </span>
                <FaCircleCheck className="absolute right-1 top-[0.1rem] size-4 text-xl text-cyan-500" />
              </>
            )}
            {border[idx] == "border-b-2 border-rose-400" && (
              <>
                <span className="absolute right-6 top-0 text-sm text-rose-500">
                  {scores[idx]}
                </span>
                <FaCircleXmark className="absolute right-1 top-[0.1rem] size-4 text-xl text-rose-500" />
              </>
            )}
          </span>
        </React.Fragment>
      );
    } else {
      return (
        <span className="invert" key={"q" + idx}>
          {question}
        </span>
      );
    }
  });

  return (
    <>
      <div className="mx-auto mt-32 flex max-w-[80dvw] flex-col gap-8 md:max-w-[60dvw]">
        <h1 className="text-center text-8xl font-bold">Test Your Knowledge</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          magnam aliquam a praesentium alias quibusdam impedit esse itaque,
          necessitatibus nulla eos explicabo nihil, provident laborum. Tempore
          error non ullam minus.
        </p>
      </div>
      <div className="border-primary mx-auto mt-16 max-w-[80dvw] rounded-lg border p-4 md:max-w-[60dvw]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center gap-1">
            <h2 className="text-2xl font-bold">Indonesian Independence</h2>
            <p>Fill the missing blank down below</p>
          </div>
          <button
            onClick={onClickStart}
            className="border-primary h-12 w-32 rounded-xl border hover:shadow hover:shadow-sky-400"
          >
            Start
          </button>
        </div>
        <div className="border-primary mt-4 rounded-lg border">
          <p className="p-4 text-justify indent-10 leading-loose tracking-tight">
            {questions}
          </p>
          <div className="bg-primary flex w-full justify-between">
            <p className="px-4 py-2 font-bold text-white">
              Score: {finalScore}
            </p>
            <p className="px-4 py-2 font-bold text-white">Time: {timer}</p>
          </div>
        </div>
      </div>
    </>
  );
}
