const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

// console.log(process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateStory(prompt1) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = prompt1
    const result = await model.generateContent(prompt1);
    const response = await result.response;
    const text = response.text();
  console.log(text);
    return text;
  } catch (error) {
    console.log(error);
  }
}
// const prompt2 = `
// buatkan cerita tentang pangeran diponogoro dengan format json, dengan properti fullStory adalah cerita penuh tanpa potongan, properti story adalah cerita penuh yang di hilangkan beberapa katanya diganti dengan ---- dan kata tersebut dimasukan dalam properti answer dalam bentuk array
// [
// "fullStory": string,
// "story": string,
// "answer" : string[]
// ]`;
// console.log(generateStory(prompt2)); 
module.exports = generateStory;
