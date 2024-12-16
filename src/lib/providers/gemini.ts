import { AIProvider } from '@/types/chat';

const CLOUDFLARE_GATEWAY = 'https://gateway.ai.cloudflare.com/v1';
const PROJECT_ID = 'fd70ec11f02dba413166e35ea34bad1f';
const API_KEY = process.env.GEMINI_API_KEY;

export const geminiProvider: AIProvider = {
  id: 'gemini',
  name: 'Google Gemini',
  models: [
    {
      id: 'gemini-1.5-pro',
      name: 'Gemini 1.5 Pro',
      provider: 'gemini',
      maxTokens: 32768
    },
    {
      id: 'gemini-1.5-flash',
      name: 'Gemini 1.5 Flash',
      provider: 'gemini',
      maxTokens: 16384
    }
  ]
};

export async function generateGeminiResponse(
  model: string,
  messages: { role: string; parts: { text: string }[] }[]
) {
  const endpoint = `${CLOUDFLARE_GATEWAY}/${PROJECT_ID}/ge/google-ai-studio/v1/models/${model}:generateContent`;
  
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': API_KEY!
      },
      body: JSON.stringify({ contents: messages })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    throw error;
  }
}