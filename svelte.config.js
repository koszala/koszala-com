import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: '404.html',
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: {
        base: process.env.NODE_ENV === 'production' ? '/koszala-com' : '',
    }
  },
  extensions: ['.svelte', '.md'],
  preprocess: [mdsvex({
    extensions: ['.md']
  })]
};

export default config;
