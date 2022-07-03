import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter({
			edge: false
		}),
		vite: {
			build: {
				target: 'es2022'
			},
			/* ssr: {
				noExternal: ['chart.js']
			}, */
			define: {
				'process.env': process.env
			}
		}
	}
};

export default config;
