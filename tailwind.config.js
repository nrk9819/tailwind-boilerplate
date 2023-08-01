/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.html'],
  presets: [
    require('./presets/colors.js'),
    require('./presets/spacing.js'),
    require('./presets/font-size.js'),
  ],
  theme: {
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
                //whiteSpace: 'pre-wrap',
              },
              'pre code': {
                fontWeight: '400',
                display: 'block',
                overflowX: 'auto',
              },
              'pre code::-webkit-scrollbar': {
                height: '8px',
              },
              'pre code::-webkit-scrollbar-thumb': {
                background: theme('colors.gray[600]'),
                borderRadius: '4px',
              },
              'pre code::-webkit-scrollbar-thumb:hover': {
                background: theme('colors.gray[400]'),
              },
            },
          ],
        },
        base: {
          css: [
            {
              fontSize: '1.6rem',
              lineHeight: '1.7',
              p: {
                marginTop: '1em',
                marginBottom: '1em',
              },
              h1: {
                fontSize: '3rem',
                lineHeight: '1.25',
                marginTop: '0',
                marginBottom: '1.066em',
                fontWeight: theme('fontWeight.medium'),
              },
              h2: {
                fontSize: '2.4rem',
                lineHeight: '1.33',
                marginTop: '1.67em',
                marginBottom: '0.83em',
              },
              h3: {
                fontSize: '2rem',
                lineHeight: '1.33',
                marginTop: '1.2em',
                marginBottom: '0.8em',
              },
              h4: {
                fontSize: '1.8rem',
                lineHeight: '1.4',
                marginTop: '0.89em',
                marginBottom: '0.67em',
              },
            },
          ],
        },
        xl: {
          css: [
            {
              fontSize: '2rem',
              lineHeight: '1.6',
              p: {
                marginTop: '1.6em',
                marginBottom: '1.6em',
              },
              h1: {
                fontSize: '2.4em',
                fontWeight: theme('fontWeight.medium'),
                lineHeight: '1.15em',
                letterSpacing: '-0.02em',
                marginBottom: '0.67em',
              },
              h2: {
                fontWeight: theme('fontWeight.medium'),
              },
              h3: {
                fontWeight: theme('fontWeight.medium'),
                lineHeight: '1.25em',
                marginBottom: '0.8em',
              },
              h4: {
                fontSize: '1.2em',
                fontWeight: theme('fontWeight.medium'),
                lineHeight: '1.33em',
                marginTop: '1.67em',
                marginBottom: '0.67em',
              },
              hr: {
                marginTop: '2.3em',
                marginBottom: '2.6em',
              },
              pre: {
                borderRadius: '16px',
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
