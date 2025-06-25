
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuestionFrequencyProps {
  value: number;
  onChange: (value: number) => void;
}

const QuestionFrequency = ({ value, onChange }: QuestionFrequencyProps) => {
  const frequencies = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="text-center space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Kiek kartų per savaitę gali sportuoti?</h2>
        <p className="text-gray-600">Pasirink realų skaičių, kurį galėtum išlaikyti ilgą laiką</p>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <span className="text-6xl font-bold text-green-600">{value}</span>
          <p className="text-lg text-gray-600 mt-2">
            {value === 1 ? 'kartą per savaitę' : `kartus per savaitę`}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {frequencies.map((freq) => (
            <Button
              key={freq}
              variant={value === freq ? "default" : "outline"}
              size="lg"
              onClick={() => onChange(freq)}
              className={`w-16 h-16 text-lg font-semibold ${
                value === freq 
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600' 
                  : 'hover:border-green-300'
              }`}
            >
              {freq}
            </Button>
          ))}
        </div>

        <div className="text-sm text-gray-500 mt-4">
          <p>💡 Patarimas: Geriau pradėti nuo mažesnio skaičiaus ir palaipsniui didinti</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionFrequency;
