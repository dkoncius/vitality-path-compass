
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface QuestionGoalProps {
  value: string;
  onChange: (value: string) => void;
}

const QuestionGoal = ({ value, onChange }: QuestionGoalProps) => {
  const goals = [
    {
      id: 'lose_weight',
      title: 'Numesti svorio',
      description: 'Sumažinti kūno svorį ir pagerinti sudėjimą',
      icon: '⚖️'
    },
    {
      id: 'build_muscle',
      title: 'Priaugti raumenų',
      description: 'Padidinti raumenų masę ir jėgą',
      icon: '💪'
    },
    {
      id: 'improve_endurance',
      title: 'Pagerinti ištvermę',
      description: 'Padidinti kardiovaskulinę ištvermę',
      icon: '🏃'
    },
    {
      id: 'maintain_fitness',
      title: 'Palaikyti formą',
      description: 'Išlaikyti dabartinį fizinį pasiruošimą',
      icon: '🌟'
    }
  ];

  return (
    <div className="text-center space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2" style={{ color: '#ffffff' }}>
          Koks tavo pagrindinis tikslas?
        </h2>
        <p style={{ color: '#DDE5EA' }}>
          Pasirink tikslą, kurio nori pasiekti sportuodamas
        </p>
      </div>

      <div className="grid gap-4 mt-8">
        {goals.map((goal) => (
          <Card
            key={goal.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md border-2 rounded-xl ${
              value === goal.id 
                ? 'border-[#6BE0A5] bg-[#1a3a4a]' 
                : 'border-gray-600 bg-[#1e3a52] hover:border-[#6BE0A5]'
            }`}
            onClick={() => onChange(goal.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{goal.icon}</span>
                <div className="text-left">
                  <h3 className="font-semibold text-lg" style={{ color: '#ffffff' }}>
                    {goal.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#DDE5EA' }}>
                    {goal.description}
                  </p>
                </div>
                {value === goal.id && (
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

export default QuestionGoal;
