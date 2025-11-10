import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonsProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
}

function NavigationButtons({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between items-center pt-6 border-t border-gray-200">
      <button
        onClick={onPrevious}
        disabled={currentQuestion === 0}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
          currentQuestion === 0
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300 shadow-sm hover:shadow'
        }`}
      >
        <ChevronLeft size={20} />
        <span>Câu trước</span>
      </button>

      <button
        onClick={onNext}
        disabled={currentQuestion === totalQuestions - 1}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
          currentQuestion === totalQuestions - 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600 shadow-sm hover:shadow-md'
        }`}
      >
        <span>Câu sau</span>
        <ChevronRight size={20} />
      </button>
      
    </div>
  );
}

export default NavigationButtons;
