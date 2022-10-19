import { Box } from "@mui/material"
import React from "react"

const SingleProduct = ({ product }) => {
  return (
    <Box className="single-product">
      <span>{product?.name}</span>
    </Box>
  )
}

export default SingleProduct
