import { Card } from "@/components/ui/card";

interface SummaryProps {
  answers: Record<string, string | number>;
  questions: Array<{
    id: string;
    question: string;
    unit?: string;
  }>;
}

export const Summary = ({ answers, questions }: SummaryProps) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center mb-6">Summary of Your Home</h2>
      
      <div className="space-y-3">
        {questions.map((q) => (
          <div key={q.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">{q.question}</span>
            <span className="font-medium">
              {answers[q.id]}
              {q.unit && ` ${q.unit}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};