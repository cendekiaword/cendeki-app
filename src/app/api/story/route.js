import { StoryModel } from "@/db/models/storyModel";
import generateStory from "@/utils/geminiAI";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST() {
  const prompt = `
  buatkan cerita tentang biologi dengan format json, dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan beberapa katanya diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
  "fullStory": string,
  "story": string,
  "answer" : string[]
  ]`;
  let result = await generateStory(prompt);
  // console.log(result);
  result = result.replace("```json", "")
  result = result.replace("```", "")
  const apa = await StoryModel.addStoryByCatmail("history","der@gmail.com",{ result: JSON.parse(result) });
// console.log(apa._id);
  const story = StoryModel.getStoryById(apa._id.toString())
  console.log(story);

  return NextResponse.json({ data: result }, { status: 201 });
}
