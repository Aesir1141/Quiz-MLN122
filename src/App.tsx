import { useState } from 'react';
import HomePage from './components/HomePage';
import QuizScreen from './components/QuizScreen';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'quiz'>('home');

  return (
    <>
      {currentPage === 'home' ? (
        <HomePage onStartQuiz={() => setCurrentPage('quiz')} />
      ) : (
        <QuizScreen onBackHome={() => setCurrentPage('home')} />
      )}
    </>
  );
}

export default App;
