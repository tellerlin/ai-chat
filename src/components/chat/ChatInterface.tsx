import React, { useState } from 'react';
import { MessageList } from './MessageList';
import { ModelSelector } from './ModelSelector';
import { MessageInput } from './MessageInput';
import { useChat } from '@/hooks/useChat';
import { AIModel } from '@/types/chat';

const availableModels: AIModel[] = [
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
];

export function ChatInterface() {
  const [selectedModel, setSelectedModel] = useState(availableModels[0].id);
  const { messages, sendMessage } = useChat(selectedModel);

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <ModelSelector
          models={availableModels}
          selectedModel={selectedModel}
          onModelChange={setSelectedModel}
        />
      </div>
      
      <div className="flex-1 overflow-y-auto mb-4">
        <MessageList messages={messages} />
      </div>
      
      <div className="mt-auto">
        <MessageInput onSendMessage={sendMessage} />
      </div>
    </div>
  );
}