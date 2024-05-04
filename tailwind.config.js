/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
      fontSize: {
        huge: ["9rem", { lineHeight: "1" }],
      },
    },
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
  },
  plugins: [],
};
