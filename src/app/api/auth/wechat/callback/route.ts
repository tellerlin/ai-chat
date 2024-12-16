import { NextResponse } from 'next/server';
import { handleWeChatCallback } from '@/lib/auth/wechat';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  
  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  try {
    const authData = await handleWeChatCallback(code);
    return NextResponse.json(authData);
  } catch (error) {
    console.error('WeChat callback error:', error);
    return NextResponse.json({ error: 'Authentication failed' }, { status: 500 });
  }
}