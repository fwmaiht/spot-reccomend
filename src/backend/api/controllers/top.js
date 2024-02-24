import OpenAI from 'openai';
import env from 'dotenv';

env.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

openai
    .chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Hello" }],
    })
    .then((res) => {
        console.log(res.choices[0].message.content);
    })
    .catch((e) => {
        console.log(e);
    });