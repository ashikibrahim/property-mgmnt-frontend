import React from "react";
import { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Badge,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import { Link, useNavigate } from "react-router-dom";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
// import axios from "axios";
import { useEffect } from "react";
import { fontWeight } from "@mui/system";
// import toast from "react-hot-toast";

const PAGES = ["Home", "Pricing", "Contact"];

const Header = () => {
  const [value, setValue] = useState();
  const [userInfo, setUserInfo] = useState(null);
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <AppBar elevation={0} sx={{ background: "transparent", opacity: "0.8" }}>
        <Toolbar elevation={0}>
          {isMatch ? (
            <>
              {/* <div style={{marginLeft:"auto"}}>
             
             </div> */}
              <Typography
                sx={{
                  fontSize: "1.5rem",
                  marginLeft: "10%",
                  color: "#ffff",
                  fontWeight: "Bold",
                }}
              >
                <ApartmentRoundedIcon />
                PROPERTY
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "100px", color: "#ffff" }}
                textColor="#14bef0"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" />
                <Tab label="Pricing" />
                <Tab label="Contact" />
              </Tabs>
              <div style={{ marginLeft: "5%" }}>
                <Typography sx={{ fontWeight: "Bold", fontSize: "1.5rem" }}>
                  <ApartmentRoundedIcon />
                  PROPERTY
                </Typography>
              </div>

              <>
                <Link to="/Profile">
                  <Typography sx={{ color: "1976D2", marginLeft: "10px" }}>
                    {/* {user?.name} */}
                  </Typography>
                </Link>
              </>

              <>
                <Button sx={{ marginLeft: "auto" }} variant="contained"
                 onClick={() => navigate("/login")}
                >
                  Login
                </Button>

               
              </>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
