# openai-zapier-webhook

This project integrates OpenAI's AI models with Zapier using an Express.js webhook.

## Overview

The webhook acts as a middleware between Zapier and OpenAI. When Zapier sends a request to the webhook, the webhook uses the OpenAI API to generate a response and sends it back to Zapier.

## Usage

1. Clone this repo
2. Run `npm install` to install dependencies 
3. Set OpenAI API key in `.env` file
4. Start server: `npm start`
5. Set up Zap in Zapier to connect to the `/openai` endpoint

The Zap should send the prompt as text in the request body. The webhook will return the AI-generated response.

## API

### `POST /openai`

Sends prompt to OpenAI API and returns response

Request body:
```
{
  "prompt": "Your prompt text here" 
}
```

Response:
AI-generated text 

## Config

API key and model can be configured in `.env`. 

## Dependencies

- express
- openai

## License

MIT
