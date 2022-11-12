import React from "react";
import { toast } from "react-hot-toast";
import Navbar from "../Components/Navbar";
import {
  Card,
  CardContent,
  Button,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  FormLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { BaseUrl } from "../Utils/BaseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddForm() {
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [price, setPrice] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("name", name);
    formdata.append("location", location);
    formdata.append("price", price);
    formdata.append("image", image);
    console.log(formdata, "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
    try {
      // dispatch(showLoading());
      const response = await axios.post(
        `${BaseUrl}/api/users/applyproperty`,
        formdata,
      );
      console.log(response);
      // dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/dashboard");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      // dispatch(hideLoading());
      toast.error("something went wrong frontend");
    }
  };
  return (
    <div>
      <>
        <Navbar />
        {/* <PropertyForm/> */}
        <div style={{ paddingTop: "70px" }}>
          {/* <h1 className="page-title mt-5"> </h1> */}

          <Typography gutterBottom variant="h4" align="center">
            Property-Form
            <hr />
          </Typography>
          <form
            onSubmit={handleSubmit}
            align="center"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* <Card> */}
            <CardContent>
              <div
                align="center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <FormControl fullWidth sx={{ m: 1, width: "70ch" }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Name
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    label="name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1, width: "70ch" }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Location
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    label="location"
                    type="text"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </FormControl>

                <FormControl fullWidth sx={{ m: 1, width: "70ch" }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    {" "}
                    Price
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    label="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </FormControl>

                {/* <Typography sx={{ mr: 20 }} align="center">image</Typography> */}
                <FormControl fullWidth sx={{ m: 1, width: "70ch" }}>
                  <FormLabel htmlFor="outlined-adornment-amount">
                    image
                  </FormLabel>
                  <InputLabel htmlFor="outlined-adornment-amount"></InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    label="Amount"
                    type="file"
                    name="image"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </FormControl>
                <Box align="center">
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </div>
            </CardContent>
          </form>
        </div>
      </>
    </div>
  );
}

export default AddForm;
