/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Neue_Montreal: ['Neue_Montreal', 'sans-serif'],
        Test_Founders_Grotesk_X: ['Test_Founders_Grotesk_X', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

