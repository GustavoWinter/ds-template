import type { Meta, StoryObj } from "@storybook/web-components";

import type { TitleProps } from "./Title";
import { Title } from "./Title";

const meta = {
  component: "Title",
  tags: ["autodocs"],
  render: (args) => Title(args),
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<TitleProps>;

export default meta;
type Story = StoryObj<TitleProps>;

export const Default: Story = {
  args: {
    text: "This is a default heading <h1>",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    ...Default.args,
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "large",
  },
};
