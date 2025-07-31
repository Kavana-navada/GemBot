import { GoogleGenerativeAI } from "@google/generative-ai";
// Get the API key from environment variables
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// The main function to call the Gemini API
async function run(prompt) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); [2]

  try {
    const result = await model.generateContent(prompt); [3]
    const response = await result.response;
    const text = response.text();
    console.log(text)
    return text;
  } catch (error) {
    console.error("Error in Gemini API call:", error);
    return "Unable to process the request at the moment.";
  }
}

// Export the function, not the result of its call
export default run;