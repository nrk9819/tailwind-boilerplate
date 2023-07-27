module.exports = ({ env }) => ({
  from: './src/input.css',
  to: './dist/styles.css',
  plugins: {
    tailwindcss: {},
    ...(env === 'production' ? { autoprefixer: {} } : {}),
    ...(env === 'production' ? { cssnano: {} } : {}),
  },
});
