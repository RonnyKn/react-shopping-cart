import "./Navbar.css"
import React from "react"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import {
  AppBar,
  Button,
  Container,
  createTheme,
  Icon,
  IconButton,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material"

const Navbar = () => {
  const myTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#fff" },
    },
  })

  return (
    <>
      <AppBar>
        <Container>
          <Toolbar>
            <ThemeProvider theme={myTheme}>
              <Typography variant="h5">Shoping Cart</Typography>
              <TextField
                variant="outlined"
                color="primary"
                label="Search Product.."
                onChange={() => {}}
                sx={{ margin: "0 auto" }}
              />
              <Button size="large" variant="contained" color="success">
                <AddShoppingCartIcon />
              </Button>
            </ThemeProvider>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Navbar
