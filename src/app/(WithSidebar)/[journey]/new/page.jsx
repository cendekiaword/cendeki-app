"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { BASE_URL } from "@/db/config/constant";
import PromptAPI from "@/components/PromptAPI";
import CompleteJourney from "@/components/CompleteJourney";
import IncompleteJourney from "@/components/IncompleteJourney";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import {
  capitalize,
  clearTimer,
  getTimeUp,
  postScore,
} from "../actions";

export default function Page({ params }) {
  const Ref = useRef(null);
  const [journey, setJourney] = useState({
    title: "",
    fullStory: "",
    story: "",
    answer: [""],
  });
  const [answers, setAnswers] = useState([]);
  const [storyId, setStoryId] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [displayComplete, setDisplayComplete] = useState(false);
  const [gameStart, setGameStart] = useState(false)
  const [border, setBorder] = useState([]);
  const [scores, setScores] = useState([]);
  const [category, setCategory] = useState("");
  const [finalScore, setFinalScore] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const [timer, setTimer] = useState("00:30");
  const [question, setQuestion] = useState("");
  const [title, setTitle] = useState("");

  const generatePrompt = async (e) => {
    if (e.key === "Enter" || e.type == "click") {
      setGenerating(true);
      setLoading(true);
      setQuestion("");
      setJourney("");

      let res;
      switch (params.journey) {
        case "history":
          res = await fetch(
            `${BASE_URL}/api/chatgpt-history?query=${question}`,
            {
              method: "POST",
              cache: "no-store",
            },
          );
          break;

        case "language":
          res = await fetch(
            `${BASE_URL}/api/chatgpt-language?query=${question}`,
            {
              method: "POST",
              cache: "no-store",
            },
          );
          break;
        default:
          setLoading(false);
          break;
      }
      if (!res.ok) {
        alert();
        setLoading(false);
        return;
      }
      const { answer: result } = await res.json();

      console.log(result, "RESULT PROMPT");
      setJourney(result.story);
      setStoryId(result._id);
      setCorrectAnswers(result.answer);
      setAnswers(Array(result.answer.length).fill(""));
      setScores(Array(result.answer.length).fill(0));
      setTitle(result.title);
      setGenerating(false);
      setLoading(false);
    }
  };

  const onClickStart = () => {
    clearTimer(getTimeUp(), setTimer, setGameEnd, Ref);
    setGameStart(true)
  };

  const router = useRouter();

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
    capitalize(params.journey, setCategory);
    return () => {
      if (Ref.current) {
        clearInterval(Ref.current);
      }
    };
  }, []);

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
          {category && (
            <PromptAPI
              setQuestion={setQuestion}
              category={category}
              generatePrompt={generatePrompt}
            />
          )}
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
            gameStart={gameStart}
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
