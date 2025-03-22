import type { Meta, StoryObj } from "@storybook/web-components";

import type { TableDataProps } from "./TableData";
import { TableData } from "./TableData";

const meta = {
  component: "TableData",
  tags: ["autodocs"],
  render: (args) => TableData(args),
} satisfies Meta<TableDataProps>;

export default meta;
type Story = StoryObj<TableDataProps>;

export const Default: Story = {
  args: {
    text: "Default Data",
    align: "left",
    size: "medium",
    weight: "normal",
  },
};

export const Small: Story = {
  args: {
    text: "Small Data",
    align: "left",
    size: "small",
    weight: "normal",
  },
};

export const Large: Story = {
  args: {
    text: "Large Data",
    align: "left",
    size: "large",
    weight: "normal",
  },
};

export const Bold: Story = {
  args: {
    text: "Bold Data",
    align: "left",
    size: "medium",
    weight: "bold",
  },
};
