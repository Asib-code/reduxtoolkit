/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'nunito': ['Nunito', 'sans-serif'],
   
      },
      colors: {
        'primary':'#5F35F5',
        'secondery': '#11175D',

        
      }
  
   
    },
  },
  plugins: [],
}