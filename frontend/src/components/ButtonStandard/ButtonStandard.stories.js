import { ButtonStandard } from ".";

export default {
  title: "Components/ButtonStandard",
  component: ButtonStandard,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
    type: {
      options: ["primary", "secondary", "transparent"],
      control: { type: "select" },
    },
    state: {
      options: ["disabled", "pressed", "default"],
      control: { type: "select" },
    },
    iconPosition: {
      options: ["none", "right", "middle", "left"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    type: "primary",
    state: "disabled",
    iconPosition: "none",
    icon: true,
    className: {},
    text: "Button",
  },
};
