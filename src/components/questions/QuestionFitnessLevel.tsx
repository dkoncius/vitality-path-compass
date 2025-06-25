
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface QuestionFitnessLevelProps {
  value: string;
  onChange: (value: string) => void;
}

const QuestionFitnessLevel = ({ value, onChange }: QuestionFitnessLevelProps) => {
  const levels = [
    {
      id: 'beginner',
      title: 'Pradedantysis',
      description: 'Retai sportuoju arba visai nesportuoju',
      icon: '🌱'
    },
    {
      id: 'intermediate',
      title: 'Pažengęs',
      description: 'Sportuoju kartais, turiu šiek tiek patirties',
      icon: '💪'
    },
    {
      id: 'advanced',
      title: 'Sportuojantis reguliariai',
      description: 'Sportuoju nuolat ir turiu gerą fizinį pasiruošimą',
      icon: '🏆'
    }
  ];

  return (
    <div className="text-center space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2" style={{ color: '#ffffff' }}>
          Koks tavo fizinio pasirengimo lygis?
        </h2>
        <p style={{ color: '#DDE5EA' }}>
          Pasirink variantą, kuris geriausiai atspindi tavo dabartinę formą
        </p>
      </div>

      <div className="grid gap-4 mt-8">
        {levels.map((level) => (
          <Card
            key={level.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md border-2 rounded-xl ${
              value === level.id 
                ? 'border-[#6BE0A5] bg-[#1a3a4a]' 
                : 'border-gray-600 bg-[#1e3a52] hover:border-[#6BE0A5]'
            }`}
            onClick={() => onChange(level.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{level.icon}</span>
                <div className="text-left">
                  <h3 className="font-semibold text-lg" style={{ color: '#ffffff' }}>
                    {level.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#DDE5EA' }}>
                    {level.description}
                  </p>
                </div>
                {value === level.id && (
                  <div className="ml-auto">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#6BE0A5' }}
                    >
                      <span style={{ color: '#132736' }} className="text-sm font-bold">✓</span>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuestionFitnessLevel;
