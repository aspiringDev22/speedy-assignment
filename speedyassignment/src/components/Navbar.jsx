import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#fffeee",
        color: "#fe6134",
        padding: "7px 0px",
        top: 0,
        borderBottom:'1px solid black',
        boxShadow:0,
      }}
    >
      <Toolbar
        variant="dense"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Typography fontFamily="Bree Serif" fontSize="26px" fontWeight="bold">
          <Link to="/">
          Speedy
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
