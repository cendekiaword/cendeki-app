"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useAppContext } from "@/context";
import { capitalize, clearTimer, getTimeUp, postScore } from "../actions";
import CompleteJourney from "@/components/CompleteJourney";
import IncompleteJourney from "@/components/IncompleteJourney";
import LoadingSkeleton from "@/components/LoadingSkeleton";


export default function Page({ params }) {
  const { story } = useAppContext();
  const Ref = useRef(null);
  const [journey, setJourney] = useState("");
  const [answers, setAnswers] = useState([]);
  const [storyId, setStoryId] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [displayComplete, setDisplayComplete] = useState(false);
  const [border, setBorder] = useState([]);
  const [scores, setScores] = useState([]);
  // const [category, setCategory] = useState("");
  const [finalScore, setFinalScore] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const [timer, setTimer] = useState("00:10");
  // const [question, setQuestion] = useState("");
  const [title, setTitle] = useState("");
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
      postScore(finalScore, storyId);
      Swal.fire({
        title: "Time's up!",
        html: `<p class='leading-loose'>Your final score is ${finalScore} <br /> Do you want to see the correct answer ?</p>`,
        icon: "info",
        showDenyButton: true,
        confirmButtonColor: "#1860b6",
        denyButtonColor: "#14b8a6",
        confirmButtonText: "Yes",
        denyButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          setDisplayComplete(true);
        } else {
          router.push("/leaderboard");
        }
      });
    }
    const sum = scores.reduce((acc, score) => acc + score, 0);
    setFinalScore(sum);
  }, [scores, gameEnd]);

  useEffect(() => {
    capitalize(params.journey);
    setJourney(story.story);
    setStoryId(story._id);
    setCorrectAnswers(story.answer);
    setAnswers(Array(story.answer?.length).fill(""));
    setScores(Array(story.answer?.length).fill(0));
    setTitle(story.title);
    setGenerating(false);
    setLoading(false);
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
          answer?.toLowerCase() === correctAnswers[idx]?.toLowerCase()
            ? "Correct"
            : "Incorrect";

        setFeedback((prev) => {
          const updatedFeedback = [...prev];
          updatedFeedback[idx] = res;
          return updatedFeedback;
        });

        let borderClass = "";
        if (res === "Correct") {
          borderClass = "correct-answer";
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

  return (
    <>
      <div className="mx-auto">
        <div className="mx-auto mb-8 mt-8 flex max-w-[80dvw] flex-col gap-8 md:max-w-[60dvw]">
          <h1 className="text-center text-4xl font-bold md:text-7xl 2xl:text-8xl">
            Test Your Knowledge
          </h1>
        </div>
        <div className="mb-10 flex w-full flex-col items-center justify-center gap-2">
        </div>

        {generating && <LoadingSkeleton />}
        {!loading && !displayComplete && (
          <IncompleteJourney
            feedback={feedback}
            title={title}
            journey={journey}
            answers={answers}
            border={border}
            scores={scores}
            timer={timer}
            finalScore={finalScore}
            setAnswers={setAnswers}
            onClickStart={onClickStart}
            handleSubmit={handleSubmit}
          />
        )}
        {displayComplete && (
          <CompleteJourney
            journey={journey}
            correctAnswers={correctAnswers}
            title={title}
            finalScore={finalScore}
            timer={timer}
          />
        )}
      </div>
    </>
  );
}
