/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gsans: ['Google Sans Text'],
        hack: ['Hack Nerd Font'],
        jetbrains: ['JetBrainsMono Nerd Font'],
        iosevka: ['Iosevka Custom Medium'],
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
    plugin(function({ addUtilities }) {
      addUtilities({
        '.double-1': {
          "padding": "3px",
          "border-radius": "5px",
          "background": "linear-gradient(#bac2de 0 0) 50% calc(-3px - 100%) / var(--d, 0%) 200% no-repeat",
          "transition": "0.3s, background-size 0.3s 0.3s",
        },
        '.double-1-hover': {
          "--d": "100%",
          "background-position": "50% 0%",
          "color": "#1e1e2e",
          "transition": "0.3s, background-position 0.3s 0.3s, color 0.3s 0.3s"
        }
      })
    }),
  ],
}
