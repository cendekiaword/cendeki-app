import { ScoreModel } from "@/db/models/scoreModel";
import { StoryModel } from "@/db/models/storyModel";
import generateStory from "@/utils/geminiAI";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req, { params }) {
  console.log(params);
  if (params.params === 'history') {

    const prompt = `
  buatkan cerita tentang sejarah kemerdekaan Indonesia dalam satu paragraf dengan format json, dengan properti title adalah judul cerita tersebut, dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan 5 kata diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
    "title" : string,
  "fullStory": string,
  "story": string,
  "answer" : string[],
  "category" : history
  ]`;

    const prompt2 = `
  buatkan cerita tentang sejarah Kerajaan Majapahit dalam satu paragraf dengan format json, dengan properti title adalah judul cerita tersebut, dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan 5 kata diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
    "title" : string,
  "fullStory": string,
  "story": string,
  "answer" : string[],
  "category" : history
  ]`;

    const prompt3 = `
  buatkan cerita tentang sejarah Kerajaan Singosari dalam satu paragraf dengan format json, dengan properti title adalah judul cerita tersebut, dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan 5 kata diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
    "title" : string,
  "fullStory": string,
  "story": string,
  "answer" : string[],
  "category" : history
  ]`;

    const prompt4 = `
  buatkan cerita tentang sejarah Indonesia modern dalam satu paragraf dengan format json, dengan properti title adalah judul cerita tersebut,dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan 5 kata diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
    "title" : string,
  "fullStory": string,
  "story": string,
  "answer" : string[],
  "category" : history
  ]`;

    const prompt5 = `
  buatkan cerita tentang sejarah orde baru dalam satu paragraf dengan format json, dengan properti title adalah judul cerita tersebut, dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan 5 kata diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
    "title" : string,
  "fullStory": string,
  "story": string,
  "answer" : string[],
  "category" : history
  ]`;

    const arr = [prompt, prompt2, prompt3, prompt4, prompt5]
    function getRandomPrompt(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }

    const randomPrompt = getRandomPrompt(arr);
    console.log(randomPrompt);
    let result = await generateStory(randomPrompt);
    // console.log(result);
    result = result.replace("```json", "")
    result = result.replace("```", "")
    console.log(result);
    const res = await StoryModel.addStory({ result: JSON.parse(result) });
    const story = await StoryModel.getStoryById(res.insertedId)


    return NextResponse.json({ data: story }, { status: 201 });

  } else if (params.params === 'language') {
    const prompt = `
  buatkan cerita tentang sejarah Bahasa Indonesia dalam satu paragraf dengan format json, dengan properti title adalah judul cerita tersebut, dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan 5 kata diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
    "title" : string,
  "fullStory": string,
  "story": string,
  "answer" : string[],
  "category" : language
  ]`;

    const prompt2 = `
  buatkan cerita tentang Bahasa Indonesia modern dalam satu paragraf dengan format json, dengan properti title adalah judul cerita tersebut, dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan 5 kata diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
    "title" : string,
  "fullStory": string,
  "story": string,
  "answer" : string[],
  "category" : language
  ]`;

    const prompt3 = `
  buatkan cerita tentang asal bahasa indonesia dalam satu paragraf dengan format json, dengan properti title adalah judul cerita tersebut, dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan 5 kata diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
    "title" : string,
  "fullStory": string,
  "story": string,
  "answer" : string[],
  "category" : language
  ]`;

    const prompt4 = `
  buatkan cerita tentang persamaan bahasa melayu dan indonesia dalam satu paragraf dengan format json, dengan properti title adalah judul cerita tersebut, dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan 5 kata diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
    "title" : string,
  "fullStory": string,
  "story": string,
  "answer" : string[],
  "category" : language
  ]`;

    const prompt5 = `
  buatkan cerita tentang persamaan bahasa jawa dan indonesia dalam satu paragraf dengan format json, dengan properti title adalah judul cerita tersebut, property fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan 5 kata diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
  "title" : string,
  "fullStory": string,
  "story": string,
  "answer" : string[],
  "category" : language
  ]`;

    const arr = [prompt, prompt2, prompt3, prompt4, prompt5]
    function getRandomPrompt(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }

    const randomPrompt = getRandomPrompt(arr);
    console.log(randomPrompt);
    let result = await generateStory(randomPrompt);
    // console.log(result);
    result = result.replace("```json", "")
    result = result.replace("```", "")
    // console.log(result);
    const res = await StoryModel.addStory({ result: JSON.parse(result) });
    const userId = req.headers.get('x-id-user')
    console.log(userId, "<<<<<< user");
    const storyId = res.insertedId
    const score = await ScoreModel.addScore({ res, userId, storyId })

    const story = await StoryModel.getStoryById(res.insertedId)


    return NextResponse.json({ data: story }, { status: 201 });
  } else if (params.params === 'social') {
    const prompt = `
  buatkan cerita tentang adab sosial dalam satu paragraf dengan format json, dengan properti title adalah judul cerita tersebut, dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan 5 kata diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
    "title" : string,
  "fullStory": string,
  "story": string,
  "answer" : string[],
  "category" : social
  ]`;

    const prompt2 = `
  buatkan cerita tentang kehidupan bersosial di Indonesia modern dalam satu paragraf dengan format json, dengan properti title adalah judul cerita tersebut, dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan 5 kata diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
    "title" : string,
  "fullStory": string,
  "story": string,
  "answer" : string[],
  "category" : social
  ]`;

    const prompt3 = `
  buatkan cerita tentang kehidupan sosial prasejarah dalam satu paragraf dengan format json, dengan properti title adalah judul cerita tersebut, dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan 5 kata diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
    "title" : string,
  "fullStory": string,
  "story": string,
  "answer" : string[],
  "category" : social
  ]`;

    const prompt4 = `
  buatkan cerita tentang sosial media dalam satu paragraf dengan format json, dengan properti title adalah judul cerita tersebut, dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan 5 kata diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
    "title" : string,
  "fullStory": string,
  "story": string,
  "answer" : string[],
  "category" : social
  ]`;

    const prompt5 = `
  buatkan cerita tentang kesenjangan sosial di Indonesia dalam satu paragraf dengan format json, dengan properti title adalah judul cerita tersebut, property fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan 5 kata diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
  [
  "title" : string,
  "fullStory": string,
  "story": string,
  "answer" : string[],
  "category" : social
  ]`;

    const arr = [prompt, prompt2, prompt3, prompt4, prompt5]
    function getRandomPrompt(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }

    const randomPrompt = getRandomPrompt(arr);
    console.log(randomPrompt);
    let result = await generateStory(randomPrompt);
    // console.log(result);
    result = result.replace("```json", "")
    result = result.replace("```", "")
    // console.log(result);
    const res = await StoryModel.addStory({ result: JSON.parse(result) });
    const userId = req.headers.get('x-id-user')
    // console.log(userId, "<<<<<< user");
    const storyId = res.insertedId
    const score = await ScoreModel.addScore({ res, userId, storyId })

    const story = await StoryModel.getStoryById(res.insertedId)


    return NextResponse.json({ data: story }, { status: 201 });
  } else {
    return NextResponse.json({ data: 'Category is unavailable' }, { status: 404 });
  }

}
