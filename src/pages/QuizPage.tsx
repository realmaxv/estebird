import Footer from "@/components/Footer";
import Header from "@/components/Header";
import QuizCard from "@/components/QuizCard";
import quizzes from "@/lib/birds";
import { useState } from "react";
import { useNavigate } from "react-router";

function QuizPage() {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const currentQuestion = quizzes[0].questions[currentQuestionIndex];

  const handleAnswerQuestion = (selectedAnswer: string) => {
    const isCorrect = currentQuestion.correctOption === selectedAnswer;
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }
    setSelectedAnswer(selectedAnswer);
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    }, 3000);
  };

  if (currentQuestionIndex >= quizzes[0].questions.length) {
    return (
      <main className="flex flex-col gap-6 items-center justify-center h-screen">
        <Header title="Bird Quiz" />
        <h1 className="text-4xl font-black animate-bounce text-center px-4">{`You answered ${correctAnswers} out of ${quizzes[0].questions.length} questions correctly!`}</h1>
        <button
          onClick={() => navigate("/")}
          className={`font-black shadow-lg shadow-orange-400 hover:shadow-2xl bg-white text-center ring-orange-300 ring-2 rounded-2xl text-black flex items-center justify-center py-4 px-2 hover:scale-105 transition transform duration-300 ease-in-out hover:bg-orange-500 hover:text-shadow-black/80 hover:text-white text-shadow-sm cursor-pointer`}
        >
          Reset
        </button>
        <Footer />
      </main>
    );
  }
  return (
    <main className="flex flex-col gap-6 items-center justify-center h-screen">
      <Header title="Bird Quiz" />
      <section className="flex flex-col items-center justify-center p-4 text-center gap-4">
        <p className="font-extrabold">{`Question ${
          Number(currentQuestionIndex) + 1
        } / ${quizzes[0].questions.length}`}</p>
        <h2 className="font-black text-2xl">{currentQuestion.title}</h2>
      </section>
      <ul className="grid grid-cols-2 auto-rows-fr gap-4 p-4">
        {currentQuestion.options.map((quest, index) => (
          <QuizCard
            key={index.toString()}
            handleAnswerClick={handleAnswerQuestion}
            isCorrect={currentQuestion.correctOption === quest}
            isSelected={selectedAnswer === quest}
            option={quest}
          />
        ))}
      </ul>
      <Footer />
    </main>
  );
}

export default QuizPage;
