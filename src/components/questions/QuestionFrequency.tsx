
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
        <h2 className="text-3xl font-bold mb-2" style={{ color: '#ffffff' }}>
          Kiek kartų per savaitę gali sportuoti?
        </h2>
        <p style={{ color: '#DDE5EA' }}>
          Pasirink realų skaičių, kurį galėtum išlaikyti ilgą laiką
        </p>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <span className="text-6xl font-bold" style={{ color: '#6BE0A5' }}>
            {value}
          </span>
          <p className="text-lg mt-2" style={{ color: '#DDE5EA' }}>
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
              className={`w-16 h-16 text-lg font-semibold rounded-xl ${
                value === freq 
                  ? 'font-bold' 
                  : 'border-2'
              }`}
              style={value === freq ? {
                backgroundColor: '#6BE0A5',
                color: '#132736'
              } : {
                borderColor: '#6BE0A5',
                color: '#6BE0A5',
                backgroundColor: 'transparent'
              }}
            >
              {freq}
            </Button>
          ))}
        </div>

        <div className="text-sm mt-4" style={{ color: '#DDE5EA' }}>
          <p>💡 Patarimas: Geriau pradėti nuo mažesnio skaičiaus ir palaipsniui didinti</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionFrequency;
