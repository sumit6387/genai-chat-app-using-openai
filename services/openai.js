const OpenAI = require("openai");
require("dotenv/config");

const client = OpenAI();

const chatCompletion = async(userInput) =>{
    const response = await client.chat.completions.create(
        {
            model: "gpt-4o-mini",
            messages: [
                { role: 'user', content: userInput },
            ]
        }
    );

    return response.choices[0].message.content
}

module.exports = {chatCompletion}