import { Box } from "@mui/material"
import React from "react"
import { CartState } from "../context/Context"
import SingleProduct from "./SingleProduct"
import FilterProducts from "./FilterProducts"

const HomePage = () => {
  const {
    state: { products },
  } = CartState()
  console.log(products)

  return (
    <Box className="home" sx={{ display: "flex" }}>
      <FilterProducts />
      <Box
        className="product-container"
        sx={{
          display: "flex",
          width: "78%",
          padding: "20px",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {products.map((product) => {
          return <SingleProduct product={product} key={product.id} />
        })}
      </Box>
    </Box>
  )
}

export default HomePage
