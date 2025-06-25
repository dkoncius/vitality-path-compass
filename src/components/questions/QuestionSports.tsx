
import React from 'react';
import { Button } from '@/components/ui/button';

interface QuestionSportsProps {
  value: string[];
  onChange: (value: string[]) => void;
}

const QuestionSports = ({ value, onChange }: QuestionSportsProps) => {
  const sports = [
    { id: 'running', name: 'Bėgimas', icon: '🏃‍♂️' },
    { id: 'weightlifting', name: 'Svorių kilnojimas', icon: '🏋️‍♀️' },
    { id: 'yoga', name: 'Joga', icon: '🧘‍♀️' },
    { id: 'cycling', name: 'Dviračio minkimas', icon: '🚴‍♂️' },
    { id: 'swimming', name: 'Plaukimas', icon: '🏊‍♀️' },
    { id: 'dancing', name: 'Šokiai', icon: '💃' },
    { id: 'hiking', name: 'Žygiai', icon: '🥾' },
    { id: 'tennis', name: 'Tenisas', icon: '🎾' },
    { id: 'boxing', name: 'Boksas', icon: '🥊' },
    { id: 'pilates', name: 'Pilatestas', icon: '🤸‍♀️' }
  ];

  const toggleSport = (sportId: string) => {
    if (value.includes(sportId)) {
      onChange(value.filter(id => id !== sportId));
    } else {
      onChange([...value, sportId]);
    }
  };

  return (
    <div className="text-center space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Kokios sporto rūšys tau patinka?</h2>
        <p className="text-gray-600">Pasirink visas veiklas, kurios tau įdomios (galima pasirinkti keletą)</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-8">
        {sports.map((sport) => (
          <Button
            key={sport.id}
            variant={value.includes(sport.id) ? "default" : "outline"}
            size="lg"
            onClick={() => toggleSport(sport.id)}
            className={`h-20 flex flex-col items-center justify-center gap-2 ${
              value.includes(sport.id)
                ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600'
                : 'hover:border-green-300'
            }`}
          >
            <span className="text-2xl">{sport.icon}</span>
            <span className="text-sm font-medium">{sport.name}</span>
          </Button>
        ))}
      </div>

      {value.length > 0 && (
        <div className="text-sm text-green-600 mt-4">
          <p>✓ Pasirinkta: {value.length} sporto {value.length === 1 ? 'rūšis' : 'rūšys'}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionSports;
