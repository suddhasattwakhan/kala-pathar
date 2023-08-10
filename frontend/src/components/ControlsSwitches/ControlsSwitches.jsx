/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ControlsSwitches = ({ selected, state, className }) => {
  return (
    <div className={`controls-switches ${state} selected-${selected} ${className}`}>
      <div className="knob" />
    </div>
  );
};

ControlsSwitches.propTypes = {
  selected: PropTypes.bool,
  state: PropTypes.oneOf(["disabled", "default"]),
};
