import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is the default and can be omitted
});

type reqData = {
    message:string
}

export async function getCoverLetterResponse(reqData:reqData){
    const completion = await openai.chat.completions.create({
        messages: [{"role": "system", "content": "You are a career coach"},
            {"role": "user", "content": "Please help me write the perfect cover letter based on this job description?"},
            {"role": "user", "content": reqData.message}
        ],
        model: "gpt-4o",
      });
    
      return Response.json({message:completion.choices[0].message.content});
}
