const { round, rem, em } = require('./helpers/units.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: [
            {
              maxWidth: '70ch',
              a: {
                fontWeight: '540',
              },
              blockquote: {
                fontWeight: '540',
              },
              code: {
                fontWeight: '580',
              },
              pre: {
                position: 'relative',
                overflow: 'hidden',
              },
              'pre code': {
                fontWeight: '400',
                display: 'block',
                overflowX: 'auto',
              },
            },
          ],
        },
        base: {
          css: [
            {
              fontSize: rem(16),
              lineHeight: round(28 / 16),
              '[class~="lead"]': {
                fontSize: em(18, 16),
                lineHeight: round(30 / 18),
              },
              h1: {
                //default font size 30px
                fontSize: em(30, 16),
                fontWeight: theme('fontWeight.medium'),
                lineHeight: em(38, 30),
                marginBottom: em(32, 30),
              },
              h2: {
                //default font size 24px
                fontWeight: theme('fontWeight.medium'),
              },
              h3: {
                //default font size 20px
                fontWeight: theme('fontWeight.semibold'),
                lineHeight: em(28, 20),
                marginTop: em(32, 20),
                marginBottom: em(20, 20),
              },
              h4: {
                //default font size 18px
                fontSize: em(18, 16),
                fontWeight: theme('fontWeight.semibold'),
                lineHeight: em(26, 18),
                marginTop: em(24, 18),
                marginBottom: em(12, 18),
              },
              hr: {
                marginTop: em(40, 16),
              },
              pre: {
                borderRadius: '8px',
                padding: '0px 4px',
              },
              'pre code': {
                padding: '12px',
              },
              img: {
                borderRadius: '8px',
              },
            },
          ],
        },
        lg: {
          css: [
            {
              fontSize: rem(18),
              lineHeight: round(30 / 18),
              '[class~="lead"]': {
                fontSize: em(20, 18),
                lineHeight: round(32 / 20),
              },
              h1: {
                //default font size 40px
                fontSize: em(40, 18),
                fontWeight: theme('fontWeight.medium'),
                lineHeight: em(48, 40),
                letterSpacing: '-0.02em',
                marginBottom: em(40, 40),
              },
              h2: {
                //default font size 30px
                fontWeight: theme('fontWeight.medium'),
                lineHeight: em(38, 30),
              },
              h3: {
                //default font size 24px
                fontWeight: theme('fontWeight.medium'),
                lineHeight: em(32, 24),
                marginBottom: em(24, 24),
              },
              h4: {
                //default font size 20px
                fontSize: em(20, 18),
                fontWeight: theme('fontWeight.semibold'),
                lineHeight: em(28, 20),
                marginTop: em(32, 20),
                marginBottom: em(16, 20),
              },
              hr: {
                marginTop: em(48, 18),
                marginBottom: em(56, 18),
              },
              pre: {
                borderRadius: '12px',
                padding: '0px 4px',
              },
              'pre code': {
                padding: '20px',
              },
            },
          ],
        },
        xl: {
          css: [
            {
              fontSize: rem(20),
              lineHeight: '1.6',
              p: {
                marginTop: em(32, 20),
                marginBottom: em(32, 20),
              },
              h1: {
                //default font size 56px
                fontSize: em(56, 20),
                fontWeight: theme('fontWeight.medium'),
                lineHeight: em(62, 56),
                letterSpacing: '-0.02em',
              },
              h2: {
                //default font size 36px
                fontWeight: theme('fontWeight.medium'),
              },
              h3: {
                //deafult font size 30px
                fontWeight: theme('fontWeight.medium'),
                lineHeight: em(38, 30),
                marginBottom: em(24, 30),
              },
              h4: {
                //default font size 24px
                fontSize: em(24, 20),
                fontWeight: theme('fontWeight.medium'),
                lineHeight: em(32, 24),
                marginTop: em(40, 24),
                marginBottom: em(20, 24),
              },
              hr: {
                marginTop: em(48, 20),
                marginBottom: em(64, 20),
              },
              pre: {
                borderRadius: '12px',
                padding: '0px 4px',
              },
              'pre code': {
                padding: '20px',
              },
            },
          ],
        },

        gray: {
          css: {
            '--tw-prose-body': theme('colors.gray[800]'),
            '--tw-prose-headings': theme('colors.gray[950]'),
            '--tw-prose-lead': theme('colors.gray[700]'),
            '--tw-prose-links': theme('colors.gray[950]'),
            '--tw-prose-bold': theme('colors.gray[950]'),
            '--tw-prose-counters': theme('colors.gray[500]'),
            '--tw-prose-bullets': theme('colors.gray[500]'),
            '--tw-prose-hr': theme('colors.gray[300]'),
            '--tw-prose-quotes': theme('colors.gray[700]'),
            '--tw-prose-quote-borders': theme('colors.gray[300]'),
            '--tw-prose-captions': theme('colors.gray[700]'),
            '--tw-prose-code': theme('colors.gray[950]'),
            '--tw-prose-pre-code': theme('colors.gray[100]'),
            '--tw-prose-pre-bg': theme('colors.gray[800]'),
            '--tw-prose-th-borders': theme('colors.gray[300]'),
            '--tw-prose-td-borders': theme('colors.gray[200]'),
            '--tw-prose-invert-body': theme('colors.gray[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.gray[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.gray[400]'),
            '--tw-prose-invert-bullets': theme('colors.gray[600]'),
            '--tw-prose-invert-hr': theme('colors.gray[700]'),
            '--tw-prose-invert-quotes': theme('colors.gray[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.gray[700]'),
            '--tw-prose-invert-captions': theme('colors.gray[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.gray[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.gray[600]'),
            '--tw-prose-invert-td-borders': theme('colors.gray[700]'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
