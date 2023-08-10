import { BarsSearchBars } from ".";

export default {
  title: "Components/BarsSearchBars",
  component: BarsSearchBars,
  argTypes: {
    property1: {
      options: ["tab", "frame-1410125644", "frame-1410125643"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "tab",
    className: {},
  },
};
