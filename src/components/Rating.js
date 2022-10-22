import React from "react"
import StarIcon from "@mui/icons-material/Star"
import StarBorderIcon from "@mui/icons-material/StarBorder"

const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i)} style={style}>
          {rating >= i ? (
            <StarIcon fontSize="20px" />
          ) : (
            <StarBorderIcon fontSize="20px" />
          )}
        </span>
      ))}
    </>
  )
}

export default Rating
