import { NextRequest, NextResponse } from "next/server";
import type { NextApiResponse } from 'next'
import OpenAI from "openai";

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
  // console.log({prompt})

  try {
    const completion = await openai.chat.completions.create({
      messages: [{
        role: "user",
        content: prompt
      }],
      model: "gpt-3.5-turbo",
      max_tokens: 100,
      stream: false,
    });


    return NextResponse.json({
      completion
    }, {
      status: 200
    });

  } catch (error) {
    // console.log({error});
    return NextResponse.json({
      message: "Error"
    }, {
      status: 500
    });
  }

  // if( typeof prompt === "string") {


  //   try {
    
  //       const response = await openai.images.generate({
  //         model:"dall-e-3",
  //         prompt: prompt,
  //         n:1,
  //         size: "1024x1024"
  //       });

  //     return NextResponse.json({
  //       aiPrompt: response.data[0].revised_prompt, 
  //       img: response.data[0].url 
  //     }, {
  //       status: 200
  //     });
    
  //   } catch (error) {
  //     console.log({error});
  //     return NextResponse.json({
  //       error
  //     }, {
  //       status: 404
  //     });
  //   }
  // } else {

  //   return NextResponse.json({
  //     text: "Input provided is not allowed" 
  //   }, {
  //     status: 500
  //   })

  // }
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