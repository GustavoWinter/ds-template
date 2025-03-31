import { html } from "lit";

import "./button.css";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

export const Button = ({
  label,
  onClick,
  variant = "primary",
  size = "medium",
}: ButtonProps) => {
  const variantClass =
    variant === "primary" ? "form__btn--submit" : "form__btn--secondary";
  const sizeClass = `form__btn--${size}`;
  const className = `${variantClass} ${sizeClass}`;
  return html`
    <button type="button" class=${className} @click=${onClick}>${label}</button>
  `;
};
