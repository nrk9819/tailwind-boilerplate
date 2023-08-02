const spacing = require('./spacing').theme?.spacing;

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    padding: {
      ...spacing,
    },
  },
};
