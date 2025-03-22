import type { Meta, StoryObj } from "@storybook/web-components";

import type { TableHeaderProps } from "./TableHeader";
import { TableHeader } from "./TableHeader";

const meta = {
  component: "TableHeader",
  tags: ["autodocs"],
  render: (args) => TableHeader(args),
} satisfies Meta<TableHeaderProps>;

export default meta;
type Story = StoryObj<TableHeaderProps>;

export const Default: Story = {
  args: {
    text: "Default Header",
    align: "left",
    size: "medium",
    weight: "normal",
  },
};

export const Small: Story = {
  args: {
    text: "Small Header",
    align: "left",
    size: "small",
    weight: "semibold",
  },
};

export const Large: Story = {
  args: {
    text: "Large Header",
    align: "left",
    size: "large",
    weight: "semibold",
  },
};

export const Bold: Story = {
  args: {
    text: "Bold Header",
    align: "left",
    size: "medium",
    weight: "bold",
  },
};
