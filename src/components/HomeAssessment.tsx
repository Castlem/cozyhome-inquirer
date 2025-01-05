import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { QuestionStep } from "@/components/QuestionStep";
import { Summary } from "@/components/Summary";
import { useHomeStore } from "@/store/homeStore";

export const HomeAssessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();
  const { answers, setAnswer } = useHomeStore();

  const questions = [
    {
      id: "floorArea",
      question: "What is the total floor area of your home?",
      type: "number",
      unit: "m²",
      placeholder: "Enter floor area",
    },
    {
      id: "wallType",
      question: "What type of walls does your home have?",
      type: "select",
      options: ["Cavity Wall", "Solid Wall", "Not Sure"],
    },
    {
      id: "yearBuilt",
      question: "When was your home built?",
      type: "select",
      options: ["Pre 1900", "1900-1950", "1951-1990", "1991-2010", "After 2010"],
    },
    {
      id: "heatingSystem",
      question: "What type of heating system do you have?",
      type: "select",
      options: ["Gas Boiler", "Electric Heating", "Heat Pump", "Other"],
    },
    {
      id: "windows",
      question: "What type of windows do you have?",
      type: "select",
      options: ["Single Glazing", "Double Glazing", "Triple Glazing"],
    }
  ];

  const progress = ((currentStep + 1) / (questions.length + 1)) * 100;

  const handleNext = () => {
    if (!answers[questions[currentStep].id]) {
      toast({
        title: "Please answer the question",
        description: "We need this information to provide an accurate assessment",
        variant: "destructive",
      });
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="space-y-4">
      <Progress value={progress} className="w-full" />
      
      <Card className="p-6">
        {currentStep < questions.length ? (
          <QuestionStep
            question={questions[currentStep]}
            value={answers[questions[currentStep].id]}
            onChange={(value) => setAnswer(questions[currentStep].id, value)}
          />
        ) : (
          <Summary answers={answers} questions={questions} />
        )}

        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          
          {currentStep < questions.length && (
            <Button onClick={handleNext}>
              {currentStep === questions.length - 1 ? "Complete" : "Next"}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
};