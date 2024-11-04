import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Noto Sans", "ui-sans-serif", "system-ui"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
        bebas: ["Bebas Neue", "sans-serif"],
        paytone: ["Paytone One", "monospace"],
        archivo: ["Archivo Narrow", "ui-sans-serif"],
        cinzel: ["Cinzel", "ui-monospace"],
      },
      inset: {
        '1': '1px',
        '2': '5px',
      },
      spacing: {
        '24': '99px',
      },
      borderRadius: {
        'xl': '17px',
      },
    },
  },
  plugins: [],
};

export default config;
