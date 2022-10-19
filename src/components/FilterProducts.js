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

const FilterProducts = () => {
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
        className="filter-products"
        sx={{
          margin: "auto",
          // height: "20%",
          // width: "20%",
          padding: "1rem",
          backgroundColor: "gray",
          color: "#fff",
          boxSizing: "border-box",
        }}
      >
        <FormControl>
          <FormLabel sx={{ textAlign: "center" }}>Filter Products:</FormLabel>
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
            <FormLabel sx={{ textAlign: "center" }}>Rating:</FormLabel>
            {/* <Rating/> */}
            <Button variant="outlined">Clear Filters</Button>
          </RadioGroup>
        </FormControl>
      </Box>
    </ThemeProvider>
  )
}

export default FilterProducts
