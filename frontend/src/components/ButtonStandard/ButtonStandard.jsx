/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonStandard = ({ size, type, state, iconPosition, icon, className, text = "Button" }) => {
  return (
    <div className={`button-standard ${size} ${type} state-${state} ${iconPosition} icon-${icon} ${className}`}>
      {iconPosition === "none" && <div className="text">{text}</div>}

      {iconPosition === "right" && <div className="text-2">{text}</div>}

      {icon && (
        <img
          className="iconsax-linear-add"
          alt="Iconsax linear add"
          src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/iconsax-linear-add-81.svg"
        />
      )}

      {["left", "middle"].includes(iconPosition) && <div className="text-3">{text}</div>}
    </div>
  );
};

ButtonStandard.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
  type: PropTypes.oneOf(["primary", "secondary", "transparent"]),
  state: PropTypes.oneOf(["disabled", "pressed", "default"]),
  iconPosition: PropTypes.oneOf(["none", "right", "middle", "left"]),
  icon: PropTypes.bool,
  text: PropTypes.string,
};
