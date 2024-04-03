import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "black",
      values: [
        {
          name: "black",
          value: "#000000",
        },
        // ... other backgrounds ...
      ],
    },
  },
};

export default preview;
