// geminiService.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "YOUR GEMINI API KEY"; // Replace with your actual API key

const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const fetchGeminiData = async (map) => {
  const prompt = `Provide the best agents and optimal agent composition for the Valorant map ${map}.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
};
