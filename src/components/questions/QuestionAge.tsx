
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
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Kiek tau metų?</h2>
        <p className="text-gray-600">Pasirink savo amžių, kad galėtume suteikti tinkamiausias rekomendacijas</p>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <span className="text-6xl font-bold text-green-600">{value}</span>
          <p className="text-lg text-gray-600 mt-2">metai</p>
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
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>18</span>
            <span>70</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAge;
