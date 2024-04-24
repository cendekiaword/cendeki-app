"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { BASE_URL } from "@/db/config/constant";
import Cookies from "universal-cookie";
import Skeleton from "@/components/ui/skeleton";
import { ImSpinner9 } from "react-icons/im";
import PromptAPI from "@/components/PromptAPI";
import JourneyTitle from "@/components/JourneyTitle";
import CompleteJourney from "@/components/CompleteJourney";
import { CorrectFeedback, IncorrectFeedback } from "@/components/Feedback";
import IncompleteJourney from "@/components/IncompleteJourney";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import {
  capitalize,
  clearTimer,
  getAllStoryFromCategory,
  getTimeUp,
  postScore,
} from "../actions";
import { HighestScorer, HighestScore } from "@/components/Highest";
import { JourneyCard } from "@/components/JourneyCard";

export default function page({ params }) {
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
  const [journeyList, setJourneyList] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [displayComplete, setDisplayComplete] = useState(false);
  const [border, setBorder] = useState([]);
  const [scores, setScores] = useState([]);
  const [category, setCategory] = useState("");
  const [finalScore, setFinalScore] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const [timer, setTimer] = useState("00:10");
  const [question, setQuestion] = useState("");
  const [title, setTitle] = useState("");
  const [history, setHistory] = useState([]);

  const onClickStart = () => {
    clearTimer(getTimeUp(), setTimer, setGameEnd, Ref);
  };

  const router = useRouter();

  useEffect(() => {
    if (gameEnd) {
      postScore(finalScore, storyId);
      Swal.fire({
        title: "Time's up!",
        text: `Your final score is ${finalScore}`,
        icon: "info",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "okay",
      }).then((result) => {
        if (result.isConfirmed) {
          // router.push("/profile/history");
        }
      });
    }
    const sum = scores.reduce((acc, score) => acc + score, 0);
    setFinalScore(sum);
  }, [scores, gameEnd]);

  useEffect(() => {
    const currentCategory = params.journey;
    getAllStoryFromCategory(currentCategory, setJourneyList);
    capitalize(currentCategory, setCategory);
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
    <div className="mx-auto">
      <div className="mx-auto mb-8 mt-8 flex max-w-[80dvw] flex-col gap-8 md:max-w-[60dvw]">
        <h1 className="text-center text-4xl font-bold md:text-7xl 2xl:text-8xl">
          Test Your Knowledge
        </h1>
      </div>
      <div className="mb-10 grid w-full grid-cols-3 items-center justify-center gap-4 px-8 2xl:grid-cols-4">
        {journeyList.length != 0 &&
          journeyList.map((el, idx) => {
            return (
              <JourneyCard
                key={idx}
                el={el}
                setJourneyList={setJourneyList}
                setGenerating={setGenerating}
                setLoading={setLoading}
                setStoryId={setStoryId}
                setJourney={setJourney}
                setCorrectAnswers={setCorrectAnswers}
                setAnswers={setAnswers}
                setScores={setScores}
                setTitle={setTitle}
              />
            );
          })}
      </div>

      {generating && <LoadingSkeleton />}
      {!loading && (
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
      {/* {displayComplete && <CompleteJourney journey={journey} />} */}
    </div>
  );
}
