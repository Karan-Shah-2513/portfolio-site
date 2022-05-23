import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import "./App.css";

const pages = ["Home", "Projects", "Blogs"];

function App() {
  return (
    <Button onClick={alert("Hello Button")}>
      <AppBar children={pages} color="default"></AppBar>;
    </Button>
  );
}
export default App;
