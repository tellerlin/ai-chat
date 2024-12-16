"use client";

import React, { useEffect, useState } from 'react';
import { AIModel } from '@/types/chat';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronDown } from 'lucide-react';

interface ModelSelectorProps {
  models: AIModel[];
  selectedModel: string;
  onModelChange: (model: string) => void;
}

export function ModelSelector({
  models,
  selectedModel,
  onModelChange,
}: ModelSelectorProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Select value={selectedModel} onValueChange={onModelChange}>
      <div className="flex items-center">
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a model" />
        </SelectTrigger>
        <span className="ml-2 h-4 w-4">
          {isClient && <ChevronDown className="h-4 w-4" />}
        </span>
      </div>
      <SelectContent>
        {models.map((model) => (
          <SelectItem key={model.id} value={model.id}>
            {model.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
