/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/comps/Header.jsx",
    "./src/comps/Hero.jsx",
    "./src/comps/About.jsx",
    "./src/comps/Footer.jsx",
    "./src/comps/Home.jsx",
    "./src/comps/Portfolio.jsx",
    "./src/comps/Services.jsx",
    "./src/comps/Skills.jsx",
    "./src/comps/Contact.jsx",
    "./src/comps/Working.jsx",    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'webdev': "url(./src/assets/webdev.webp)"
      },
      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '95': '0.95',
      }
    },
  },
  plugins: [],
}
