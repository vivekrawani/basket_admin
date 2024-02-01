/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "90vh": "90vh",
        "100p": "100%",
        "90%": "90%",
        "80%": "80%",
      },
    },
  },
  plugins: [],
};
