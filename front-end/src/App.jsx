import Dashboard from "./components/dashboard/Dashboard"
import Login from "./components/form/Login"
import Register from "./components/form/Register"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>
    </>
  )
}

export default App
