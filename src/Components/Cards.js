import * as React from "react";
import "./../stylings/card.css";

export default function Card() {
  return (
    <>
      <div className="card-container">
        <div className="card one">
          <div className="card-content">Project 1</div>
        </div>
        <div className="card two">
          <div className="card-content">Project 2</div>
        </div>
        <div className="card three">
          <div className="card-content">Project 3</div>
        </div>
        <div className="card four">
          <div className="card-content">Project 4</div>
        </div>
      </div>
    </>
  );
}
