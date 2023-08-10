import { Popover } from ".";

export default {
  title: "Components/Popover",
  component: Popover,
  argTypes: {
    action: {
      options: ["dual-button", "text-input", "no-action", "single-button"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    image: true,
    action: "dual-button",
    className: {},
    divClassName: {},
  },
};
