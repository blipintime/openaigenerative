import dotenv from 'dotenv'
import OpenAI from "openai"

dotenv.config()
//console.log('---->API_KEY', process.env.API_KEY)

const openai = new OpenAI({
  apiKey: process.env.API_KEY
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {"role": "user", "content": "write 5 sentences about a Telugu girl that married a Hungarian guy"},
  ],
});

completion.then((result) => console.log(result.choices[0].message));
