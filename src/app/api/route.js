import OpenAI from "openai";

export async function GET() {
  const openai = new OpenAI();
  // const completion = await openai.createChatCompletion({
  //   model: "gpt-3.5-turbo",
  //   prompt: "What is 2 + 2",
  // });
  // const responseText = completion.data.choices[0].text;
  // console.log(responseText, "<<< INI OPENAI");
    try {
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
      });

      return Response.json({ data: chatCompletion.choices[0]})
    } catch(err) {
      console.log(" ini error ", err)
      return Response.json({error: 'error'})
    }
  

}