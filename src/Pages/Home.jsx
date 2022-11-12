import React from "react";
import "../Pages/Home.css";
import Header from "../Components/Header";
import { Typography, Grid, Tabs, Tab } from "@mui/material";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import SearchBar from "../Components/SearchBar";
import { fontWeight } from "@mui/system";
import CardComponent from "../Components/CardComponent";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { BaseUrl } from "../Utils/BaseUrl";
import { useEffect } from "react";

function Home() {
  const [property, setProperty] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}/api/users/get-all-properties`
      );
      if (response.data.success) {
        setProperty(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("something went wrong no response");
      console.log(error, "catch error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Grid container className="full-page">
        <Grid item className="page-top-1" xs={12} sm={8} md={8} lg={8} xl={8}>
          <Header />
          <div className="page-top-1-text">
            <Typography variant="h4">
              Easy way to find property according to your choice
            </Typography>
            <div className="page-top-1-text-2">
              <Typography variant="body1">
                We provide various property models for you at affordable prices
                and the best quality
              </Typography>
            </div>
            <SearchBar />
            <div className="page-top-text3-main">
              <div className="page-top-1-text-3">
                <CheckCircleTwoToneIcon sx={{ borderColor: "" }} />
                <Typography>100% built quality guarantee</Typography>
              </div>
              <div className="page-top-1-text-4">
                <CheckCircleTwoToneIcon sx={{ backgroundColor: "" }} />
                <Typography>More affordable price</Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          className="page-top-2"
          xs={12}
          sm={4}
          md={4}
          lg={4}
          xl={4}
        ></Grid>
      </Grid>
      <div className="main-2" align="center">
        <div>
          <Typography
            variant="h5"
            sx={{ fontWeight: "", fontFamily: "fantasy", margin: "10px" }}
          >
            Our Property
          </Typography>
          <Typography sx={{ color: "#808080" }}>
            We provide various type of properties for you with different
            categories
          </Typography>
        </div>
        <Tabs centered>
          <Tab label="Home" sx={{ fontWeight: "Bold", fontSize: "1rem" }} />
          <Tab label="Pricing" sx={{ fontWeight: "Bold", fontSize: "1rem" }} />
          <Tab label="Contact" sx={{ fontWeight: "Bold", fontSize: "1rem" }} />
        </Tabs>

        <div className="card-component">
          {property.map((properties) => (
            <CardComponent props={properties} />
            ))}
            </div>
      </div>
    </>
  );
}

export default Home;
