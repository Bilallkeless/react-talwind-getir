/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {       
        "brand-color": "#4c3398",
        "primary-brand-color": "#5d3ebc",
        "secondary-brand-color": "#7849f7",
        'brand-yellow': '#ffd300'
      }
    },
  },
  // variants: {
  //   extend: {
  //     colors: ['before']
  //   }
  // },
  plugins: [],
};
