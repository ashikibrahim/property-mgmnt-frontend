import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "../Components/Navbar";
import { BaseUrl } from "../Utils/BaseUrl";
import toast from "react-hot-toast";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function ViewProperty() {
  const [property, setProperty] = useState([]);
  const navigate = useNavigate()

  const getData = async () => {
    try {
      const response = await axios.get(
        `${BaseUrl}/api/users/get-all-properties`
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setProperty(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("something went wrong no response");
      console.log(error, "catch error");
    }
  };

  const deleteData = async (id) => {
    try {
      console.log(id);
      const response = await axios.delete(
        `${BaseUrl}/api/users/delete-properties/${id}`
      );
      if(response.data.success){
        getData()
        toast.success(response.data.message)
      }
    } catch (error) {
      toast.error("error")
    }
  };

  useEffect(() => {
    getData();
  }, []);

 

  return (
    <>
      <Navbar />

      <div className="container" style={{ paddingTop: "100px" }}>
        <div align="center">
          <h3>View Properties</h3>
          <hr />
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Property name</TableCell>
                <TableCell align="center">image</TableCell>
                <TableCell align="center">Location</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {property.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">
                    <img
                      alt={row.image}
                      src={row.image}
                      style={{
                        width: "150px",
                        height: "70px",
                        objectFit: "contain",
                      }}
                    />
                  </TableCell>
                  <TableCell align="center">{row.location}</TableCell>
                  <TableCell align="center">{row.price}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="danger"
                      style={{ margin: "5px" }}
                      onClick={()=>deleteData(row._id)}  
                    >
                      Delete
                    </Button>
                    <Button variant="primary"
                     onClick={()=>navigate(`/edit-property/${row._id}`)}
                    >Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default ViewProperty;
