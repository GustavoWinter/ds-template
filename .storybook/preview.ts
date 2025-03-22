import type { Preview } from "@storybook/web-components";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

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
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...INITIAL_VIEWPORTS,
        customDesktop: {
          name: "Desktop (1280x720)",
          styles: {
            width: "1280px",
            height: "720px",
          },
        },
        largeDesktop: {
          name: "Large Desktop (1920x1080)",
          styles: {
            width: "1920px",
            height: "1080px",
          },
        },
      },
      defaultViewport: "responsive",
    },
    layout: "fullscreen",
  },
};

export default preview;
