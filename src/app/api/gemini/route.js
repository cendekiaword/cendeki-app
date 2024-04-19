import { StoryModel } from "@/db/models/storyModel";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
const { GoogleGenerativeAI } = require('@google/generative-ai')

// console.log(process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export async function POST() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "Write a story about a pokemon.";
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  const story = await StoryModel.addStory({ text });
  return NextResponse.json({data: text}, {status: 201});
}
