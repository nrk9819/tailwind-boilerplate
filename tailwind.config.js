const spacing = require('./src/presets/spacing').theme;
const borderRadius = require('./src/presets/border-radius').theme;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.html'],
  presets: [
    require('./src/presets/colors.js'),
    require('./src/presets/font-size.js'),
    require('./src/presets/typography.js'),
  ],
  theme: {
    ...spacing,
    ...borderRadius,
    extend: {
      fontFamily: {
        sans: [
          '"Source Sans 3"',
          '"Noto Sans"',
          'Roboto',
          '"Helvetica Neue"',
          'system-ui',
          'sans-serif',
        ],
        serif: ['"Source Serif 4"', '"Times New Roman"', 'serif', 'ui-serif'],
        mono: [
          '"Fira Code"',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'ui-monospace',
          'monospace',
        ],
        heading: ['"Bricolage Grotesque"', 'Inter', 'sans-serif', 'system-ui'],
      },
      fontWeight: {
        nexamedium: '540',
      },
    },
  },
};
