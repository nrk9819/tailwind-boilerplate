const spacing = require('./spacing').theme?.spacing;

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    width: {
      ...spacing,
      auto: 'auto',
      full: '100%',
      screen: '100vw',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content',
    },
  },
};
