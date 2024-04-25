import React from "react";
import { HighestScore, HighestScorer } from "./Highest";
import { BASE_URL } from "@/db/config/constant";

export function JourneyCard({
  el,
  setJourneyList,
  setGenerating,
  setLoading,
  setStoryId,
  setJourney,
  setCorrectAnswers,
  setAnswers,
  setScores,
  setTitle,
}) {
  const getStoryById = async (storyId) => {
    setJourneyList([]);
    setGenerating(true);
    setLoading(true);
    const res = await fetch(`${BASE_URL}/api/journey/collect`, {
      method: "POST",
      cache: "no-store",
      body: JSON.stringify(storyId),
    });
    if (!res.ok) {
      alert();
      // setLoading(false);
      return;
    }

    const { data } = await res.json();

    console.log(data, "RESULT PROMPT HISTORY");
    setJourney(data.story);
    setStoryId(data._id);
    setCorrectAnswers(data.answer);
    setAnswers(Array(data.answer.length).fill(""));
    setScores(Array(data.answer.length).fill(0));
    setTitle(data.title);
    setGenerating(false);
    setLoading(false);
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/roman-style.png")',
        // maxHeight: "40dvw",
        // maxWidth: "80%",
        backgroundSize: "cover",
        position: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="border-primary flex h-72 w-60 flex-col justify-between gap-2 rounded-md border p-2"
    >
      <div className="text-center text-xl text-white font-bold bg-black/60 rounded-md py-2">{el.title}</div>
      <div className="h-32 bg-white px-3 py-2 rounded-md overflow-clip flex flex-col">
      <p className="text-center text-md font-bold mb-2">Record</p>
        {el.highestScore && el.highestScorer ? (
          <>
            <HighestScore highestScore={el.highestScore} />
            <HighestScorer highestScorer={el.highestScorer} />
          </>
        ) : (
          <>
            <HighestScore highestScore={el.highestScore} />
            <HighestScorer highestScorer={"-"} />
          </>
        )}
      <button
        onClick={() => {
          getStoryById(el._id);
        }}
        className="border-primary rounded-md border mt-2 px-2"
      >
        Try this story
      </button>
      </div>
    </div>
  );
}
