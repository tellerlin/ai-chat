import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface QRLoginProps {
  type: 'wechat' | 'whatsapp';
  qrValue: string;
}

export function QRLogin({ type, qrValue }: QRLoginProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold">
        {type === 'wechat' ? 'WeChat' : 'WhatsApp'} Login
      </h2>
      <div className="p-4 bg-white rounded-lg">
        <QRCodeSVG value={qrValue} size={200} />
      </div>
      <p className="text-sm text-gray-600">
        Scan with {type === 'wechat' ? 'WeChat' : 'WhatsApp'} to log in
      </p>
    </div>
  );
}