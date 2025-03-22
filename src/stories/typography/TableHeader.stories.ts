import type { Meta, StoryObj } from "@storybook/web-components";

import type { TableHeaderProps } from "./TableHeader";
import { TableHeader } from "./TableHeader";

const meta = {
  component: "TableHeader",
  tags: ["autodocs"],
  render: (args) => TableHeader(args),
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    weight: {
      control: "select",
      options: ["normal", "semibold", "bold"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
    },
  },
} satisfies Meta<TableHeaderProps>;

export default meta;
type Story = StoryObj<TableHeaderProps>;

export const Default: Story = {
  args: {
    text: "Table Header",
    align: "left",
    size: "medium",
    weight: "normal",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
    weight: "semibold",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "large",
    weight: "semibold",
  },
};

export const Bold: Story = {
  args: {
    ...Default.args,
    size: "medium",
    weight: "bold",
  },
};
