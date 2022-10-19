import { Box } from "@mui/material"
import React from "react"
import { CartState } from "../context/Context"
import SingleProduct from "./SingleProduct"

const HomePage = () => {
  const {
    state: { products },
  } = CartState()
  console.log(products)

  return (
    <Box className="home">
      {/* <Filter/> */}
      <Box className="product-container">
        {products.map((product) => {
          return <SingleProduct product={product} key={product.id} />
        })}
      </Box>
    </Box>
  )
}

export default HomePage
