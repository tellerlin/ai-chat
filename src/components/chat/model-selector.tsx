"use client";

import React, { useEffect, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  const [localSelectedModel, setLocalSelectedModel] = useState(selectedModel || models[0].id);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setLocalSelectedModel(selectedModel || models[0].id);
  }, [selectedModel, models]);

  return (
    <Select value={localSelectedModel} onValueChange={onModelChange}>
      <div className="flex items-center">
        <SelectTrigger className="w-[200px] flex items-center">
          <SelectValue placeholder="Select a model" />
          {isClient && <ChevronDown className="ml-2 h-4 w-4" />}
        </SelectTrigger>
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
