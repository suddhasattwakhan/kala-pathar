import { ControlsSwitches } from ".";

export default {
  title: "Components/ControlsSwitches",
  component: ControlsSwitches,
  argTypes: {
    state: {
      options: ["disabled", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    selected: true,
    state: "disabled",
    className: {},
  },
};
