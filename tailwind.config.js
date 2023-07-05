/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
          {
            mytheme: {
                "primary": "#fe4a49",
                "secondary": "#fed766",
                "accent": "#009fb7",
                "neutral": "#e6e6ea",
                "base-100": "#f4f4f8",
                "info": "#3abff8",
                "success": "#36d399",
                "warning": "#fbbd23",
                "error": "#f87272",
            },
          },
        ],
      },
}

