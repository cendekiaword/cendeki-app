const { GoogleGenerativeAI } = require('@google/generative-ai')
require('dotenv').config()

// console.log(process.env.GEMINI_API_KEY);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })
    const prompt = "Write a story about a magic backpack."
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    console.log({text});
}
run()