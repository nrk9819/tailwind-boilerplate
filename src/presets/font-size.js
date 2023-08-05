const { round, rem, em } = require('./helpers/units.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontSize: {
      /** 1rem is set to 10px by default */
      12: [
        rem(12),
        {
          lineHeight: em(18, 12),
        },
      ],
      14: [
        rem(14),
        {
          lineHeight: em(20, 14),
        },
      ],
      16: [
        rem(16),
        {
          lineHeight: em(24, 16),
        },
      ],
      18: [
        rem(18),
        {
          lineHeight: em(26, 18),
        },
      ],
      20: [
        rem(20),
        {
          lineHeight: em(28, 20),
        },
      ],
      24: [
        rem(24),
        {
          lineHeight: em(34, 24),
        },
      ],
      30: [
        rem(30),
        {
          lineHeight: em(38, 30),
        },
      ],
      36: [
        rem(36),
        {
          lineHeight: em(42, 36),
        },
      ],
      48: [
        rem(48),
        {
          lineHeight: em(54, 48),
          letterSpacing: '-0.02em',
        },
      ],
      64: [
        rem(64),
        {
          lineHeight: em(68, 64),
          letterSpacing: '-0.02em',
        },
      ],
      80: [
        rem(80),
        {
          lineHeight: em(80, 80),
          letterSpacing: '-0.04em',
        },
      ],
      96: [
        rem(96),
        {
          lineHeight: em(94, 96),
          letterSpacing: '-0.04em',
        },
      ],
    },
  },
};
