import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./Table"; // Import the ds-table component
import { NavLinkProps } from "../typography/NavLink";

const meta = {
  component: "ds-table",
  tags: ["autodocs"],
  render: (args) => html`
    <ds-table
      .customers="${args.customers}"
      .navLinks="${args.navLinks}"
    ></ds-table>
  `,
  decorators: [(Story) => html`<div class="py-5 px-12">${Story()}</div>`],
} satisfies Meta;

export default meta;
type Story = StoryObj;

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
