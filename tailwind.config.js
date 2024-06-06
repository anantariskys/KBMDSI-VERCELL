/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Custom: {
          'Purple-1': '#B736C6',
          'Purple-2': '#893B84',
          'Purple-3': '#CA6CBA',
          'Purple-4': '#E3B9D7',
          'Orange-1': '#E28858',
          'Orange-2': '#D56C3A',
          'Light-Blue': '#AAB2E5',
          'Mid-Blue': '#717EB8',
          'Blue': '#3B5697',
          'Dark-Blue': '#151E4F',
          'Light-Blue-2': '#ABCFFA',
          'Mid-Blue-2': '#6D94F9',
          'Blue-2': '#4163E6',
          'Dark-Blue-2': '#273FD4',
        },
       
       
      },
      fontFamily: {
        'glacial-indifference-regular': ['Glacial-Indifference Regular', 'serif'],
        'glacial-indifference-bold': ['Glacial-Indifference Bold', 'serif'],   
     },
      backgroundImage: {
      'gradient-102': 'linear-gradient(102deg, var(--tw-gradient-stops))',
      'gradient-167': 'linear-gradient(167deg, var(--tw-gradient-stops))',
     },
    }
  },
  plugins: [require("daisyui")],
}