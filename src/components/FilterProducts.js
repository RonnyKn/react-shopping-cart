import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Checkbox,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material"
import React from "react"
import { useState } from "react"
import Rating from "./Rating"

const FilterProducts = () => {
  const [rate, setRate] = useState(3)

  const myTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  })

  return (
    <ThemeProvider theme={myTheme}>
      <Box
        className="filter"
        sx={{
          margin: "auto",
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
          <FormLabel sx={{ textAlign: "center", fontWeight: "bold" }}>
            Filter Products:
          </FormLabel>
          <RadioGroup defaultValue="ascending" name="radio-buttons-group">
            <FormControlLabel
              value="ascending"
              control={<Radio />}
              label="Ascending"
              id={`inline-1`}
            />
            <FormControlLabel
              value="descending"
              control={<Radio />}
              label="Descending"
              id={`inline-2`}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Include Out of Stock"
              id={`inline-3`}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Fast Delivery Only"
              id={`inline-4`}
            />
            <FormLabel
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Rating :
              <br />
              <Rating
                rating={rate}
                onClick={(i) => setRate(i)}
                style={{
                  cursor: "pointer",
                }}
              />
            </FormLabel>
            <Button variant="outlined">Clear Filters</Button>
          </RadioGroup>
        </FormControl>
      </Box>
    </ThemeProvider>
  )
}

export default FilterProducts
