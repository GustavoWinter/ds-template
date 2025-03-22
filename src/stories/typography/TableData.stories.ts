import type { Meta, StoryObj } from "@storybook/web-components";

import type { TableDataProps } from "./TableData";
import { TableData } from "./TableData";

const meta = {
  component: "TableData",
  tags: ["autodocs"],
  render: (args) => TableData(args),
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
} satisfies Meta<TableDataProps>;

export default meta;
type Story = StoryObj<TableDataProps>;

export const Default: Story = {
  args: {
    text: "Table Data",
    align: "left",
    size: "medium",
    weight: "normal",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
    weight: "normal",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "large",
    weight: "normal",
  },
};

export const Bold: Story = {
  args: {
    ...Default.args,
    size: "medium",
    weight: "bold",
  },
};
