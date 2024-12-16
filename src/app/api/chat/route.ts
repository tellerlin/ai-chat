import { NextResponse } from 'next/server';
import { generateGeminiResponse } from '@/lib/providers/gemini';

export async function POST(request: Request) {
  try {
    const { message, modelId } = await request.json();

    const messages = [{
      role: 'user',
      parts: [{ text: message }]
    }];

    const response = await generateGeminiResponse(modelId, messages);
    
    return NextResponse.json({
      response: response.candidates[0].content.parts[0].text
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}