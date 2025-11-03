import { Flag } from 'lucide-react';

interface QuestionListProps {
  totalQuestions: number;
  currentQuestion: number;
  answers: Record<number, number>;
  markedQuestions: Set<number>;
  onQuestionClick: (index: number) => void;
}

function QuestionList({
  totalQuestions,
  currentQuestion,
  answers,
  markedQuestions,
  onQuestionClick,
}: QuestionListProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Danh sách câu hỏi</h3>

      <div className="mb-4 p-3 bg-blue-50 rounded-lg">
        <div className="text-sm text-gray-600 space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Đã trả lời</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-200"></div>
            <span>Chưa trả lời</span>
          </div>
          <div className="flex items-center gap-2">
            <Flag size={14} className="text-amber-500" />
            <span>Đã đánh dấu</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: totalQuestions }, (_, index) => {
          const isAnswered = answers[index] !== undefined;
          const isMarked = markedQuestions.has(index);
          const isCurrent = currentQuestion === index;

          return (
            <button
              key={index}
              onClick={() => onQuestionClick(index)}
              className={`relative aspect-square rounded-lg font-semibold text-sm transition-all duration-200 ${
                isCurrent
                  ? 'ring-2 ring-blue-500 ring-offset-2 scale-110'
                  : ''
              } ${
                isAnswered
                  ? 'bg-blue-500 text-white shadow-md hover:bg-blue-600'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {index + 1}
              {isMarked && (
                <div className="absolute -top-1 -right-1">
                  <Flag size={14} className="text-amber-500 fill-amber-500" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Đã trả lời:</span>
            <span className="font-semibold text-blue-600">
              {Object.keys(answers).length} / {totalQuestions}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Đã đánh dấu:</span>
            <span className="font-semibold text-amber-600">
              {markedQuestions.size}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionList;
