// Example `tailwind.config.js` file
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./docs/**/*.html"],
  theme: {
    extend: {
      gridTemplateColumns: {
        list: "repeat(auto-fill, minmax(250px, 1fr))",
        tiles: "repeat(auto-fill, minmax(175px, 1fr))",
        keyvalue: "minmax(auto,1fr) 5fr",
      },
      backgroundImage: {
        "bgimage-1-1": "url('/assets/battleback1-1.png')",
        "bgimage-1-2": "url('/assets/battleback1-2.png')",
        "bgimage-1": "url('/assets/battleback1.png')",
        "bgimage-10-1": "url('/assets/battleback10-1.png')",
        "bgimage-10-2": "url('/assets/battleback10-2.png')",
        "bgimage-10": "url('/assets/battleback10.png')",
        "bgimage-2-1": "url('/assets/battleback2-1.png')",
        "bgimage-2-2": "url('/assets/battleback2-2.png')",
        "bgimage-2": "url('/assets/battleback2.png')",
        "bgimage-3-1": "url('/assets/battleback3-1.png')",
        "bgimage-3-2": "url('/assets/battleback3-2.png')",
        "bgimage-3": "url('/assets/battleback3.png')",
        "bgimage-4-1": "url('/assets/battleback4-1.png')",
        "bgimage-4-2": "url('/assets/battleback4-2.png')",
        "bgimage-4": "url('/assets/battleback4.png')",
        "bgimage-5-1": "url('/assets/battleback5-1.png')",
        "bgimage-5-2": "url('/assets/battleback5-2.png')",
        "bgimage-5": "url('/assets/battleback5.png')",
        "bgimage-6-1": "url('/assets/battleback6-1.png')",
        "bgimage-6-2": "url('/assets/battleback6-2.png')",
        "bgimage-6": "url('/assets/battleback6.png')",
        "bgimage-7-1": "url('/assets/battleback7-1.png')",
        "bgimage-7-2": "url('/assets/battleback7-2.png')",
        "bgimage-7": "url('/assets/battleback7.png')",
        "bgimage-8": "url('/assets/battleback8.png')",
        "bgimage-9-1": "url('/assets/battleback9-1.png')",
        "bgimage-9-2": "url('/assets/battleback9-2.png')",
        "bgimage-9": "url('/assets/battleback9.png')",
      },
      dropShadow: {
        tile: "0 0 3px rgba(0, 0, 0, 0.5)",
      },
      brightness: {
        25: ".25",
      },
      transitionProperty: {
        margin: "margin",
      },
    },
  },
  variants: {
    extend: {
      contrast: ["group-hover", "hover", "focus"],
      brightness: ["group-hover", "hover", "focus"],
      margin: ["group-hover", "hover", "focus"],
      transitionProperty: ["hover", "focus", "group-hover"],
    },
  },
};
