import { StoryModel } from "@/db/models/storyModel";
import generateStory from "@/utils/geminiAI";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST() {
  const prompt = `
  create a ${"history"} lesson in a style of story with javascript object format of: {
    fullStory: string,
    question: string.
    answer: string[]
  } with question filled with story from fullStory but remove 5 parts of it and replace it with 4 "-" dashes to create a question to be filled and add it to the answer.`;
  let result = await generateStory(prompt);
  console.log(result);
  result = result.replace("```json", "")
  result = result.replace("```", "")
  await StoryModel.addStory({ result: JSON.parse(result) });

  const story = StoryModel.getStoryById(result._id)

  return NextResponse.json({ data: story }, { status: 201 });
}
