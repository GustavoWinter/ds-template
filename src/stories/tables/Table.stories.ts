import type { Meta, StoryObj } from "@storybook/web-components";

import type { TableProps } from "./Table";
import { Table } from "./Table";
import { NavLinkProps } from "../typography/NavLink";
import { html } from "lit";

const meta = {
  component: "Table",
  tags: ["autodocs"],
  render: (args) => Table(args),
  decorators: [(Story) => html`<div class="py-5 px-12">${Story()}</div>`],
} satisfies Meta<TableProps>;

export default meta;
type Story = StoryObj<TableProps>;

export const Default: Story = {
  args: {
    customers: [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        country: "USA",
        state: "California",
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        country: "Canada",
        state: "Ontario",
      },
    ],
    navLinks: [
      {
        text: "Edit",
        href: "#",
        size: "medium",
        hoverBg: true,
      } as NavLinkProps,
      {
        text: "Delete",
        href: "#",
        size: "medium",
        hoverBg: false,
      } as NavLinkProps,
    ],
  },
};
