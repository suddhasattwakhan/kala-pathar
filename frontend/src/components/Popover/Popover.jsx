/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ButtonStandard } from "../ButtonStandard";
import "./style.css";

export const Popover = ({ image, action, className, divClassName }) => {
  return (
    <div className={`popover ${action} image-${image} ${className}`}>
      {(!image || action === "no-action" || action === "text-input") && (
        <div className="overlap">
          {action === "text-input" && (
            <img
              className="rectangle"
              alt="Rectangle"
              src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/rectangle-4056-1.svg"
            />
          )}

          {(!image || action === "no-action") && (
            <div className="text-4">
              <div className="remove-item">
                {action === "dual-button" && <>Remove item?</>}

                {(image || action === "single-button") && (
                  <>
                    Opps! <br />
                    Something went wrong
                  </>
                )}

                {action === "text-input" && (
                  <>
                    What’s
                    <br /> your team name
                  </>
                )}
              </div>
              <div className="are-you-sure-want-to">
                {action === "dual-button" && (
                  <p className="text-wrapper-31">Are you sure want to remove this item from your cart?</p>
                )}

                {(image || action === "single-button") && <>Please try again later.</>}

                {action === "text-input" && (
                  <p className="text-wrapper-31">The team name will be shown for all members.</p>
                )}
              </div>
            </div>
          )}

          {(!image || action === "text-input") && (
            <img
              className="img"
              alt="Rectangle"
              src={
                image
                  ? "https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/rectangle-4055.svg"
                  : action === "dual-button"
                  ? "https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/vector.svg"
                  : action === "single-button"
                  ? "https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/vector-8.svg"
                  : "https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/rectangle-4055-1.svg"
              }
            />
          )}

          {action === "no-action" && <div className="ellipse" />}
        </div>
      )}

      {(action === "no-action" || (image && action === "dual-button") || (image && action === "single-button")) && (
        <>
          <img
            className="vector"
            alt="Vector"
            src={
              action === "no-action"
                ? "https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/vector-7.svg"
                : action === "single-button"
                ? "https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/vector-9.svg"
                : "https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/vector-10.svg"
            }
          />
          <div className="views-images-ratio" />
        </>
      )}

      {image && ["dual-button", "single-button", "text-input"].includes(action) && (
        <div className="text-5">
          <div className="remove-item-2">
            {action === "dual-button" && <>Remove item?</>}

            {action === "text-input" && (
              <>
                What’s
                <br /> your team name
              </>
            )}

            {action === "single-button" && (
              <>
                Opps! <br />
                Something went wrong
              </>
            )}
          </div>
          <div
            className={`are-you-sure-want-to-2 ${
              ["dual-button", "single-button"].includes(action) ? divClassName : undefined
            }`}
          >
            {action === "dual-button" && (
              <p className="text-wrapper-31">Are you sure want to remove this item from your cart?</p>
            )}

            {action === "text-input" && <p className="text-wrapper-31">The team name will be shown for all members.</p>}

            {action === "single-button" && <>Please try again later.</>}
          </div>
        </div>
      )}

      {action === "dual-button" && (
        <div className="actions">
          <ButtonStandard
            className="button-standard-instance"
            icon={false}
            iconPosition="none"
            size="medium"
            state="default"
            text="Sure"
            type="primary"
          />
          <ButtonStandard
            className="button-standard-instance"
            icon={false}
            iconPosition="none"
            size="medium"
            state="default"
            text="No, Thanks"
            type="transparent"
          />
        </div>
      )}

      {action === "single-button" && (
        <ButtonStandard
          className={`${!image ? "class" : "class-2"}`}
          icon={false}
          iconPosition="none"
          size="medium"
          state="default"
          text={!image ? "Okay" : "Sure"}
          type="primary"
        />
      )}

      {action === "text-input" && (
        <>
          <div className="controls-text-fields">
            <div className="overlap-group">
              <div className="text-6">Input text</div>
            </div>
          </div>
          <div className="actions-2">
            <ButtonStandard
              className="button-standard-instance"
              icon={false}
              iconPosition="none"
              size="medium"
              state="default"
              text="Button"
              type="primary"
            />
            <ButtonStandard
              className="button-standard-instance"
              icon={false}
              iconPosition="none"
              size="medium"
              state="default"
              text="Cancel"
              type="transparent"
            />
          </div>
        </>
      )}

      {image && action === "text-input" && <div className="views-images-ratio-2" />}
    </div>
  );
};

Popover.propTypes = {
  image: PropTypes.bool,
  action: PropTypes.oneOf(["dual-button", "text-input", "no-action", "single-button"]),
};
