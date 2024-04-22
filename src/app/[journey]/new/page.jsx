"use client";
import { LottieMediumRound } from "@/components/Lottie";
import React, { useEffect, useRef, useState } from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import animationData from "@/lotties/reading1.json";

export default function page() {
  const journey = {
    fullStory:
      "Tengu are mythical creatures found in Japanese folklore, often depicted as bird-like humanoids with both human and avian characteristics. Historically, they were thought to be disruptive demons and harbingers of war, but over time their image transformed into protective deities of the mountains and forests. Tengu are typically portrayed with red faces and long noses, and they are known to be skilled warriors. The Tengu are associated with the Shugendo tradition, where they are considered both protective deities and teachers of martial arts. They inhabit sacred mountains, guarding Shinto shrines and Buddhist temples. According to legends, Tengu can move swiftly through the air, wield magical powers, and have the ability to shape-shift. Their lore is rich with stories of encounters with samurai and monks, where they often impart wisdom or serve as formidable opponents.",
    story:
      "Tengu are mythical creatures found in Japanese folklore, often depicted as ---- humanoids with both human and avian characteristics. Historically, they were thought to be disruptive ---- and harbingers of war, but over time their image transformed into protective ---- of the mountains and forests. Tengu are typically portrayed with ---- faces and long noses, and they are known to be skilled ----. The Tengu are associated with the ---- tradition, where they are considered both protective deities and teachers of ---- arts. They inhabit sacred mountains, guarding Shinto ---- and Buddhist temples. According to legends, Tengu can move swiftly through the ----, wield magical powers, and have the ability to ----. Their lore is rich with stories of encounters with samurai and monks, where they often impart wisdom or serve as formidable opponents.",
    answer: [
      "bird-like",
      "demons",
      "deities",
      "red",
      "warriors",
      "Shugendo",
      "martial",
      "shrines",
      "air",
      "shape-shift",
    ],
    references: [
      "https://www.britannica.com/topic/tengu",
      "https://yokai.com/tengu/",
    ],
  };
  const Ref = useRef(null);
  const [answers, setAnswers] = useState(Array(journey.answer.length));
  const [feedback, setFeedback] = useState(
    Array(journey.answer.length).fill(""),
  );
  const [border, setBorder] = useState(Array(journey.answer.length).fill(""));
  const [scores, setScores] = useState(Array(journey.answer.length).fill(0));
  const [finalScore, setFinalScore] = useState(0);
  const [timer, setTimer] = useState("00:00:00");
  useEffect(() => {
    const sum = scores.reduce((acc, score) => acc + score, 0);
    setFinalScore(sum);
  }, [scores]);
  function handleSubmit(e) {
    // e.preventDefault();
    if (e.key == "Enter") {
      const newFeedback = answers.map((answer, idx) => {
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
          borderClass = "border-2 border-teal-400 placeholder:invert";
        } else if (res === "Incorrect" && answer && answer.length !== 0) {
          borderClass = "border-2 border-rose-400 placeholder:invert";
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
          score = 100;
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
          <span className="invert">{question}</span>
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
                "inline h-6 w-40 max-w-fit rounded-full bg-white px-3 outline-none " +
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
            {border[idx] == "border-2 border-rose-400 placeholder:invert" && (
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
        <span className="invert" key={"x" + idx + 3}>
          {question}
        </span>
      );
    }
  });

  return (
    <>
      <div className="relative" style={{ height: "calc(100vh - 48px)" }}>
        <div className="grid h-full grid-cols-2 overflow-auto bg-sky-300">
          <section className="col-span-1 flex flex-col items-center justify-center">
            <h2 className="flex items-center justify-center ">History</h2>
            <LottieMediumRound
              className="w-[60%]"
              animationData={JSON.parse(JSON.stringify(animationData))}
            />
          </section>
          <section className="col-span-1 flex max-w-full flex-col items-center justify-center px-8">
            <h2 className="flex items-center justify-center ">Tengu</h2>
            <content className="flex items-center justify-center">
              <div className="rounded-2xl bg-slate-800 p-8">
                <b className="w-[80%] text-pretty md:text-justify">
                  {questions}
                </b>
              </div>
            </content>
            <div className="mt-4 flex w-full">
              <div className="flex w-[30%] justify-between rounded-full bg-slate-800 px-4">
                <b className="text-2xl invert">Score:</b>
                <b className="text-2xl invert">{finalScore}</b>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
