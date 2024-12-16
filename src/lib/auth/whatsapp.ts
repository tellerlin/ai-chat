export async function getWhatsAppLoginUrl() {
  // Generate a unique session ID for this login attempt
  const sessionId = Math.random().toString(36).substring(7);
  
  return `https://wa.me/${process.env.WHATSAPP_BUSINESS_ID}?text=${encodeURIComponent(`Login code: ${sessionId}`)}`;
}

export async function verifyWhatsAppLogin(code: string) {
  const url = `https://graph.facebook.com/v17.0/${process.env.WHATSAPP_BUSINESS_ID}/messages`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.WHATSAPP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: code,
        type: 'template',
        template: {
          name: 'login_verification',
          language: {
            code: 'en',
          },
        },
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('WhatsApp verification error:', error);
    return false;
  }
}