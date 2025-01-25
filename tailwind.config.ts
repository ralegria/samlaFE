import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: "299px",
      sm: "300px",
      md: "768px",
      lg: "1025px",
      xl: "1280px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: "var(--brand)",
        fill: "var(--fill)",
        stroke: "var(--stroke)",
      },
      backgroundImage: {
        'dark-gradient':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.50) -150.37%, rgba(255, 255, 255, 0.00) 100%)',
        'dark-gradient-team':
          'linear-gradient(180deg, #021625 33.79%, #073356 100%)',
        'dark-gradient-map':
          'linear-gradient(180deg, #063254 0%, #001D36 100%)',
          'dark-gradient-market':
          'linear-gradient(182deg, #01161C -2.35%, #001D36 98.51%)',
          'dark-gradient-banner':
          'linear-gradient(180deg, #051532 0%, #071E48 10.94%, #073A73 21.98%, #074882 31.24%, #046099 44.77%, #015F8C 57.77%, #032C40 77.47%, #002631 89.97%, #001419 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
