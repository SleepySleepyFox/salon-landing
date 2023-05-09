/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'secondary': '#FBB034'
      },
      textColor:{
        'secondary': '#FBB034'
      },
      backgroundImage: {
        'hero': "url('./src/assets/jason-dent-itA0ybdIDTs-unsplash.jpg')",
      }
    },
  },
  plugins: [],
}

