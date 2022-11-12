import React from "react";
import {
  Box,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Tab,
  Tabs,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import ArrowDropDownTwoToneIcon from "@mui/icons-material/ArrowDropDownTwoTone";
import "./SearchBar.css";
function SearchBar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      {!isMatch ? (
        <Paper className="search-bar">
          <div>
            <Typography sx={{ color: "grey", marginTop: "8px" }}>
              Location <ArrowDropDownTwoToneIcon sx={{ marginTop: "2px" }} />
            </Typography>
            <Typography sx={{ fontWeight: "Bold" }}>
              Jakarta,Indonesia
            </Typography>
          </div>
          <div>
            <Typography sx={{ color: "grey", marginTop: "8px" }}>
              Property Type <ArrowDropDownTwoToneIcon />{" "}
            </Typography>
            <Typography sx={{ fontWeight: "Bold" }}>
              Minimalist House
            </Typography>
          </div>
          <div>
            <Typography sx={{ color: "grey", marginTop: "8px" }}>
              Price Range
              <ArrowDropDownTwoToneIcon />{" "}
            </Typography>
            <Typography sx={{ fontWeight: "Bold" }}>$5000-$9000</Typography>
          </div>
          <Box sx={{ marginTop: "10px" }}>
            <Button className="search-button" variant="contained">
              <SearchTwoToneIcon sx={{ height: "30px", width: "30px" }} />
            </Button>
          </Box>
        </Paper>
      ) : (
        <Paper className="search-bar-1">
          <div>
            <Typography sx={{ color: "grey", marginTop: "8px" }}>
              Location <ArrowDropDownTwoToneIcon sx={{ marginTop: "2px" }} />
            </Typography>
            <Typography sx={{ fontWeight: "Bold" }}>
              Jakarta,Indonesia
            </Typography>
          </div>
          <Box sx={{ marginTop: "10px" }}>
            <Button className="search-button" variant="contained">
              <SearchTwoToneIcon sx={{ height: "20px", width: "20px" }} />
            </Button>
          </Box>
        </Paper>
      )}
    </>
  );
}

export default SearchBar;
