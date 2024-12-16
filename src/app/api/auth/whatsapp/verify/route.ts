import { NextResponse } from 'next/server';
import { verifyWhatsAppLogin } from '@/lib/auth/whatsapp';

export async function POST(request: Request) {
  const { phone } = await request.json();

  try {
    const verified = await verifyWhatsAppLogin(phone);
    
    if (verified) {
      // Here you would typically:
      // 1. Create or update a user session
      // 2. Set cookies or tokens
      
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: 'Verification failed' }, { status: 401 });
    }
  } catch (error) {
    console.error('WhatsApp verification error:', error);
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
  }
}