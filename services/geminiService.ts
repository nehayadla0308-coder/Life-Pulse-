
import { GoogleGenAI, Type } from "@google/genai";

// Fix: Initialize GoogleGenAI strictly with process.env.API_KEY as per coding guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getGeminiHealthAdvice = async (userQuery: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuery,
      config: {
        systemInstruction: "You are a professional medical assistant for a blood donation app. Provide brief, empathetic, and factual advice about blood donation eligibility, diet, and recovery. Remind users that final eligibility is determined by doctors at donation centers.",
      }
    });
    // Fix: Access .text as a property, not a method, as per guidelines
    return response.text;
  } catch (error) {
    console.error("Gemini Health Advice Error:", error);
    return "I'm having trouble connecting to my knowledge base. Please consult a medical professional for advice.";
  }
};

export const checkEligibilityWithAI = async (healthDescription: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Evaluate the following health description for blood donation eligibility: "${healthDescription}".`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            isEligible: { type: Type.BOOLEAN },
            reasoning: { type: Type.STRING },
            suggestions: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["isEligible", "reasoning", "suggestions"]
        }
      }
    });
    // Fix: Access .text property directly and handle potential undefined
    const jsonStr = response.text?.trim() || '{}';
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Gemini Eligibility Error:", error);
    return null;
  }
};
