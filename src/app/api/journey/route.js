import { StoryModel } from "@/db/models/storyModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const journey = searchParams.get("journey");
  // console.log(journey);
  const story = await StoryModel.randomFind(journey);
  // console.log(story);
  return NextResponse.json({
    status: 200,
    story
  })
  // const {journey} = req.params
  // console.log(journey);
  // console.log(story);
}
