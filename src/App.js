import * as React from "react";
// import ReactDOM from "react-dom";
// import Button from "@mui/material/Button";
// import AppBar from "@mui/material/AppBar";
import "./App.css";
import SimpleAccordion from "./Utils/SimpleAccordion";
import Typography from "@mui/material/Typography";

// const pages = ["Home", "Projects", "Blogs"];

function App() {
  return (
    <div>
      <SimpleAccordion></SimpleAccordion>
      <Typography className="header">
        <Typography
          className="greetings"
          variant="h2"
          align="center"
          color="white"
          fontFamily={"Lobster"}
        >
          Hi👋 <br />I am Karan Shah
        </Typography>
        <br />
        <Typography variant="h6" align="center" color="white">
          Full Stack Web Developer
        </Typography>
      </Typography>
    </div>
  );
}
export default App;
