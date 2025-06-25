
import React from 'react';
import { Slider } from '@/components/ui/slider';

interface QuestionWeightProps {
  value: number;
  onChange: (value: number) => void;
}

const QuestionWeight = ({ value, onChange }: QuestionWeightProps) => {
  return (
    <div className="text-center space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Koks tavo svoris?</h2>
        <p className="text-gray-600">Nurodytas svoris padės sukurti personalizuotą treniruočių planą</p>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <span className="text-6xl font-bold text-green-600">{value}</span>
          <p className="text-lg text-gray-600 mt-2">kg</p>
        </div>

        <div className="px-8">
          <Slider
            value={[value]}
            onValueChange={(values) => onChange(values[0])}
            max={150}
            min={40}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>40 kg</span>
            <span>150 kg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionWeight;
