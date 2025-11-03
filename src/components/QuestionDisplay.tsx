import { Question } from '../types/quiz';

interface QuestionDisplayProps {
  question: Question;
  selectedAnswer?: number;
  onAnswer: (optionIndex: number) => void;
}

function QuestionDisplay({ question, selectedAnswer, onAnswer }: QuestionDisplayProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
        {question.question}
      </h2>

      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(index)}
            className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 ${
              selectedAnswer === index
                ? 'border-blue-500 bg-blue-50 shadow-md scale-[1.02]'
                : 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50/50'
            }`}
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                  selectedAnswer === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {String.fromCharCode(65 + index)}
              </div>
              <span
                className={`text-lg ${
                  selectedAnswer === index ? 'text-blue-900 font-medium' : 'text-gray-700'
                }`}
              >
                {option}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionDisplay;
