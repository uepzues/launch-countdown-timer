/** @type {import('tailwindcss').Config} */
// import threeD from "tailwindcss-3d";

import plugin from "tailwindcss/plugin";

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

export default {
  content: ["./src/**/*.jsx", "./src/*.jsx"],
  theme: {
    extend: {
      keyframes: {
        turns: {
          "0%": { transform: "rotateX(0deg)" },
          "50%": { transform: "rotateX(-90deg)" },
          "100%": { transform: "rotateX(-180deg)" },
        },
      },
      animation: {
        turn: "turns 1s ease-in-out infinite",
      },
      backgroundImage: {
        stars: "url('/images/bg-stars.svg')",
        hills: "url('/images/pattern-hills.svg')",
      },
      fontFamily: {
        redhat: ["Red Hat Text", "sans-serif"],
      },
    },
  },
  plugins: [Myclass],
};
