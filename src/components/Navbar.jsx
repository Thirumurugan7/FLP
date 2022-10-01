import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { logo } from "../utils/constants";
import { SearchBar } from "./";
import "./style.css";
import react from "react";
import { useState } from "react";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="left"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "flex-start",
    }}
  >
    <span className="hate">
      <a href="www.google.com">
        <img
          className="logo"
          src="https://img.icons8.com/material/48/4F7942/arrow-pointing-left--v2.png"
        />
      </a>
    </span>
    <Link to="/">
      <img
        style={{ marginLeft: "25px" }}
        src="https://img.icons8.com/color/48/000000/natural-food.png"
      />
      <span
        style={{
          color: "green",
          paddingLeft: "10px",
          fontSize: "2rem",
          paddingBottom: "10px",
          position: "absolute",
          bottom: "5px",
          marginBottom: "10px",
        }}
      >
        FLP
      </span>
    </Link>
  </Stack>
);

export default Navbar;
