const sveltePreprocess = require('svelte-preprocess');
const postcss = require('./postcss.config');
const image = require('svelte-image');
const { mdsvex } = require('mdsvex');

const defaults = {
  script: 'typescript',
  style: 'postcss',
};

const createPreprocessors = ({ sourceMap }) => [
  // mdsvex({
  //   remarkPlugins: [remarkSlug, remarkAutolinkHeadings],
  // }),
  mdsvex(),
  image({ placeholder: 'blur', optimizeRemote: true }),
  sveltePreprocess({
    defaults,
    sourceMap,
    postcss,
    preserve: ['ld+json'],
  }),
];

module.exports = {
  createPreprocessors,
  // Options for `svelte-check` and the VS Code extension
  preprocess: createPreprocessors({ sourceMap: true }),
};
