import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface QuestionStepProps {
  question: {
    question: string;
    type: string;
    options?: string[];
    unit?: string;
    placeholder?: string;
  };
  value: string | number;
  onChange: (value: string) => void;
}

export const QuestionStep = ({ question, value, onChange }: QuestionStepProps) => {
  return (
    <div className="space-y-4">
      <Label className="text-lg font-medium">{question.question}</Label>
      
      {question.type === "number" ? (
        <div className="flex items-center gap-2">
          <Input
            type="number"
            placeholder={question.placeholder}
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className="max-w-[200px]"
          />
          {question.unit && <span className="text-gray-500">{question.unit}</span>}
        </div>
      ) : question.type === "select" && question.options ? (
        <Select value={value?.toString()} onValueChange={onChange}>
          <SelectTrigger className="max-w-[300px]">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            {question.options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : null}
    </div>
  );
};