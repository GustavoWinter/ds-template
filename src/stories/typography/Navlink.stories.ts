import type { Meta, StoryObj } from "@storybook/web-components";

import type { NavLinkProps } from "./NavLink";
import { NavLink } from "./NavLink";

const meta = {
  component: "NavLink",
  tags: ["autodocs"],
  render: (args) => NavLink(args),
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
    text: "Home",
    href: "#",
    size: "small",
    hoverBg: true,
  },
};

export const Medium: Story = {
  args: {
    text: "Home",
    href: "#",
    size: "medium",
    hoverBg: true,
  },
};

export const Large: Story = {
  args: {
    text: "Home",
    href: "#",
    size: "large",
    hoverBg: true,
  },
};

export const NoHoverBg: Story = {
  args: {
    text: "Home",
    href: "#",
    size: "medium",
    hoverBg: false,
  },
};
