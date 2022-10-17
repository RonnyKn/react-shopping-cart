import "./Navbar.css"
import React from "react"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import {
  AppBar,
  Container,
  createTheme,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"

const Navbar = () => {
  const myTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#fff" },
    },
  })

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
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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
