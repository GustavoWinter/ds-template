import type { Meta, StoryObj } from "@storybook/web-components";

import type { TitleProps } from "./Title";
import { Title } from "./Title";

const meta = {
  component: "Title",
  tags: ["autodocs"],
  render: (args) => Title(args),
} satisfies Meta<TitleProps>;

export default meta;
type Story = StoryObj<TitleProps>;

export const Default: Story = {
  args: {
    text: "This is a default heading",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    text: "This is a small heading",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    text: "This is a medium heading",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    text: "This is a large heading",
    size: "large",
  },
};
