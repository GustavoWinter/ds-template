import { html } from "lit";

import "./tableheader.css";

export interface TableHeaderProps {
  text: string;
  align?: "left" | "center" | "right";
  size?: "small" | "medium" | "large";
  weight?: "normal" | "semibold" | "bold";
}

export const TableHeader = ({
  text,
  align = "left",
  size = "medium",
  weight = "semibold",
}: TableHeaderProps) => {
  const alignClass = `th__align-${align}`;
  const sizeClass = `th__size-${size}`;
  const weightClass = `th__weight-${weight}`;
  const className = `th__base ${alignClass} ${sizeClass} ${weightClass}`;
  return html` <th class=${className}>${text}</th> `;
};
