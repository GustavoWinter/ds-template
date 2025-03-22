import type { Meta, StoryObj } from "@storybook/web-components";

import type { NavLinkProps } from "./NavLink";
import { NavLink } from "./NavLink";

const meta = {
  component: "NavLink",
  tags: ["autodocs"],
  render: (args) => NavLink(args),
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    hoverBg: {
      control: "boolean",
    },
  },
} satisfies Meta<NavLinkProps>;

export default meta;
type Story = StoryObj<NavLinkProps>;

export const Default: Story = {
  args: {
    text: "Home",
    href: "#",
    size: "medium",
    hoverBg: true,
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

export const NoHoverBg: Story = {
  args: {
    ...Default.args,
    size: "medium",
    hoverBg: false,
  },
};
