import React from "react";
import { BarsSearchBars } from "../../components/BarsSearchBars";
import { ControlsSwitches } from "../../components/ControlsSwitches";
import { DivWrapper } from "../../components/DivWrapper";
import { Popover } from "../../components/Popover";
import { PopoverFalseNo } from "../../components/PopoverFalseNo";
import { Property1RadioButtons } from "../../components/Property1RadioButtons";
import { PropertyRadio } from "../../components/PropertyRadio";
import { PropertyRadioWrapper } from "../../components/PropertyRadioWrapper";
import "./style.css";

export const Cover = () => {
  return (
    <div className="cover">
      <div className="div-2">
        <div className="overlap-2">
          <div className="overlap-3">
            <div className="overlap-4">
              <div className="frame-3">
                <div className="frame-4">
                  <div className="title">FUN -Damentally</div>
                  <div className="frame-5">
                    <div className="text-wrapper-4">“</div>
                    <div className="months">
                      <div className="apr">Neu-brutalism</div>
                    </div>
                    <div className="text-wrapper-4">”</div>
                  </div>
                </div>
                <div className="frame-6">
                  <div className="apr-wrapper">
                    <div className="apr-2">Design System</div>
                  </div>
                  <div className="apr-wrapper">
                    <div className="apr-2">User Experience</div>
                  </div>
                  <div className="apr-wrapper">
                    <div className="apr-2">Finance</div>
                  </div>
                  <div className="apr-wrapper">
                    <div className="apr-2">Mobile</div>
                  </div>
                </div>
              </div>
              <div className="controls-radio">
                <PropertyRadio className="property-radio-instance" />
                <PropertyRadioWrapper className="property-1-radio-buttons-instance" />
                <DivWrapper className="design-component-instance-node" />
                <Property1RadioButtons className="property-radio-2" />
              </div>
              <img
                className="frame-7"
                alt="Frame"
                src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/frame-1.svg"
              />
              <img
                className="frame-8"
                alt="Frame"
                src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/frame-1.svg"
              />
            </div>
            <div className="bars-search-bars-2">
              <BarsSearchBars className="design-component-instance-node" property1="tab" />
              <BarsSearchBars className="property-frame" property1="frame-1410125643" />
              <BarsSearchBars className="bars-search-bars-instance" property1="frame-1410125644" />
            </div>
            <div className="controls-switches-2">
              <ControlsSwitches className="selected-true-state" selected state="default" />
              <ControlsSwitches className="design-component-instance-node" selected={false} state="default" />
              <ControlsSwitches className="selected-false-state" selected={false} state="disabled" />
              <ControlsSwitches className="controls-switches-instance" selected state="disabled" />
            </div>
            <div className="frame-9">
              <div className="frame-10">
                <div className="text-wrapper-5">Large</div>
                <div className="title-2">18px/18pt</div>
              </div>
              <div className="frame-10">
                <div className="title-3">Abc</div>
                <div className="title-4">Abc</div>
                <div className="title-5">Abc</div>
              </div>
            </div>
            <div className="element">
              <div className="text-wrapper-6">0</div>
            </div>
            <div className="frame-11">
              <div className="title-6">Abc</div>
              <div className="title-7">Abc</div>
              <div className="title-8">Abc</div>
            </div>
          </div>
          <div className="savings">
            <div className="title-9">
              <div className="text-wrapper-7">Savings</div>
              <div className="text-wrapper-8">See All</div>
            </div>
            <div className="frame-12">
              <div className="frame-13">
                <div className="frame-14">
                  <div className="frame-15">
                    <div className="frame-16">
                      <div className="text-wrapper-9">Iphone 13 Mini</div>
                      <img
                        className="img-2"
                        alt="Left actionable"
                        src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/left-actionable-3.svg"
                      />
                    </div>
                    <div className="text-wrapper-10">$699</div>
                  </div>
                </div>
                <div className="rectangle-wrapper">
                  <div className="rectangle-2" />
                </div>
              </div>
              <div className="frame-13">
                <div className="frame-14">
                  <div className="frame-15">
                    <div className="frame-16">
                      <div className="text-wrapper-9">Macbook Pro M1</div>
                      <img
                        className="img-2"
                        alt="Left actionable"
                        src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/left-actionable-3.svg"
                      />
                    </div>
                    <div className="text-wrapper-10">$1,499</div>
                  </div>
                </div>
                <div className="rectangle-wrapper">
                  <div className="rectangle-3" />
                </div>
              </div>
            </div>
            <div className="frame-12">
              <div className="frame-13">
                <div className="frame-14">
                  <div className="frame-15">
                    <div className="frame-16">
                      <div className="text-wrapper-9">Car</div>
                      <img
                        className="img-2"
                        alt="Left actionable"
                        src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/left-actionable-3.svg"
                      />
                    </div>
                    <div className="text-wrapper-10">$1,499</div>
                  </div>
                </div>
                <div className="rectangle-wrapper">
                  <div className="rectangle-4" />
                </div>
              </div>
              <div className="frame-13">
                <div className="frame-14">
                  <div className="frame-15">
                    <div className="frame-16">
                      <div className="text-wrapper-9">House</div>
                      <img
                        className="img-2"
                        alt="Left actionable"
                        src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/left-actionable-3.svg"
                      />
                    </div>
                    <div className="text-wrapper-10">$699</div>
                  </div>
                </div>
                <div className="rectangle-wrapper">
                  <div className="rectangle-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="earning">
            <div className="title-9">
              <div className="text-wrapper-7">Transfer</div>
              <div className="text-wrapper-8">See All</div>
            </div>
            <div className="frame-17">
              <div className="upwork">
                <div className="frame-18">
                  <div className="frame-19">
                    <div className="text-wrapper-11">U</div>
                  </div>
                  <div className="frame-20">
                    <div className="text-wrapper-12">Upwork</div>
                    <div className="text-wrapper-13">$ 3,000</div>
                  </div>
                </div>
              </div>
              <div className="upwork-2">
                <div className="frame-18">
                  <div className="frame-21">
                    <div className="text-wrapper-14">F</div>
                  </div>
                  <div className="frame-20">
                    <div className="text-wrapper-15">Freepik</div>
                    <div className="text-wrapper-16">$ 3,000</div>
                  </div>
                </div>
              </div>
              <div className="upwork-3">
                <div className="frame-22">
                  <div className="frame-21">
                    <div className="text-wrapper-14">F</div>
                  </div>
                  <div className="frame-20">
                    <div className="text-wrapper-15">Freepik</div>
                    <div className="text-wrapper-16">$ 3,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Popover action="dual-button" className="popover-instance" divClassName="popover-2" image />
          <PopoverFalseNo className="popover-false-no-action" />
          <div className="frame-23">
            <div className="frame-24">
              <div className="frame-25" />
              <div className="frame-26">
                <div className="text-wrapper-17">#D97E4A</div>
              </div>
            </div>
            <div className="frame-24">
              <div className="frame-27" />
              <div className="frame-26">
                <div className="text-wrapper-17">#D97E4A</div>
              </div>
            </div>
            <div className="frame-24">
              <div className="frame-28" />
              <div className="frame-26">
                <div className="text-wrapper-17">#D97E4A</div>
              </div>
            </div>
            <div className="frame-24">
              <div className="frame-29" />
              <div className="frame-26">
                <div className="text-wrapper-17">#D97E4A</div>
              </div>
            </div>
            <div className="frame-24">
              <div className="frame-30" />
              <div className="frame-26">
                <div className="text-wrapper-17">#D97E4A</div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="content">
            <div className="text-8">
              <div className="profile-image">
                <img
                  className="white"
                  alt="White"
                  src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/white@2x.png"
                />
              </div>
              <div className="frame-31">
                <div className="text-wrapper-18">Sri Krishnan</div>
                <div className="text-wrapper-19">@sri_krishnan</div>
              </div>
              <img
                className="group"
                alt="Group"
                src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/group-8777-3@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="balance-wrapper">
          <div className="balance">
            <div className="overlap-5">
              <img
                className="group-2"
                alt="Group"
                src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/group-8748-2.png"
              />
              <div className="frame-32">
                <div className="text-wrapper-20">Total Savings</div>
                <div className="text-wrapper-21">$25,000.40</div>
              </div>
              <img
                className="group-3"
                alt="Group"
                src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/group-8777-2@2x.png"
              />
            </div>
            <div className="frame-33">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-3">
                  <div className="rectangle-6" />
                </div>
              </div>
              <img
                className="ticket"
                alt="Ticket"
                src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/ticket-2@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="frame-34">
          <div className="balance-2">
            <div className="overlap-6">
              <img
                className="group-4"
                alt="Group"
                src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/group-8748-1.png"
              />
              <div className="frame-35">
                <div className="text-wrapper-20">Total Transactions</div>
                <div className="text-wrapper-21">$7,000.40</div>
              </div>
              <img
                className="group-5"
                alt="Group"
                src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/group-8777-2@2x.png"
              />
            </div>
            <div className="frame-36">
              <div className="frame-37">
                <div className="text-wrapper-22">Month</div>
              </div>
              <div className="growth">
                <div className="element-2">+ 32%</div>
                <img
                  className="icon-outline-arrow"
                  alt="Icon outline arrow"
                  src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/icon-outline-arrow-up.svg"
                />
              </div>
            </div>
            <div className="frame-38">
              <div className="overlap-7">
                <div className="graphs-wrapper">
                  <div className="graphs">
                    <div className="overlap-group-4">
                      <img
                        className="vector-3"
                        alt="Vector"
                        src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/vector-6.svg"
                      />
                      <img
                        className="line"
                        alt="Line"
                        src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/line-47.svg"
                      />
                      <div className="ellipse-3" />
                    </div>
                  </div>
                </div>
                <div className="frame-39">
                  <div className="base">
                    <div className="text-9">$500</div>
                  </div>
                  <img
                    className="arrow"
                    alt="Arrow"
                    src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/arrow.svg"
                  />
                </div>
              </div>
              <div className="frame-40">
                <div className="frame-41">
                  <div className="months-2">
                    <div className="apr-3">Jan</div>
                  </div>
                  <div className="months-3">
                    <div className="apr-4">Feb</div>
                  </div>
                  <div className="months-2">
                    <div className="apr-3">Mar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stat">
          <div className="frame-42">
            <div className="overlap-group-5">
              <img
                className="vector-4"
                alt="Vector"
                src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/vector-5.svg"
              />
              <div className="frame-43">
                <img
                  className="img-2"
                  alt="Arrow left"
                  src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/arrow-left-1.svg"
                />
                <div className="frame-44">
                  <div className="text-wrapper-12">Income</div>
                  <div className="text-wrapper-23">$ 20,000</div>
                </div>
              </div>
            </div>
            <div className="overlap-8">
              <div className="ellipse-4" />
              <div className="frame-45">
                <img
                  className="img-2"
                  alt="Arrow left"
                  src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/arrow-left.svg"
                />
                <div className="frame-15">
                  <div className="text-wrapper-24">Outcome</div>
                  <div className="text-wrapper-23">$ 17,000</div>
                </div>
              </div>
            </div>
            <img
              className="line-2"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/line-3.svg"
            />
          </div>
        </div>
        <div className="frame-46">
          <div className="balance-3">
            <div className="overlap-group-6">
              <img
                className="group-6"
                alt="Group"
                src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/group-8748.png"
              />
              <img
                className="group-7"
                alt="Group"
                src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/group-8777@2x.png"
              />
            </div>
            <div className="frame-47">
              <div className="text-wrapper-20">Total Savings</div>
              <div className="text-wrapper-21">$25,000.40</div>
            </div>
          </div>
        </div>
        <img
          className="tab-2"
          alt="Tab"
          src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/tab.svg"
        />
        <div className="element-3">
          <div className="text-wrapper-25">.</div>
        </div>
        <div className="right-arrow-wrapper">
          <img
            className="right-arrow"
            alt="Right arrow"
            src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/right-arrow-4.svg"
          />
        </div>
        <div className="element-4">
          <div className="text-wrapper-6">4</div>
        </div>
        <div className="overlap-9">
          <div className="coupon">
            <img
              className="vector-5"
              alt="Vector"
              src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/vector-1.svg"
            />
            <img
              className="mc-donalds-logo"
              alt="Mc donalds logo"
              src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/mc-donalds-logo.svg"
            />
            <div className="overlap-10">
              <div className="group-8">
                <div className="overlap-group-7">
                  <div className="text-wrapper-26">$ 10</div>
                  <div className="text-wrapper-27">McDonalds</div>
                </div>
              </div>
              <p className="p">Valid until 01 February 2022</p>
            </div>
          </div>
          <div className="credit-card-mockup">
            <img
              className="iconsax-linear-add-2"
              alt="Iconsax linear add"
              src="https://generation-sessions.s3.amazonaws.com/77064d5bc2c38f5bf00f73df9268f665/img/iconsax-linear-add.svg"
            />
            <div className="text-wrapper-28">Add Card</div>
          </div>
        </div>
        <div className="overlap-11">
          <div className="element-5">
            <div className="text-wrapper-6">5</div>
          </div>
          <div className="element-6">
            <div className="text-wrapper-29">2</div>
          </div>
        </div>
        <div className="element-7">
          <div className="text-wrapper-30">7</div>
        </div>
      </div>
    </div>
  );
};
