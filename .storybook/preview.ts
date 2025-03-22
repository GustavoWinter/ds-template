import type { Preview } from "@storybook/web-components";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#000000" },
        { name: "gray", value: "#f0f0f0" },
        { name: "gray-dark", value: "#343a40" },
        { name: "gray-light", value: "#f8f9fa" },
        { name: "transparent", value: "transparent" },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
