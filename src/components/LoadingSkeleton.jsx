import React from "react";
import JourneyTitle from "./JourneyTitle";
import Skeleton from "./ui/skeleton";
import { ImSpinner9 } from "react-icons/im";

export default function LoadingSkeleton() {
  return (
    <div className="mx-auto max-w-[80dvw] rounded-lg border bg-opacity-30 p-4 md:max-w-[60dvw]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col justify-center gap-1">
          <JourneyTitle />
          <Skeleton className="rounded-md text-gray-300">
            Fill the missing blank down below
          </Skeleton>
        </div>
      </div>
      <div className="border-primary mt-4 rounded-lg border">
        <Skeleton className="relative flex min-h-60 items-center justify-center rounded-md py-8">
          <ImSpinner9 className="size-60 animate-spin text-blue-400" />
          <p className="absolute text-2xl font-bold text-blue-300">
            Generating
          </p>
        </Skeleton>
        <Skeleton className="bg-primary flex w-full justify-between rounded-b">
          <p className="px-4 py-2 font-bold text-white">Score: 0</p>
          <p className="px-4 py-2 font-bold text-white">Time: 00:00</p>
        </Skeleton>
      </div>
    </div>
  );
}
