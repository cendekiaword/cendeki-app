import React from "react";
import { ImSpinner9 } from "react-icons/im";

export default function loading() {
  return (
    <div className="flex w-dvw min-h-dvh items-center justify-center bg-sky-300 md:min-h-[94.8dvh]">
      <div className="relative flex items-center justify-center">
        <ImSpinner9 className="size-40 animate-spin invert" />
        <p className="absolute text-2xl font-bold">Loading</p>
      </div>
    </div>
  );
}
