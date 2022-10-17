import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Cart from "./components/Cart"
import HomePage from "./components/HomePage"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
