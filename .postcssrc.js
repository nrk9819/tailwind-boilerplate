module.exports = ({ env }) => ({
  from: './src/input.css',
  to: './dist/style.css',
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    ...(env === 'production' ? { autoprefixer: {} } : {}),
    ...(env === 'production' ? { cssnano: {} } : {}),
  },
});
