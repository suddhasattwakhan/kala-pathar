/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const PopoverFalseNo = ({ className }) => {
  return (
    <div className={`popover-false-no ${className}`}>
      <div className="overlap-group-2">
        <div className="text-7">
          <div className="opps-something-went">
            Opps! <br />
            Something went wrong
          </div>
          <div className="text-wrapper-3">Please try again later.</div>
        </div>
        <div className="ellipse-2" />
        <img
          className="vector-2"
          alt="Vector"
          src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/vector-7.svg"
        />
      </div>
    </div>
  );
};
