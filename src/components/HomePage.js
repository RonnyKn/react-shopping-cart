import React from "react"
import { CartState } from "../context/Context"

const HomePage = () => {
  const { state } = CartState()
  console.log(state)
}

export default HomePage
