const { chatCompletion } = require("../services/openai");

const index = async(req, res) => {
    return res.render("chat");
}

const sendMessage = async (req, res) => {
    const { userInput } = req.body;
    const response = await chatCompletion(userInput);
    console.log(response);
    return res.json({ status: "success", data: response });
}

module.exports = {
    index,
    sendMessage
}