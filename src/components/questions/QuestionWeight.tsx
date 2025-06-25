
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
        <h2 className="text-3xl font-bold mb-2" style={{ color: '#ffffff' }}>
          Koks tavo svoris?
        </h2>
        <p style={{ color: '#DDE5EA' }}>
          Nurodytas svoris padės sukurti personalizuotą treniruočių planą
        </p>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <span className="text-6xl font-bold" style={{ color: '#6BE0A5' }}>
            {value}
          </span>
          <p className="text-lg mt-2" style={{ color: '#DDE5EA' }}>
            kg
          </p>
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
          <div className="flex justify-between text-sm mt-2" style={{ color: '#DDE5EA' }}>
            <span>40 kg</span>
            <span>150 kg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionWeight;
