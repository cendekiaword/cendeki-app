import { StoryModel } from "@/db/models/storyModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("storyId");
  const data = await StoryModel.getStoryById(id)
  return NextResponse.json({
    status: 200,
    data
  })
}
