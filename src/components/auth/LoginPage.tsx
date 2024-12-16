import { useState } from 'react';
import { QRLogin } from './QRLogin';
import { getWeChatLoginUrl } from '@/lib/auth/wechat';
import { getWhatsAppLoginUrl } from '@/lib/auth/whatsapp';

export function LoginPage() {
  const [loginType, setLoginType] = useState<'wechat' | 'whatsapp'>('wechat');
  const [qrValue, setQrValue] = useState('');

  const handleLoginTypeChange = async (type: 'wechat' | 'whatsapp') => {
    setLoginType(type);
    const url = type === 'wechat' 
      ? await getWeChatLoginUrl()
      : await getWhatsAppLoginUrl();
    setQrValue(url);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`px-4 py-2 rounded-lg ${
              loginType === 'wechat' ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleLoginTypeChange('wechat')}
          >
            WeChat
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              loginType === 'whatsapp' ? 'bg-green-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleLoginTypeChange('whatsapp')}
          >
            WhatsApp
          </button>
        </div>
        
        {qrValue && <QRLogin type={loginType} qrValue={qrValue} />}
      </div>
    </div>
  );
}