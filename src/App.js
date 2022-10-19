import { Container } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Cart from "./components/Cart"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} exact></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
