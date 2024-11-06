
import Login from "./components/form/Login"
import Register from "./components/form/Register"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import MovieDetails from "./components/movieDetails/MovieDetails"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </>
  )
}

export default App
