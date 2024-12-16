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
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a model" />
        {isClient && <ChevronDown className="ml-2 h-4 w-4" />}
      </SelectTrigger>
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
