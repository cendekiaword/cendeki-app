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
      mode: 'no-cors'
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
    <div className="border-primary flex w-60 flex-col justify-evenly gap-2 rounded-md border p-2">
      <div className="text-center text-xl">{el.title}</div>
      {el.highestScore ? (
        <HighestScore highestScore={el.highestScore} />
      ) : (
        <HighestScore highestScore={el.highestScore} />
      )}
      {el.highestScorer ? (
        <HighestScorer highestScorer={el.highestScorer} />
      ) : (
        <HighestScorer highestScorer={"-"} />
      )}
      <button
        onClick={() => {
          getStoryById(el._id);
        }}
        className="border-primary rounded-md border px-2"
      >
        Try this story
      </button>
    </div>
  );
}
