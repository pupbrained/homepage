/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'searchbar': '0px 0px 5px 2px rgba(49, 50, 68,0.8)'
      }
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: 'ctp',
      defaultFlavour: 'mocha'
    }),
  ],
}
