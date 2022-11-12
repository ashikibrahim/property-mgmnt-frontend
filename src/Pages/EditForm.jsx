import React, { useEffect } from 'react';
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
import toast from "react-hot-toast";
import { useParams,useNavigate} from 'react-router-dom';



function EditForm() {
  const [property,setProperty]=useState()
  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [price, setPrice] = useState();
  const params=useParams();
  const navigate =useNavigate();
 const id = params.id;

  const getData = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}/api/users/get-property-by-id/${id}`,
      );
      if (response.data.success) {

        // setProperty(response.data.data);
        setName(response.data.data.name)
        setPrice(response.data.data.price)
        setLocation(response.data.data.location)
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("something went wrong no response");
      console.log(error, "catch error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setName(e.target.name.value);
    setPrice(e.target.price.value);
    setLocation(e.target.location.value);
 

    const obj = {
     name,
     price,
     location,
    };
      console.log(obj,"00000000000000000000000");
    try {
      // dispatch(showLoading());
      const response = await axios.post(
        `${BaseUrl}/api/users/update-property/${id}`,
        obj,
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

  useEffect(()=>{
    getData()
  },[])

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
          onSubmit=
          {handleSubmit}
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
                <FormLabel htmlFor="outlined-adornment-amount">
                  Name
                </FormLabel>
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
                <FormLabel htmlFor="outlined-adornment-amount">
                  Location
                </FormLabel>
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
                <FormLabel htmlFor="outlined-adornment-amount">
                  {" "}
                  Price
                </FormLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  label="price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
  )
}

export default EditForm