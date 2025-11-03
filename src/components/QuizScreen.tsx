import { useState } from 'react';
import { ChevronLeft, ChevronRight, Flag, Home } from 'lucide-react';
import { questions } from '../data/questions';
import QuestionList from './QuestionList';
import QuestionDisplay from './QuestionDisplay';
import NavigationButtons from './NavigationButtons';

interface QuizScreenProps {
  onBackHome: () => void;
}

function QuizScreen({ onBackHome }: QuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [markedQuestions, setMarkedQuestions] = useState<Set<number>>(new Set());

  const handleAnswer = (optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: optionIndex,
    }));
  };

  const toggleMark = () => {
    setMarkedQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(currentQuestion)) {
        newSet.delete(currentQuestion);
      } else {
        newSet.add(currentQuestion);
      }
      return newSet;
    });
  };

  const goToQuestion = (index: number) => {
    setCurrentQuestion(index);
  };

  const goNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Quiz Challenge</h1>
            <p className="text-gray-600">Trả lời tất cả các câu hỏi dưới đây</p>
          </div>
          <button
            onClick={onBackHome}
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100 transition-all shadow-sm hover:shadow"
          >
            <Home size={20} />
            <span className="font-medium">Trang Chủ</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-gray-500">
                    Câu hỏi {currentQuestion + 1} / {questions.length}
                  </span>
                </div>
                <button
                  onClick={toggleMark}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    markedQuestions.has(currentQuestion)
                      ? 'bg-amber-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Flag size={18} />
                  <span className="text-sm font-medium">
                    {markedQuestions.has(currentQuestion) ? 'Đã đánh dấu' : 'Đánh dấu'}
                  </span>
                </button>
              </div>

              <QuestionDisplay
                question={questions[currentQuestion]}
                selectedAnswer={answers[currentQuestion]}
                onAnswer={handleAnswer}
              />

              <NavigationButtons
                currentQuestion={currentQuestion}
                totalQuestions={questions.length}
                onPrevious={goPrevious}
                onNext={goNext}
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <QuestionList
              totalQuestions={questions.length}
              currentQuestion={currentQuestion}
              answers={answers}
              markedQuestions={markedQuestions}
              onQuestionClick={goToQuestion}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizScreen;
