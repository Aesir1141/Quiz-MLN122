import { useState, useEffect, useRef } from "react";
import { Flag, Home } from "lucide-react";
import { questions } from "../data/question";
import QuestionList from "./QuestionList";
import QuestionDisplay from "./QuestionDisplay";
import NavigationButtons from "./NavigationButtons";

interface QuizScreenProps {
  onBackHome: () => void;
}

interface User {
  name: string;
  picture: string;
  email: string;
}

function QuizScreen({ onBackHome }: QuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [markedQuestions, setMarkedQuestions] = useState<Set<number>>(new Set());
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 👉 NEW: Thêm state tính điểm
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Đọc thông tin user từ localStorage khi load trang
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setOpen(false);
  };

  // Đóng menu khi click ngoài
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Chọn đáp án
  const handleAnswer = (optionIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: optionIndex,
    }));
  };

  // Đánh dấu câu
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

  // Chuyển câu
  const goToQuestion = (index: number) => setCurrentQuestion(index);

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

  //  NEW: Hàm tính điểm khi hoàn thành
  const handleComplete = () => {
    let total = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) total++;
    });
    setScore(total);
    setIsFinished(true);
  };

  //  NEW: Giao diện sau khi hoàn thành
  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          🎉 Bạn được {score}/{questions.length} điểm
        </h2>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Làm lại
        </button>
      </div>
    );
  }

  // 👉 Giao diện khi đang làm bài
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* HEADER */}
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

          {/* Avatar + Dropdown */}
          <div className="relative">
            {user ? (
              <>
                <button
                  onClick={() => setOpen(!open)}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <img
                    src={user.picture}
                    alt="avatar"
                    className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500 transition"
                  />
                </button>

                {/* Dropdown */}
                <div
                  ref={dropdownRef}
                  className={`absolute right-0 mt-3 w-56 bg-white border rounded-xl shadow-xl overflow-hidden transition-all duration-300 origin-top-right z-50
                    ${open ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
                >
                  <div className="p-4 flex flex-col gap-1">
                    <span className="font-semibold text-gray-800">{user.name}</span>
                    <span className="text-sm text-gray-500">{user.email}</span>
                  </div>
                  <div className="border-t border-gray-200" />
                  <button
                    onClick={handleLogout}
                    className="w-full flex justify-between items-center px-4 py-2 text-red-600 font-semibold hover:bg-red-50 transition"
                  >
                    <span>Logout</span>
                    <i className="bi bi-box-arrow-right"></i>
                  </button>
                </div>
              </>
            ) : (
              <span className="text-gray-600"></span>
            )}
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Câu hỏi chính */}
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
                      ? "bg-amber-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Flag size={18} />
                  <span className="text-sm font-medium">
                    {markedQuestions.has(currentQuestion) ? "Đã đánh dấu" : "Đánh dấu"}
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

          {/* Danh sách câu hỏi */}
          <div className="lg:col-span-1">
            <QuestionList
              totalQuestions={questions.length}
              currentQuestion={currentQuestion}
              answers={answers}
              markedQuestions={markedQuestions}
              onQuestionClick={goToQuestion}
              onComplete={handleComplete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizScreen;
