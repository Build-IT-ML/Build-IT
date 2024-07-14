/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.jsx",
    "./node_modules/primereact/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': "#0D79B9",
        'secondary': "#1D4489",
        "linear-blue": "#121B75",
        "blue-lagoon": "#1E96C8",
        "cloud-blue": "#96D8E8",
        "white-blue": "#D6F0F6",
      },
      fontSize: {
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.441rem',
        '7xl': '4.052rem',
        '8xl': '4.441rem',
      },
      lineHeight: {
        '11': '2.6rem',
        '12': '2.8rem',
        '13': '3rem',
        '14': '3.2rem',
        '15': '3.4rem',
        '16': '3.6rem',
        '17': '3.8rem',
        '18': '4rem',
        '19': '4.2rem',
      },
    },
  },
  plugins: [],
}

