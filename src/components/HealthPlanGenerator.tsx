
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import QuestionAge from './questions/QuestionAge';
import QuestionWeight from './questions/QuestionWeight';
import QuestionFitnessLevel from './questions/QuestionFitnessLevel';
import QuestionGoal from './questions/QuestionGoal';
import QuestionFrequency from './questions/QuestionFrequency';
import QuestionSports from './questions/QuestionSports';
import Results from './Results';

export interface FormData {
  age: number;
  weight: number;
  fitnessLevel: string;
  goal: string;
  frequency: number;
  sports: string[];
}

const HealthPlanGenerator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    age: 25,
    weight: 70,
    fitnessLevel: '',
    goal: '',
    frequency: 3,
    sports: []
  });

  const totalSteps = 6;

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const isStepComplete = () => {
    switch (currentStep) {
      case 0: return formData.age >= 18 && formData.age <= 70;
      case 1: return formData.weight > 0;
      case 2: return formData.fitnessLevel !== '';
      case 3: return formData.goal !== '';
      case 4: return formData.frequency >= 1 && formData.frequency <= 7;
      case 5: return formData.sports.length > 0;
      default: return false;
    }
  };

  const renderQuestion = () => {
    switch (currentStep) {
      case 0:
        return <QuestionAge value={formData.age} onChange={(value) => updateFormData('age', value)} />;
      case 1:
        return <QuestionWeight value={formData.weight} onChange={(value) => updateFormData('weight', value)} />;
      case 2:
        return <QuestionFitnessLevel value={formData.fitnessLevel} onChange={(value) => updateFormData('fitnessLevel', value)} />;
      case 3:
        return <QuestionGoal value={formData.goal} onChange={(value) => updateFormData('goal', value)} />;
      case 4:
        return <QuestionFrequency value={formData.frequency} onChange={(value) => updateFormData('frequency', value)} />;
      case 5:
        return <QuestionSports value={formData.sports} onChange={(value) => updateFormData('sports', value)} />;
      case 6:
        return <Results formData={formData} onEdit={(step) => setCurrentStep(step)} />;
      default:
        return null;
    }
  };

  if (currentStep === totalSteps) {
    return renderQuestion();
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              Klausimas {currentStep + 1} iš {totalSteps}
            </span>
            <span className="text-sm font-medium text-green-600">
              {Math.round(((currentStep + 1) / totalSteps) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="min-h-[300px] flex flex-col justify-center">
              <div className="animate-fade-in">
                {renderQuestion()}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Atgal
              </Button>

              <Button
                onClick={nextStep}
                disabled={!isStepComplete()}
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
              >
                {currentStep === totalSteps - 1 ? 'Gauti planą' : 'Toliau'}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HealthPlanGenerator;
