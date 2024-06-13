import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Roboto_Serif: ["var(--font-roboto)"],
        mono: ["var(--font-roboto-mono)"],
      },
      colors: {
        "cs-gray": "#434843",
        "cs-black": "#212221",
        "cs-yellow": "#FFB600",
        "cs-light-yellow": "#FBFEF2",
        "vad-gray": "#434843",
        "vad-lightgray": "#8B9394",
        "vad-lightergray": "#E0E2E0",
        "vad-black": "#212221",
        "vad-darkyellow": "#E2E3D1",
        "vad-yellow": "#FFB600",
        "vad-lightyellow": "#FBFEF2",
        "vad-light-yellow": "#FBFEF2",
        "vad-blue": "#4AC2EF",
        "vad-red": "#FF666E",
        "vad-green": "#2BFF67",
        "vad-purple": "#A594D4",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};
export default config;
