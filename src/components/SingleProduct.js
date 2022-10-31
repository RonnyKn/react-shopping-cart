import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material"
import React from "react"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart"
import { CartState } from "../context/Context"

const SingleProduct = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState()

  return (
    <Box className="single-product">
      <Card sx={{ margin: "15px", width: "300px" }}>
        <CardMedia
          component="img"
          height="220"
          image={product.image}
          alt={product.image}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            variant="h6"
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {product.name}
          </Typography>
          <Typography>${product.price.split(".")[0]}</Typography>
          {product.fastDelivery ? (
            <Typography>Fast Delivery</Typography>
          ) : (
            <Typography>4 Days Delivery</Typography>
          )}
          <Rating name="read-only" value={product.ratings} readOnly />
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {cart.some((p) => p.id === product.id) ? (
            <Box sx={{ border: "2px solid red", borderRadius: "20%" }}>
              <IconButton size="small">
                <RemoveShoppingCartIcon />
              </IconButton>
            </Box>
          ) : (
            <Box
              sx={{
                border: "2px solid green",
                borderRadius: "20%",
              }}
            >
              <IconButton size="small" disabled={!product.inStock}>
                {!product.inStock ? "Out of Stock" : <AddShoppingCartIcon />}
              </IconButton>
            </Box>
          )}
        </CardActions>
      </Card>
    </Box>
  )
}

export default SingleProduct
