import { StoryModel } from "@/db/models/storyModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("journey");
  const story = await StoryModel.randomFind(category);
  return NextResponse.json({
    status: 200,
    story
  })
}
