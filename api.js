const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const {
    Configuration,
    OpenAIApi
} = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post('/generate', async (req, res) => {
    const {
        prompt,
        model,
        temperature,
        max_tokens
    } = req.body;

    const generateResponse = async (prompt) => {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        });

        return response.data.choices[0].text;
    }
    res.json({
        bot: response.data.choices[0].text
    });
})

app.listen(3000, () => {
    console.log('API listening on port 3000!');
})
