import { html } from "lit";

import "./title.css";

export interface TitleProps {
  text: string;
  size?: "small" | "medium" | "large";
}

export const Title = ({ text, size = "medium" }: TitleProps) => {
  const sizeClass = `title__h1--${size}`;
  return html` <h1 class="title__h1 ${sizeClass}">${text}</h1> `;
};
