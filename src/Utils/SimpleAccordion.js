import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupOrientation from "./Button";
// import "./SimpleAccordion.css";

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion
        sx={{
          backgroundColor: "black",
          border: "solid",
          borderBottomColor: "white",
          borderWidth: "10%",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "white",
              }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {/* <Typography></Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <GroupOrientation></GroupOrientation>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
// Credit to the MUI website for this https://mui.com/material-ui/react-accordion/#BasicAccordion.js
