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
        'secondary': '#FBB034',
        'paragraph': '#ABABAB'
      },
      backgroundImage: {
        'hero': "url('/assets/jason-dent-itA0ybdIDTs-unsplash.jpg')",
        'bookbg': "url('/assets/BookSection_bg.png')",
        'affiliatebg': "url('/assets/affiliate-bg.png')"
      },
      borderColor: {
        'secondary': '#FBB034'
      }
    },
  },
  plugins: [],
}

