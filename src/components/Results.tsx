
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FormData } from './HealthPlanGenerator';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface ResultsProps {
  formData: FormData;
  onEdit: (step: number) => void;
}

const Results = ({ formData, onEdit }: ResultsProps) => {
  const { toast } = useToast();

  const getSportsNames = () => {
    const sportsMap: { [key: string]: string } = {
      running: 'Bėgimas',
      weightlifting: 'Svorių kilnojimas',
      yoga: 'Joga',
      cycling: 'Dviračio minimas',
      swimming: 'Plaukimas',
      dancing: 'Šokiai',
      hiking: 'Žygiai',
      tennis: 'Tenisas',
      boxing: 'Boksas',
      pilates: 'Pilatestas'
    };
    return formData.sports.map(sport => sportsMap[sport] || sport);
  };

  const getFitnessLevelName = () => {
    const levels: { [key: string]: string } = {
      beginner: 'Pradedantysis',
      intermediate: 'Pažengęs',
      advanced: 'Sportuojantis reguliariai'
    };
    return levels[formData.fitnessLevel] || formData.fitnessLevel;
  };

  const getGoalName = () => {
    const goals: { [key: string]: string } = {
      lose_weight: 'Numesti svorio',
      build_muscle: 'Priaugti raumenų',
      improve_endurance: 'Pagerinti ištvermę',
      maintain_fitness: 'Palaikyti formą'
    };
    return goals[formData.goal] || formData.goal;
  };

  const handleSendToTrainer = () => {
    // Simulate sending data to trainer
    console.log('Sending to trainer:', formData);
    
    toast({
      title: "Duomenys išsiųsti!",
      description: "Jūsų duomenys išsiųsti treneriui. Personalizuotas planas bus atsiųstas per 24 val.",
    });
  };

  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: '#132736' }}>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: '#ffffff' }}>
            🎉 Jūsų duomenų santrauka
          </h1>
          <p style={{ color: '#DDE5EA' }}>
            Peržiūrėkite duomenis ir siųskite treneriui personalizuoto plano kūrimui
          </p>
        </div>

        {/* Summary Card */}
        <Card className="mb-8 shadow-lg" style={{ 
          backgroundColor: '#ffffff',
          borderRadius: '20px'
        }}>
          <CardContent className="p-8">
            <h2 className="text-2xl font-semibold mb-6" style={{ color: '#132736' }}>
              📋 Jūsų duomenų santrauka
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold" style={{ color: '#132736' }}>Amžius:</p>
                  <p style={{ color: '#132736' }}>{formData.age} metai</p>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#132736' }}>Svoris:</p>
                  <p style={{ color: '#132736' }}>{formData.weight} kg</p>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#132736' }}>Fizinio pasirengimo lygis:</p>
                  <p style={{ color: '#132736' }}>{getFitnessLevelName()}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="font-semibold" style={{ color: '#132736' }}>Tikslas:</p>
                  <p style={{ color: '#132736' }}>{getGoalName()}</p>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#132736' }}>Sporto dažnumas:</p>
                  <p style={{ color: '#132736' }}>{formData.frequency} kartus per savaitę</p>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: '#132736' }}>Mėgstamos sporto rūšys:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {getSportsNames().map((sport, index) => (
                      <Badge 
                        key={index} 
                        variant="outline"
                        style={{ 
                          borderColor: '#6BE0A5',
                          color: '#6BE0A5'
                        }}
                      >
                        {sport}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => onEdit(0)}
                style={{ 
                  borderColor: '#6BE0A5',
                  color: '#6BE0A5'
                }}
              >
                Redaguoti amžių
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => onEdit(1)}
                style={{ 
                  borderColor: '#6BE0A5',
                  color: '#6BE0A5'
                }}
              >
                Redaguoti svorį
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => onEdit(2)}
                style={{ 
                  borderColor: '#6BE0A5',
                  color: '#6BE0A5'
                }}
              >
                Redaguoti lygį
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => onEdit(3)}
                style={{ 
                  borderColor: '#6BE0A5',
                  color: '#6BE0A5'
                }}
              >
                Redaguoti tikslą
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Send to Trainer */}
        <Card className="shadow-lg" style={{ 
          backgroundColor: '#ffffff',
          borderRadius: '20px'
        }}>
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#132736' }}>
                👨‍🏫 Gaukite personalizuotą planą
              </h2>
              <p style={{ color: '#132736' }}>
                Jūsų duomenys bus išsiųsti treneriui, kuris sukurs individualų treniruočių ir mitybos planą. 
                Personalizuotas PDF planas bus atsiųstas per 24 valandas.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg mb-6">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">👨‍💼</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: '#132736' }}>
                    Mindaugas Sportas
                  </h3>
                  <p style={{ color: '#132736' }}>Sertifikuotas asmeninis treneris</p>
                  <p className="text-sm" style={{ color: '#132736' }}>5+ metų patirtis</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleSendToTrainer}
              className="w-full text-lg font-bold py-4"
              style={{ 
                backgroundColor: '#6BE0A5',
                color: '#132736',
                borderRadius: '12px'
              }}
            >
              📧 Siųsti duomenis treneriui
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;
