import React from "react";

export function HighestScorer({ highestScorer }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-sm">Highest Scorer:</span>
      {highestScorer}
    </div>
  );
}

export function HighestScore({ highestScore }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-sm">Highest Score:</span>
      {highestScore}
    </div>
  );
}
