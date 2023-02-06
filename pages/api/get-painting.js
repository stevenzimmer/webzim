const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY
});
// console.log(process.env.OPEN_AI_KEY);
const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {

  if( typeof req.body.prompt === "string") {
    const response = await openai.createImage({
      prompt: req.body.prompt,
      n:1,
      size: "1024x1024"
    });
  
    res.status(200).json({ payload: response.data, img: response.data.data[0].url });
  } else {
    res.status(200).json({ text: "Input provided is now allowed" });
  }
}