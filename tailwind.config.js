/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      margin: {
        15: "3.75rem",
      },
      maxWidth: {
        95: "23.75rem",
      },
      maxHeight: {
        95: "23.75rem",
        78: "19.5rem",
        
      },
      height: {
        78: "19.5rem",
        62:"15.5rem"
      },
      width: {
        68: "16.75rem",
      },
    },
  },
  plugins: [],
};
