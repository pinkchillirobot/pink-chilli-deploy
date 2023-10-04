import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
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
      colors: {
        "chilli-pink": "#eba7ab",
        "chilli-gray": "#b9bfc0",
        "chilli-grey": "#b9bfc0",
      },
      fontFamily: {
        sans: ["Suisse", ...defaultTheme.fontFamily.sans],
        mono: ["SuisseMono", ...defaultTheme.fontFamily.mono],
      },
      screens: {
        xs: "500px",
        touch: { raw: "(pointer:coarse)" },
      },
    },
  },
  plugins: [],
};

export default config;
