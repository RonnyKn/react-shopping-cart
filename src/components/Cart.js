import {
  Box,
  Button,
  Container,
  createTheme,
  FormControl,
  FormLabel,
  IconButton,
  ThemeProvider,
  Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import { CartState } from "../context/Context"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import { Link } from "react-router-dom"

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState()
  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
  }, [cart])

  const myTheme = createTheme({
    palette: {
      mode: "dark",
      secondary: {
        main: "#fff",
      },
    },
  })

  return (
    <div clasName="home" style={{ position: "relative" }}>
      <Container>
        {cart.map((product) => (
          <div
            style={{
              padding: 10,
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="cart-item-img"
              style={{
                width: "80px",
                borderRadius: "50%",
                height: "80px",
                objectFit: "cover",
                margin: "10px",
              }}
            />
            <div
              className="cart-setail"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span>{product.name}</span>
              <span>${product.price.split(".")[0]}</span>
            </div>
            <IconButton
              sx={{ margin: "0 auto" }}
              size="large"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })
              }
            >
              <DeleteForeverIcon />
            </IconButton>
          </div>
        ))}
      </Container>
      <ThemeProvider theme={myTheme}>
        <Box
          className="filter"
          sx={{
            position: "absolute",
            right: "0",
            top: "0",
            padding: "1.5rem",
            backgroundColor: "#343a40",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            width: "20%",
            height: "86vh",
          }}
        >
          <FormControl>
            <FormLabel sx={{ fontWeight: "bold" }}>
              Subtotal: <em>({cart.length}) items</em>
            </FormLabel>

            <Typography variant="h5" style={{ marginBottom: "20px" }}>
              <u>
                <strong>Total: $ {total}</strong>
              </u>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              disabled={cart.length === 0}
              onClick={() => window.alert("Available Soon")}
            >
              Proced to Check Out
            </Button>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                marginTop: "10px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                style={{ width: "100%" }}
              >
                Back To Shoping
              </Button>
            </Link>
          </FormControl>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default Cart
