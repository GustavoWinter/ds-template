import { fn } from "@storybook/test";

import type { Meta, StoryObj } from "@storybook/web-components";

import type { ButtonProps } from "./Button";
import { Button } from "./Button";

const meta = {
  component: "ds-btn",
  tags: ["autodocs"],
  render: (args) => Button(args),
  args: { onClick: fn() },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    label: "Submit",
    variant: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    label: "Secondary",
    variant: "secondary",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    label: "Small Button",
    variant: "primary",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    label: "Large Button",
    variant: "primary",
    size: "large",
  },
};
