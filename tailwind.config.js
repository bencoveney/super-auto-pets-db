// Example `tailwind.config.js` file
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./docs/**/*.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid

        list: "repeat(auto-fill, minmax(250px, 1fr))",
      },
    },
  },
};
