import { Route, Routes } from "react-router-dom"
import Quiz from "../pages/Quiz"
import Dashboard from "../pages/Dashboard"

const Aprouter = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/dashboard" element={<Dashboard />} />        </Routes>     </>)
}
export default Aprouter 