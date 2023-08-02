const spacing = require('./spacing').theme?.spacing;

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    margin: {
      ...spacing,
      "auto": "auto"
    },
  },
};
