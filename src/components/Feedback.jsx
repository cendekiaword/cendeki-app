import React from "react";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

export const CorrectFeedback = ({ scores }) => {
  return (
    <>
      <span className="correct-feedback absolute right-6 top-0 text-sm">
        {scores}
      </span>
      <FaCircleCheck className="correct-feedback absolute right-1 top-[0.1rem] size-4 text-xl" />
    </>
  );
};

export const IncorrectFeedback = ({ scores }) => {
  return (
    <>
      <span className="incorrect-feedback absolute right-6 top-0 text-sm">
        {scores}
      </span>
      <FaCircleXmark className="incorrect-feedback absolute right-1 top-[0.1rem] size-4 text-xl" />
    </>
  );
};
