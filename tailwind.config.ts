import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{vue,ts}",
    "./layouts/**/*.{vue,ts}",
    "./pages/**/*.{vue,ts}",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./assets/scss/**/*.scss", // Для SCSS файлів
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
