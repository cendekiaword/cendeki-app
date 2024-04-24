import { StoryModel } from "@/db/models/storyModel";
import { ObjectId } from "mongodb";
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

export async function POST(req) {
  const body = await req.json()
  console.log(body)
  const storyId = new ObjectId(String(body))
  console.log(storyId)
  // const { searchParams } = new URL(req.url);
  // const category = searchParams.get("journey");
  const data = await StoryModel.getStoryById(storyId)
  return NextResponse.json({
    status: 200,
    data
  })
}