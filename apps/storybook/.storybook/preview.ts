import type { Preview } from "@storybook/react"
import "../src/index.css"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    options: {
      storySort: {
        order: [
          "Getting Started",
          ["Welcome", "Installation", "Theming"],
          "Components",
          [
            "Data Display",
            "Data Input",
            "Feedback",
            "Layout",
            "Navigation",
            "Overlay",
          ],
        ],
      },
    },
  },
}

export default preview
