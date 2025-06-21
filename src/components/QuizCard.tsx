type QuizCardProps = {
  option: string;

  isCorrect: boolean;
  isSelected: boolean;
  handleAnswerClick: (selectedAnswer: string) => void;
};

function QuizCard({
  option,

  handleAnswerClick,
  isCorrect,
  isSelected,
}: QuizCardProps) {
  return (
    <button
      key={option}
      onClick={() => handleAnswerClick(option)}
      className={`shadow-lg shadow-orange-400 hover:shadow-2xl bg-white text-center ring-orange-300 ring-2 rounded-2xl text-black flex items-center justify-center py-4 px-2 hover:scale-105 transition transform duration-300 ease-in-out hover:bg-orange-500 hover:text-shadow-black/80 hover:text-white text-shadow-sm cursor-pointer  ${
        isSelected
          ? isCorrect
            ? "animate-blink-green"
            : "animate-blink-red"
          : ""
      }
    `}
    >
      <li className="font-semibold">{option || "test"}</li>
    </button>
  );
}

export default QuizCard;
