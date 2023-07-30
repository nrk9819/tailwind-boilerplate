const { readFileSync, writeFileSync } = require('fs');
const chokidar = require('chokidar');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');
const tailwindConfig = require('../tailwind.config.js');

const ctx = {
  parser: true,
  map: 'inline',
  env: process.env.NODE_ENV,
};

function compileCSS() {
  const start = performance.now();
  try {
    postcssrc(ctx).then(({ plugins, options }) => {
      const css = readFileSync(options.from, 'utf8');
      postcss(plugins)
        .process(css, options)
        .then(result => {
          writeFileSync(options.to, result.css, 'utf8');
          const end = performance.now();
          const duration = (end - start).toFixed(2);
          console.log(`CSS compiled in ${duration} ms\n`);
        });
    });
  } catch (e) {
    console.error(e);
  }
}

// Check if the "--watch" or "-w" flag is provided
const watchFlagIndex = process.argv.findIndex(
  arg => arg === '--watch' || arg === '-w'
);
const isWatchMode = watchFlagIndex !== -1;

if (isWatchMode) {
  if (ctx.env === 'production') {
    console.error('WARNING: File watcher cannot run in production mode.');
    process.exit(1);
  }

  compileCSS();
  const watcher = chokidar.watch([
    ...tailwindConfig.content,
    './presets/**/*.js',
    './tailwind.config.js',
    './src/**/*.css',
  ]);
  watcher.on('change', () => {
    console.log('File change detected. Recompiling CSS...\n');
    compileCSS();
  });
} else {
  compileCSS();
}
