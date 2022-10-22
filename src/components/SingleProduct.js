import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material"
import React from "react"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart"

const SingleProduct = ({ product }) => {
  return (
    <Box className="single-product">
      <Card sx={{ margin: "15px", width: "300px" }}>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.image}
        />
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            {product.name}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <Box
            sx={{
              border: "2px solid green",
              borderRadius: "20%",
            }}
          >
            <IconButton size="small">
              <AddShoppingCartIcon />
            </IconButton>
          </Box>
          <Box sx={{ border: "2px solid red", borderRadius: "20%" }}>
            <IconButton size="small">
              <RemoveShoppingCartIcon />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </Box>
  )
}

export default SingleProduct
