
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FormData } from './HealthPlanGenerator';
import { Badge } from '@/components/ui/badge';

interface ResultsProps {
  formData: FormData;
  onEdit: (step: number) => void;
}

const Results = ({ formData, onEdit }: ResultsProps) => {
  const getPersonalizedPlan = () => {
    const { goal, fitnessLevel, frequency, sports } = formData;
    
    let workoutPlan = [];
    let nutritionAdvice = [];
    let motivationalTips = [];

    // Workout plan based on goal and fitness level
    if (goal === 'lose_weight') {
      workoutPlan = [
        'Pirmadienis: Kardio treniruotė (30-45 min)',
        'Trečiadienis: Jėgos treniruotė + kardio (45 min)',
        'Penktadienis: HIIT treniruotė (20-30 min)',
        'Šeštadienis: Aktyvi pramoga (pvz., žygis, šokiai)'
      ];
      nutritionAdvice = [
        'Valgyk kaloriniu deficitu - sudeginsi daugiau nei suvartojai',
        'Pasirink daug skaidulinių produktų (daržovės, vaisiai)',
        'Gerk daug vandens - bent 2-3 litrus per dieną',
        'Ribink cukraus ir perdirbtos maisto kiekį'
      ];
    } else if (goal === 'build_muscle') {
      workoutPlan = [
        'Pirmadienis: Viršutinė kūno dalis (krūtinė, pečiai, tricepsai)',
        'Trečiadienis: Apatinė kūno dalis (kojos, sėdmenys)',
        'Penktadienis: Nugaros ir bicepsų treniruotė',
        'Sekmadienis: Visaip funkcionalūs pratimai'
      ];
      nutritionAdvice = [
        'Valgyk kaloriniu pertekliumi - daugiau nei sudeginsi',
        'Suvartok 1.6-2.2g baltymų vienam kūno svorio kilogramui',
        'Valgyk angliavandenius po treniruotės raumenų atkūrimui',
        'Reguliariai valgyk - 4-6 kartus per dieną'
      ];
    } else if (goal === 'improve_endurance') {
      workoutPlan = [
        'Pirmadienis: Lengvas bėgimas arba dviračio minkimas (45 min)',
        'Trečiadienis: Intervalinė treniruotė (30 min)',
        'Penktadienis: Ilgas kardio (60+ min)',
        'Sekmadienis: Atkūrimo treniruotė (joga, tempimas)'
      ];
      nutritionAdvice = [
        'Valgyk pakankamai angliavandenių energijai',
        'Nesyk elektrolitų po ilgų treniruočių',
        'Valgyk antioksidantų turtingus produktus atkūrimui',
        'Planuok maistą prieš ir po treniruočių'
      ];
    } else {
      workoutPlan = [
        'Pirmadienis: Jėgos treniruotė (30 min)',
        'Trečiadienis: Kardio (30 min)',
        'Penktadienis: Funkcionalūs pratimai arba joga',
        'Savaitgaliais: Aktyvi veikla pagal norą'
      ];
      nutritionAdvice = [
        'Palaikyk subalansuotą mitybą',
        'Valgyk įvairiai - visų maistinių medžiagų grupės',
        'Išlaikyk regulų valgymo režimą',
        'Klausyk savo kūno poreikių'
      ];
    }

    // Adjust plan based on frequency
    if (frequency < 3) {
      workoutPlan = workoutPlan.slice(0, frequency);
    } else if (frequency > 4) {
      workoutPlan.push('Šeštadienis: Lengva aktyvi veikla');
      workoutPlan.push('Sekmadienis: Atkūrimo treniruotė arba aktyvus poilsis');
    }

    // Motivational tips
    motivationalTips = [
      'Nustatyk aiškius ir pasiekiamus tikslus',
      'Sek savo pažangą - fotografuok, sveriк, matyk pokyčius',
      'Rask treniruočių partnerį motyvacijai',
      'Nepamirš poilsio dienų - jos svarbios pažangai',
      'Džiaukis mažais pasiekimais kelyje į tikslą'
    ];

    return { workoutPlan, nutritionAdvice, motivationalTips };
  };

  const plan = getPersonalizedPlan();

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🎉 Tavo personalizuotas sveikatingumo planas</h1>
          <p className="text-gray-600">Sveikiname! Štai tavo individualus planas pagal atsakymus</p>
        </div>

        {/* Summary */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">📋 Tavo duomenų santrauka</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p><strong>Amžius:</strong> {formData.age} metai</p>
                <p><strong>Svoris:</strong> {formData.weight} kg</p>
                <p><strong>Fizinio pasirengimo lygis:</strong> {getFitnessLevelName()}</p>
              </div>
              <div className="space-y-2">
                <p><strong>Tikslas:</strong> {getGoalName()}</p>
                <p><strong>Sporto dažnumas:</strong> {formData.frequency} kartus per savaitę</p>
                <p><strong>Mėgstamos sporto rūšys:</strong></p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {getSportsNames().map((sport, index) => (
                    <Badge key={index} variant="secondary">{sport}</Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" onClick={() => onEdit(0)}>Redaguoti amžių</Button>
              <Button variant="outline" size="sm" onClick={() => onEdit(1)}>Redaguoti svorį</Button>
              <Button variant="outline" size="sm" onClick={() => onEdit(2)}>Redaguoti lygį</Button>
              <Button variant="outline" size="sm" onClick={() => onEdit(3)}>Redaguoti tikslą</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Workout Plan */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">💪 Savaitės treniruočių planas</h2>
              <div className="space-y-3">
                {plan.workoutPlan.map((workout, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <p className="text-gray-700">{workout}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Nutrition Advice */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">🥗 Mitybos gairės</h2>
              <div className="space-y-3">
                {plan.nutritionAdvice.map((advice, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <p className="text-gray-700">{advice}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Motivational Tips */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">🌟 Motyvaciniai patarimai</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {plan.motivationalTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-yellow-500 text-lg">💡</span>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trainer Contact */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">👨‍🏫 Rekomenduojamas treneris</h2>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">👨‍💼</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Mindaugas Sportas</h3>
                  <p className="text-gray-600">Sertifikuotas asmeninis treneris</p>
                  <p className="text-sm text-gray-500">5+ metų patirtis, specialis tavo tikslas</p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-gray-700">📧 <strong>El. paštas:</strong> mindaugas@sportotreneris.lt</p>
                <p className="text-gray-700">📱 <strong>Telefonas:</strong> +370 600 12345</p>
                <p className="text-gray-700">📍 <strong>Lokacija:</strong> Vilnius, Sporto g. 10</p>
              </div>

              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600">
                Susisiekti su treneriu
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Results;
