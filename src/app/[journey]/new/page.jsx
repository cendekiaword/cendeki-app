"use client";
import { LottieMediumRound } from "@/components/Lottie";
import React, { useEffect, useRef, useState } from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { BASE_URL } from "@/db/config/constant";
import Cookies from "universal-cookie";
import Skeleton from "@/components/ui/skeleton";
import { ImSpinner9 } from "react-icons/im";

export default function page({ params }) {
  const Ref = useRef(null);
  const [journey, setJourney] = useState({
    title: "",
    fullStory: "",
    story: "",
    answer: [""],
  });
  const [answers, setAnswers] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skel, setSkel] = useState(false);
  const [border, setBorder] = useState([]);
  const [scores, setScores] = useState([]);
  const [category, setCategory] = useState("");
  const [finalScore, setFinalScore] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const [timer, setTimer] = useState("00:10");
  const [question, setQuestion] = useState("");
  const [questionPreview, setQuestionPreview] = useState("");
  const [history, setHistory] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [journey, setJourney] = useState();

  const enterHit = (e) => {
    // console.log('masuk hit');
    if (e.key === "Enter") {
      onClickGenerate();
    }
  };

  const toUpperCase = (word) => {
    const firstLetter = word.charAt(0);

    const firstLetterCap = firstLetter.toUpperCase();

    const remainingLetters = word.slice(1);

    const capitalizedWord = firstLetterCap + remainingLetters;
    setCategory(capitalizedWord);
  };

 
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
      postScore();
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
    // clearTimer();
    // Initialize timer
    toUpperCase(params.journey);
    return () => {
      if (Ref.current) {
        clearInterval(Ref.current);
      }
    };
  }, []);

  async function postScore() {
    const cookies = new Cookies();
    // console.log(finalScore);
    return await fetch(`${BASE_URL}/api/scoring`, {
      cache: "no-store",
      headers: {
        Cookie: cookies.toString(),
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ finalScore, storyId: journey.id }),
    });
  }

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

  const onClickGenerate = async () => {
    console.log('masuk generate');
    setLoading(true);
    setQuestionPreview(question);
    setQuestion("");
    setJourney("");
    if(params.journey === 'history'){
      const res = await fetch(
        `${BASE_URL}/api/chatgpt-history?query=${question}`,
        {
          method: "POST",
          cache: "no-store",
        },
      );
      const result = await res.json();
      if (!res.ok) {
        alert();
        setLoading(false);
        return;
      }
      setLoading(false);
      setJourney(result.answer.story);
      setHistory([{ question, answer: result.answer.story }, ...history]);
      setAnswers(result.answer.answer)
    }
    if(params.journey === 'language'){
      const res = await fetch(
        `${BASE_URL}/api/chatgpt-language?query=${question}`,
        {
          method: "POST",
          cache: "no-store",
        },
      );
      const result = await res.json();
      if (!res.ok) {
        alert();
        setLoading(false);
        return;
      }
      setLoading(false);
      setJourney(result.answer.story);
      setHistory([{ question, answer: result.answer.story }, ...history]);
      setAnswers(result.answer.answer)
    }
    return
    // console.log(res);
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

  const questions = journey.story?.split("----").map((question, idx) => {
    if (idx !== journey.story?.split("----").length - 1) {
      return (
        <React.Fragment key={idx}>
          <span className="">{question}</span>
          <span className="correct-answer relative font-bold italic">
            {/* <input
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
            /> */}
            {journey.answer[idx]}
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
        <span className="" key={"q" + idx}>
          {question}
        </span>
      );
    }
  });
  // console.log(skel, "SKEL");
  return (
    <>
      <div className="mx-auto mb-8 mt-8 flex max-w-[80dvw] flex-col gap-8 md:max-w-[60dvw]">
        <h1 className="text-center text-8xl font-bold">Test Your Knowledge</h1>
        {/* <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          magnam aliquam a praesentium alias quibusdam impedit esse itaque,
          necessitatibus nulla eos explicabo nihil, provident laborum. Tempore
          error non ullam minus.
        </p> */}
      </div>
      <div className="mb-10 flex w-full flex-col items-center justify-center gap-2">
        {category && (
          <>
            <h2 className="text-2xl font-bold">Subject: {category}</h2>
            <p>
              Create your unique learning path for this subject using
              AI-generated stories here:
            </p>
            <input
              type="text"
              className="border-primary h-8 w-[60%] rounded-lg border text-center"
              onKeyDown={enterHit}
              placeholder="Ask any someone/something history..."
              onChange={(e) => setQuestion(e.target.value)}
              value={question}
            />
            <div className="mt-4 flex items-center gap-16">
              <button
                className="border-primary w-48 rounded-md border px-1 hover:shadow-md hover:shadow-sky-400"
                onClick={onClickGenerate}
              >
                Generate
              </button>
              {/* <p>OR</p>
              <button
                onClick={() => {
                  setSkel(true);
                }}
                className="border-primary w-48 rounded-md border px-1 hover:shadow-md hover:shadow-sky-400"
              >
                Other user's journey
              </button> */}
            </div>
          </>
        )}
      </div>

      {loading && (
        <div className="mx-auto max-w-[80dvw] rounded-lg border bg-opacity-30 p-4 md:max-w-[60dvw]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col justify-center gap-1">
              <Skeleton className="rounded-md bg-gray-300 text-2xl font-bold">
                <p className="invisible w-96">placeholder</p>
              </Skeleton>
              <Skeleton className="rounded-md text-gray-300">
                Fill the missing blank down below
              </Skeleton>
            </div>
            <button
              onClick={onClickStart}
              className="border-primary h-12 w-32 rounded-xl border hover:shadow hover:shadow-sky-400"
            >
              Start
            </button>
          </div>
          <div className="border-primary mt-4 rounded-lg border">
            {journey.answer?.length != 1 ? (
              <div className="p-4 text-justify indent-10 leading-loose tracking-tight">
                {questions}
              </div>
            ) : (
              <Skeleton className="relative flex min-h-60 items-center justify-center rounded-md py-8">
                <ImSpinner9 className="size-60 animate-spin text-blue-400" />
                <p className="absolute text-2xl font-bold">Generating</p>
              </Skeleton>
            )}
            <Skeleton className="bg-primary flex w-full justify-between rounded-b">
              <p className="px-4 py-2 font-bold text-white">
                Score: {finalScore}
              </p>
              <p className="px-4 py-2 font-bold text-white">Time: {timer}</p>
            </Skeleton>
          </div>
        </div>
      )}
      {!loading && (
        <div className="border-primary mx-auto max-w-[80dvw] rounded-lg border p-4 md:max-w-[60dvw]">
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
      )}
    </>
  );
}
