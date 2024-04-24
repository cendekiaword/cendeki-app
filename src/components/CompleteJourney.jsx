import React from "react";
import JourneyTitle from "./JourneyTitle";

export default function CompleteJourney({ journey }) {
  const questions = journey.story?.split("----").map((question, idx) => {
    if (idx !== journey.story?.split("----").length - 1) {
      return (
        <React.Fragment key={idx}>
          <span className="">{question}</span>
          <span className="correct-answer relative font-bold italic">
            {journey.answer[idx]}
          </span>
        </React.Fragment>
      );
    } else {
      return <span key={idx}>{question}</span>;
    }
  });

  return (
    <div className="border-primary mx-auto max-w-[80dvw] rounded-lg border p-4 md:max-w-[60dvw]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center gap-1">
          <JourneyTitle title={journey.title} />
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
          <p className="px-4 py-2 font-bold text-white">Score: {finalScore}</p>
          <p className="px-4 py-2 font-bold text-white">Time: {timer}</p>
        </div>
      </div>
    </div>
  );
}
