import { useNavigate } from "react-router-dom"
import { useQuiz } from "../context/QuizContext"
import { questions } from "../data/questions"

const Dashboard = () => {
  const navigate = useNavigate()

  const {
    score,
    totalTime,
    setScore,
    setTotalTime,
    setCurrentQuestion,
    setIsFinished
  } = useQuiz()

  const handleRestart = () => {
    setScore(0)
    setTotalTime(0)
    setCurrentQuestion(0)
    setIsFinished(false)
    navigate("/quiz")
  }

  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow mt-32">
      <h2 className="text-2xl font-bold mb-4">📄 Quiz Result</h2>

      <div className="space-y-2">
        <p>
          ⭐ <strong>Final Score:</strong> {score} / {questions.length}
        </p>

        {/* <p>
          ⏱ <strong>Total Time:</strong> {totalTime} seconds
        </p> */}
       <p>
           ⏱ <strong>Total Time:</strong> {(totalTime / 60).toFixed(2)} minutes
       </p>

        <p>
          📊 <strong>Summary:</strong>{" "}
          {score >= questions.length / 2
            ? "Pass 👍 Good job"
            : "Fail ❌ Need practice"}
        </p>
      </div>

      <button
        onClick={handleRestart}
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded"
      >
        Restart Quiz
      </button>
    </div>
  )
}

export default Dashboard
