import { NextRequest, NextResponse } from "next/server";
import type { NextApiResponse } from 'next'
// import { Configuration, OpenAIApi } from "openai";
import OpenAI from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.OPEN_AI_KEY
// });

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY  
})
 
type ResponseData = {
  data: string
}
 
export async function POST(
  req: NextRequest,
  res: NextApiResponse<ResponseData>
) {
  const {prompt} = await req.json();
  console.log({prompt});

  if( typeof prompt === "string") {


    try {
    
        const response = await openai.images.generate({
          model:"dall-e-3",
          prompt: prompt,
          n:1,
          size: "1024x1024"
        });

        // const response = {
        //   data: "hello",
        //   img: "https://images.unsplash.com/photo-1632836926809-4b9b0b0b0b0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMjI0NjB8MHwxfHNlYXJjaHwxfHxwYWludGluZyUyMG1hcmtldHxlbnwwfHx8fDE2MzQxNjY0NjI&ixlib=rb-1.2.1&q=80&w=1080"
        // }

        console.log("---------------------------------")
        console.log(response);

        // console.log({response});

        // console.log(response.data.error);


      return NextResponse.json({
        aiPrompt: response.data[0].revised_prompt, 
        img: response.data[0].url 
      }, {
        status: 200
      });
      // return NextResponse.json({
      //   payload: response.data, 
      //   img: response.img
      // }, {
      //   status: 200
      // });
    } catch (error) {
      console.log({error});
      return NextResponse.json({
        error
      }, {
        status: 404
      });
    }
  } else {

    return NextResponse.json({
      text: "Input provided is not allowed" 
    }, {
      status: 500
    })

  }
}

// // console.log(process.env.OPEN_AI_KEY);


// export default async function handler(req, res) {

//   console.log(req.body.prompt);

//   if( typeof req.body.prompt === "string") {
//     const response = await openai.createImage({
//       prompt: req.body.prompt,
//       n:1,
//       size: "1024x1024"
//     });

//     console.log(response.data);
  
//     res.status(200).json({ payload: response.data, img: response.data.data[0].url });
//   } else {
//     res.status(200).json({ text: "Input provided is not allowed" });
//   }
// }