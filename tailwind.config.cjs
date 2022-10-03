/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gsans: ['Google Sans Text'],
        hack: ['Hack Nerd Font'],
        jetbrains: ['JetBrainsMono Nerd Font'],
      },
      boxShadow: {
        searchbar: '0px 0px 5px 2px rgba(49, 50, 68,0.8)',
      },
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: 'ctp',
      defaultFlavour: 'mocha',
    }),
    require('tailwind-scrollbar-hide'),
  ],
}
