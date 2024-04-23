import { StoryModel } from "@/db/models/storyModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const journey = searchParams.get("journey");
  const story = await StoryModel.randomFind(journey);
  return NextResponse.json({
    status: 200,
    story
  })
}
