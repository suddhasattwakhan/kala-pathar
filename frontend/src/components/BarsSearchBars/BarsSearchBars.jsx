/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon2 } from "../../icons/Icon2";
import { Icon8 } from "../../icons/Icon8";
import { MicrophoneWrapper } from "../MicrophoneWrapper";
import "./style.css";

export const BarsSearchBars = ({ property1, className }) => {
  return (
    <div className={`bars-search-bars ${property1} ${className}`}>
      {property1 === "tab" && (
        <div className="frame">
          <div className="div">
            <Icon2 className="icon" />
            <div className="text-wrapper">Search</div>
          </div>
          <Icon8 className="icon" />
        </div>
      )}

      {["frame-1410125643", "frame-1410125644"].includes(property1) && (
        <>
          <div className="text-wrapper-2">Cancel</div>
          <div className="frame-wrapper">
            <div className="frame-2">
              <div className="div">
                <Icon2 className="icon" />
                <div className="search-2">
                  {property1 === "frame-1410125644" && <>Colorado|</>}

                  {property1 === "frame-1410125643" && <>Search</>}
                </div>
              </div>
              {property1 === "frame-1410125643" && <MicrophoneWrapper />}

              {property1 === "frame-1410125644" && <Icon8 className="icon" />}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

BarsSearchBars.propTypes = {
  property1: PropTypes.oneOf(["tab", "frame-1410125644", "frame-1410125643"]),
};
