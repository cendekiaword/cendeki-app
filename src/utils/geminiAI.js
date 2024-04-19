const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

// console.log(process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateStory(prompt1) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = prompt1
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.log(error);
  }
}

module.exports = generateStory;
