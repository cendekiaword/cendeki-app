"use client";
import { cn } from "@/utils/cn";
import Lottie from "lottie-react";
import React from "react";

export const LottieMediumRound = ({ animationData, className }) => {
  return (
    <div className={cn("overflow-hidden rounded-full", className)}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export const LottieHalfPage = ({ animationData, className }) => {
  return (
    <div className={cn("w-[50%]", className)}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};