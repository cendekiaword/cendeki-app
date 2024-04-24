import { RAPID_API } from "@/db/config/constant";
import { StoryModel } from "@/db/models/storyModel";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    // console.log('masuk');
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");
    const prompt = `ceritakan sejarah tentang ${query} sesuai dengan cerita aslinya dengan bentuk json dengan properti sebagai berikut , 
    {
     "fullStory": cerita dengan panjang 5 kalimat,
     "story": fullStory yang dihilangkan  2 kata pada tiap kalimat dari fullStory kata tersebut dan tidak berdekatan kemudian kata yang hilang diganti dengan  '----',
     "answer": [kata yang dihilangkan]
     }`;
    // const { query } = req.query

    if (req.method !== "POST")
      return res.send({
        success: false,
        message: `${req.method} Method Not Allowed`,
      });

    // console.log(query);
    const options = {
      method: "POST",
      url: "https://chatgpt-best-price.p.rapidapi.com/v1/chat/completions",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": RAPID_API,
        "X-RapidAPI-Host": "chatgpt-best-price.p.rapidapi.com",
      },
      data: {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
    };
    // console.log(RAPID_API);

    const { data } = await axios.request(options);
    // console.log(data.choices[0].message.content);
    const object = JSON.parse(data.choices[0].message.content);
    object.title = query
    object.category = 'history'
    let res =  await StoryModel.addStory(object)
    const { insertedId } = res
    let result = await StoryModel.getStoryById(insertedId)
    // console.log(res);
    
    return NextResponse.json({
      status: 200,
      answer: result,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 400,
      errMsg: "Error GPT API failed",
    });
  }
}
