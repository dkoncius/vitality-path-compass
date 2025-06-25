
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
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Koks tavo fizinio pasirengimo lygis?</h2>
        <p className="text-gray-600">Pasirink variantą, kuris geriausiai atspindi tavo dabartinę formą</p>
      </div>

      <div className="grid gap-4 mt-8">
        {levels.map((level) => (
          <Card
            key={level.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
              value === level.id 
                ? 'ring-2 ring-green-500 border-green-500 bg-green-50' 
                : 'hover:border-green-200'
            }`}
            onClick={() => onChange(level.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{level.icon}</span>
                <div className="text-left">
                  <h3 className="font-semibold text-lg text-gray-800">{level.title}</h3>
                  <p className="text-gray-600 text-sm">{level.description}</p>
                </div>
                {value === level.id && (
                  <div className="ml-auto">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
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
