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
        // sans: ["Inter", ...defaultTheme.fontFamily.sans],
        sans: ["Poppins", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': "#257F80",
        'secondary': "#75C9BF",
        'primer': '#B3ECEC',
        'black': "#000000",
        'white': '#FFFFFF',
        'gradient-background': 'linear-gradient(to top, #257F80, #75C9BF)',
      },
      fontSize: {
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.441rem',
        '7xl': '4.052rem',
        '8xl': '4.441rem',
        '9xl': '5.052rem',
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

