import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";

function CardComponent({ props }) {
 
  return (
    <>
      {/* {array.map
      ((obj) => ( */}
      <Card
        sx={{
          maxWidth: 345,
          minWidth: "250px",
          margin: "10px",
          borderRadius: "20px",
        }}
      >
        <CardActionArea>
          <CardContent>
            <CardMedia
              sx={{ borderRadius: "20px" }}
              component="img"
              height="140"
              image={props.image}
              alt="green iguana"
            />

            <Typography gutterBottom variant="h5" component="div">
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.location}
            </Typography>
            <Typography variant="body2" color="">
              Rs.{props.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      {/* ))} */}
    </>
  );
}

export default CardComponent;
