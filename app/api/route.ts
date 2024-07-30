import OpenAI from "openai";
import { readPDF } from "@/utils/readPDF";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  const resume = await readPDF(data.urlPath);

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a career coach and you specialize in writing covers letter that sound confident and professional, while being concise and easy to read. You will only produce a cover letter if a resume is provided and the job description is more than 2 sentences. Also, there is no need to add address information to the cover letter, only the cover letter content itself.",
      },
      {
        role: "user",
        content:
          "Please write the perfect cover letter based on this job description",
      },
      { role: "user", content: data.message },
      {
        role: "user",
        content:
          "Ensure that the cover letter written uses the information supplied in the resume below, you only need to extract information from the resume that is relevant to the job description, ensure keywords from the description are used in the cover letter as well",
      },
      { role: "user", content: resume },
    ],
    model: "gpt-4o",
  });

  return Response.json({ message: completion.choices[0].message.content });
}
