import React from 'react';
import { Message } from '@/types/chat';
import { CodeBlock } from './code-block';
import { MarkdownContent } from './markdown-content';

interface MessageItemProps {
  message: Message;
}

export function MessageItem({ message }: MessageItemProps) {
  return (
    <div
      className={`flex ${
        message.role === 'user' ? 'justify-end' : 'justify-start'
      }`}
    >
      <div
        className={`max-w-[80%] rounded-lg p-4 ${
          message.role === 'user'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 dark:bg-gray-800'
        }`}
      >
        <MarkdownContent content={message.content} />
      </div>
    </div>
  );
}