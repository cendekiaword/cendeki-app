import { StoryModel } from "@/db/models/storyModel";
import generateStory from "@/utils/geminiAI";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST() {
  const prompt = `
  buatkan cerita tentang sejarah dengan format json, dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan beberapa katanya diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
  "fullStory": string,
  "story": string,
  "answer" : string[]
  ]`;
  let result = await generateStory(prompt);
  result = result.replace("```json", "")
  result = result.replace("```", "")
  await StoryModel.addStory({ result: JSON.parse(result) });

  const story = StoryModel.getStoryById(result._id)

  return NextResponse.json({ data: story }, { status: 201 });
}
