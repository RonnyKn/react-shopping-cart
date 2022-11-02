import React from "react"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import {
  AppBar,
  Badge,
  Container,
  createTheme,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"
import { CartState } from "../context/Context"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

const Navbar = () => {
  const myTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#fff" },
    },
  })

  const {
    state: { cart },
    dispatch,
  } = CartState()

  return (
    <>
      <AppBar sx={{ padding: "5px", position: "sticky" }}>
        <Container>
          <Toolbar>
            <ThemeProvider theme={myTheme}>
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                <Typography variant="h5">Shoping Cart</Typography>
              </Link>
              <TextField
                variant="outlined"
                color="primary"
                label="Search Product.."
                onChange={() => {}}
                sx={{ margin: "0 auto", width: "25vw" }}
              />
              {/* <Button size="large" variant="contained" color="success">
                
              </Button> */}
              <FormControl sx={{ width: "10vw" }}>
                <Badge badgeContent={cart.length} color="error"></Badge>
                <InputLabel>
                  <AddShoppingCartIcon />
                </InputLabel>
                <Select
                  // labelId="select-label-cart"
                  id="select-cart"
                  // value={age}
                  label="Cart"
                  onChange={() => {}}
                >
                  {cart.length > 0 ? (
                    <>
                      {cart.map((product) => (
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            margin: "0 20px",
                            marginBottom: "20px",
                          }}
                          className="cart-item"
                          key={product.id}
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="cart-item-img"
                            style={{
                              width: "50px",
                              borderRadius: "50%",
                              height: "50px",
                              objectFit: "cover",
                            }}
                          />
                          <div
                            className="cart-item-detail"
                            style={{
                              display: "flex",
                              flex: "1",
                              padding: "0 20px",
                              flexDirection: "column",
                            }}
                          >
                            <span>{product.name}</span>
                            <span>${product.price.split(".")[0]}</span>
                          </div>
                          <IconButton>
                            <DeleteForeverIcon />
                          </IconButton>
                        </span>
                      ))}
                    </>
                  ) : (
                    <MenuItem>cart is empty</MenuItem>
                  )}
                  {/* <MenuItem>Ten</MenuItem> */}
                </Select>
              </FormControl>
            </ThemeProvider>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Navbar
