import { createContext, useContext, useState } from "react";

interface QuizContextType {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  totalTime: number;
  setTotalTime: React.Dispatch<React.SetStateAction<number>>;
  isFinished: boolean;
  setIsFinished: React.Dispatch<React.SetStateAction<boolean>>;
}


const QuizContext = createContext<QuizContextType | null>(null);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  return (
    <QuizContext.Provider
      value={{
        score,
        setScore,
        currentQuestion,
        setCurrentQuestion,
        totalTime,
        setTotalTime,
        isFinished,
        setIsFinished
      }}>
        {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used inside QuizProvider");
  }
  return context;
};




