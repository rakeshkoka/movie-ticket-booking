
import Login from "./components/form/Login"
import Register from "./components/form/Register"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/Home"
import MovieDetails from "./components/movieDetails/MovieDetails"
import Profile from "./components/profile/Profile"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}

export default App
