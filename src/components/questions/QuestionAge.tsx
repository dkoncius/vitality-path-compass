
import React from 'react';
import { Slider } from '@/components/ui/slider';

interface QuestionAgeProps {
  value: number;
  onChange: (value: number) => void;
}

const QuestionAge = ({ value, onChange }: QuestionAgeProps) => {
  return (
    <div className="text-center space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2" style={{ color: '#ffffff' }}>
          Kiek tau metų?
        </h2>
        <p style={{ color: '#DDE5EA' }}>
          Pasirink savo amžių, kad galėtume suteikti tinkamiausias rekomendacijas
        </p>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <span className="text-6xl font-bold" style={{ color: '#6BE0A5' }}>
            {value}
          </span>
          <p className="text-lg mt-2" style={{ color: '#DDE5EA' }}>
            metai
          </p>
        </div>

        <div className="px-8">
          <Slider
            value={[value]}
            onValueChange={(values) => onChange(values[0])}
            max={70}
            min={18}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-2" style={{ color: '#DDE5EA' }}>
            <span>18</span>
            <span>70</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAge;
