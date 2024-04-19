import { StoryModel } from "@/db/models/storyModel";
import generateStory from "@/utils/geminiAI";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST() {
  const prompt = "Write a story about History in one pargaraf.";
  const result = await generateStory(prompt);
  const story = await StoryModel.addStory({ result });
  return NextResponse.json({ data: result }, { status: 201 });
}
