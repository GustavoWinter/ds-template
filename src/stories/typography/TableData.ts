import { html } from "lit";

import "./tabledata.css";

export interface TableDataProps {
  text: string;
  align?: "left" | "center" | "right";
  size?: "small" | "medium" | "large";
  weight?: "normal" | "semibold" | "bold";
}

export const TableData = ({
  text,
  align = "left",
  size = "large",
  weight = "normal",
}: TableDataProps) => {
  const alignClass = `td__align-${align}`;
  const sizeClass = `td__size-${size}`;
  const weightClass = `td__weight-${weight}`;
  const className = `td__base ${alignClass} ${sizeClass} ${weightClass}`;
  return html` <td class=${className}>${text}</td> `;
};
