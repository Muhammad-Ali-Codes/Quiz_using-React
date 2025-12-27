import { useEffect, useState } from "react"
import { questions } from "../data/questions"
import { useQuiz } from "../context/QuizContext"
import { useNavigate } from "react-router-dom"

const Quiz = () => {
  const navigate = useNavigate()

  const {
    score,
    setScore,
    currentQuestion,
    setCurrentQuestion,
    totalTime,
    setTotalTime,
    setIsFinished
  } = useQuiz()

  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  // ⏱ Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalTime(totalTime + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [totalTime, setTotalTime])

  const question = questions[currentQuestion]

  const handleNext = () => {
    if (selectedOption === question.correctAnswer) {
      setScore(score + 1)
    }

    setSelectedOption(null)

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsFinished(true)
      navigate("/dashboard")
    }
  }
  const minutes = Math.floor(totalTime / 60)
  const seconds = totalTime % 60


  return (
    <>
      <h1 className="text-3xl text-center m-10 font-bold">Quiz App</h1>
      <div className="p-6 max-w-xl mx-auto m-12 rounded bg-gray-300">
        <h2 className="text-xl font-bold mb-2">
          Question {currentQuestion + 1} / {questions.length}
        </h2>

        <p className="mb-4">{question.question}</p>

        <div className="space-y-2">
          {question.options.map(option => (
            <button
              key={option}
              onClick={() => setSelectedOption(option)}
              className={`block w-full p-2 border rounded
              ${selectedOption === option
                  ? "bg-blue-500 text-white"
                  : "bg-white"
                }`}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          disabled={!selectedOption}
          onClick={handleNext}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
        >
          {currentQuestion + 1 === questions.length ? "Finish Quiz" : "Next"}
        </button>


        <div className="mt-4 text-sm text-gray-600">
          ⏱ Time: {minutes}:{seconds < 10 ? "0" + seconds : seconds}
          {" "} | ⭐ Score: {score}
        </div>
      </div>
    </>
  )
}

export default Quiz
