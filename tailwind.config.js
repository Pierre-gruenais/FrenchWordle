/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: {
          // pour utiliser les couleurs ex: class="bg-blue-1 text-blue-5"
          1: "#191111", //radix red1 background
          2: "#201314", //radix red2  background
          3: "#3B1219", //radix red3 Interactive components
          4: "#500F1C", //radix red4 nteractive components
          5: "#611623", //radix red5 Interactive components
          6: "#72232D", //radix red6 Borders and separators
          7: "#8C333A", //radix red7 Borders and separators
          8: "#B54548", //radix red8 Borders, focus rings
          9: "#E5484D", //radix red9 Solid backgrounds, buttons Pairs with White text
          10: "#EC5D5E", //radix red10 Solid backgrounds, buttons Pairs with White text
          11: "#FF9592", //radix red11 Secondary text, links Pairs with Background colors
          12: "#FFD1D9", //radix red12  High-contrast text Pairs with Background colors
        },
      },
    },
  },
  plugins: [],
};
