import { html } from "lit";

import "./navlink.css";

export interface NavLinkProps {
  text: string;
  href: string;
  size?: "small" | "medium" | "large";
  hoverBg?: boolean;
}

export const NavLink = ({
  text,
  href,
  size = "medium",
  hoverBg = true,
}: NavLinkProps) => {
  const sizeClass = `nav--link--${size}`;
  const hoverBgClass = hoverBg ? "nav--link--hover-bg" : "";
  const className = `nav--link ${sizeClass} ${hoverBgClass}`;
  return html` <a href=${href} class=${className}>${text}</a> `;
};
