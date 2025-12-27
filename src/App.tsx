import { Routes, Route, Navigate } from "react-router-dom"
import Quiz from "./pages/Quiz"
import Dashboard from "./pages/Dashboard"
import { useQuiz } from "./context/QuizContext"

const AppRoutes = () => {
  const { isFinished } = useQuiz()

  return (
    <Routes>
      {/* Quiz start / exam hall */}
      <Route path="/quiz" element={<Quiz />} />

      {/* Result day */}
      <Route
        path="/dashboard"
        element={isFinished ? <Dashboard /> : <Navigate to="/dashboard" />}
      />

      {/* Default route */}
      <Route path="*" element={<Navigate to="/quiz" />} />
    </Routes>
  )
}

export default AppRoutes
