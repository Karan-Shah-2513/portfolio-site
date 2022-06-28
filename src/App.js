import * as React from "react";
// import ReactDOM from "react-dom";
// import Button from "@mui/material/Button";
// import AppBar from "@mui/material/AppBar";
import "./stylings/App.css";
import SimpleAccordion from "./Components/SimpleAccordion";
import Typography from "@mui/material/Typography";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import Card from "./Components/Card";
// import { duration } from "@mui/material";

// const pages = ["Home", "Projects", "Blogs"];

function App() {
  gsap.registerPlugin(TextPlugin);
  const text = React.useRef();
  React.useEffect(() => {
    gsap.to(text.current, {
      duration: 3,
      text: "Full Stack Web Developer",
      ease: "none",
    });
  });
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
        <Typography
          variant="h6"
          align="center"
          color="white"
          id="subtitle"
          ref={text}
        ></Typography>
      </Typography>
      <Card></Card>
    </div>
  );
}
export default App;
