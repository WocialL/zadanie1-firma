/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          accent: "hsl(177, 66%, 41%)",
          darker: "hsl(177, 66%, 35%)",
        },
      },
    },
  },
  plugins: [],
};
