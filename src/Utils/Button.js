import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blogs from "../blog";

const buttons = [
  <Button key="one" href="/">
    Home
  </Button>,
  <Button key="two">
    <Link to="/blogs"> Blogs</Link>
  </Button>,
  //   <Button key="three">Three</Button>,
];

export default function GroupOrientation() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
          justifyContent: "center",
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
          variant="contained"
          size="medium"
          sx={{
            width: "100%",
          }}
        >
          <Routes>
            <Route exact path="/blogs" element={<Blogs />}></Route>
          </Routes>
          {buttons}
        </ButtonGroup>
      </Box>
    </Router>
  );
}
