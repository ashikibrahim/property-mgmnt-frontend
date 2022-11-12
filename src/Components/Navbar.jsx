import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "../Components/DrawerComp";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";


const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const navigate=useNavigate()
  const dispatch = useDispatch();


  const userMenu = [
    {
      name: "Home",
      path: "/dashboard",
      icon: "",
      value: "one",
    },
    {
      name: "Add-Property",
      path: "/add-property",
      icon: "ri-file-list-line",
      value: "two",
    },
    {
      name: "View_Property",
      path: "/view-property",
      icon: "ri-hospital-line",
      value: "three",
    },
  ];

  const onLogout = () => {
    localStorage.clear();
    navigate("/");
  };

 const menuToBeRendered = userMenu;

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Property
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
           
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="white"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {menuToBeRendered.map((menu)=>(
                    <Tab
                    value={menu.value} 
                    label={menu.name} 
                    onClick={()=>navigate(menu.path)}
                    sx={{ margin: "auto" }}
                    />
                ))}
                

           
                
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained"
               onClick={onLogout}
              >
                Logout
              </Button>
              <Typography sx={{ fontSize: "20px", paddingLeft: "10px" }}>
                Admin
              </Typography>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;



