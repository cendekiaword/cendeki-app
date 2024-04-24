import { StoryModel } from "@/db/models/storyModel";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("journey");
  const data = await StoryModel.getStoryByCategory(category)
  return NextResponse.json({
    status: 200,
    data
  })
}
