const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({
  apiKey: process.env.VITE_GEMINI_KEY,
});

exports.handler = async (event, context) => {
  const prompt = event.queryStringParameters.prompt || "Ctrl+C";
  const keyboardLayout =
    event.queryStringParameters.keyboardLayout || "Windows";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `What does the keyboard shortcut "${prompt}" do on ${keyboardLayout}? Please keep the answer short and simple. Don't include the shortcut in the answer.`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        prompt: `What does the keyboard shortcut "${prompt}" do on ${keyboardLayout}?`,
        id: Date.now(),
        response: response.text,
      }),
    };
  } catch (error) {
    console.error("Error generating content:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Something went wrong." }),
    };
  }
};
