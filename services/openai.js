const OpenAI = require("openai");
require("dotenv/config");

const client = OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

const chatCompletion = async(userInput, model) =>{
    console.log(model)
    const response = await client.chat.completions.create(
        {
            model: "gemini-2.0-flash",
            messages: [
                { role: 'user', content: userInput },
            ]
        }
    );

    return response.choices[0].message.content
}

// const client = OpenAI();

// const chatCompletion = async(userInput, model) =>{
//     console.log(model)
//     const response = await client.chat.completions.create(
//         {
//             model: model,
//             messages: [
//                 { role: 'user', content: userInput },
//             ]
//         }
//     );

//     return response.choices[0].message.content
// }

module.exports = {chatCompletion}