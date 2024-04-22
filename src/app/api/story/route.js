import { StoryModel } from "@/db/models/storyModel";
import generateStory from "@/utils/geminiAI";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST() {
  const prompt = `
  buatkan cerita tentang pangeran diponogoro dalam satu paragraf dengan format json, dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan 5 kata diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
[
"fullStory": string,
"story": string,
"answer" : string[]
]`;
  let result = await generateStory(prompt);
  // console.log(result);
  result = result.replace("```json", "")
  result = result.replace("```", "")
  // console.log(result);
  const res = await StoryModel.addStory({ result: JSON.parse(result) });
  // console.log(res.insertedId);
  
  const story = await StoryModel.getStoryById(res.insertedId)

  return NextResponse.json({ data: story }, { status: 201 });
}
