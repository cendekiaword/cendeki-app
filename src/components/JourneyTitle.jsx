import React from "react";
import Skeleton from "@/components/ui/skeleton";
export default function JourneyTitle({ title }) {

  console.log(title, "SKELETON")
  return !title || title.length == 0 ? (
    <Skeleton className="rounded-md loading-color text-2xl font-bold">
      <p className="invisible w-96">placeholder</p>
    </Skeleton>
  ) : (
    <h2 className="text-2xl font-bold">{title}</h2>
  );
}
