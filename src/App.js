import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import "./App.css";
import SimpleAccordion from "./SimpleAccordion";

const pages = ["Home", "Projects", "Blogs"];

function App() {
  return (
    <div>
      <SimpleAccordion></SimpleAccordion>
    </div>
  );
}
export default App;
