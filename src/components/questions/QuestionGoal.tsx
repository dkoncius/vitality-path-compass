
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
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Koks tavo pagrindinis tikslas?</h2>
        <p className="text-gray-600">Pasirink tikslą, kurio nori pasiekti sportuodamas</p>
      </div>

      <div className="grid gap-4 mt-8">
        {goals.map((goal) => (
          <Card
            key={goal.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
              value === goal.id 
                ? 'ring-2 ring-green-500 border-green-500 bg-green-50' 
                : 'hover:border-green-200'
            }`}
            onClick={() => onChange(goal.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl">{goal.icon}</span>
                <div className="text-left">
                  <h3 className="font-semibold text-lg text-gray-800">{goal.title}</h3>
                  <p className="text-gray-600 text-sm">{goal.description}</p>
                </div>
                {value === goal.id && (
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

export default QuestionGoal;
