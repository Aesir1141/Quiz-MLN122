import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/Login";
import QuizPage from "./components/QuizScreen"; // nếu có

// Wrapper dùng useNavigate để truyền props
function HomeRouteWrapper() {
  const navigate = useNavigate();
  return (
    <HomePage
      onStartQuiz={() => navigate("/quiz")}
      onGoLogin={() => navigate("/login")}
    />
  );
}

function LoginRouteWrapper() {
  const navigate = useNavigate();
  return (
    <LoginPage
      // nếu LoginPage cần prop callback (không bắt buộc nếu dùng navigate trong LoginPage)
      onLoginSuccess={() => navigate("/")}
    />
  );
}

// Thêm wrapper cho QuizPage để fix lỗi
function QuizRouteWrapper() {
  const navigate = useNavigate();
  return (
    <QuizPage
      onBackHome={() => navigate("/")}
    />
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRouteWrapper />} />
        <Route path="/login" element={<LoginRouteWrapper />} />
        <Route path="/quiz" element={<QuizRouteWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
