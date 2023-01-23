import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */

const config = {
	plugins: [sveltekit()],
	build: {
		target: 'es2022'
	},

	define: {
		'process.env': process.env,
		'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
	},
	optimizeDeps: { include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'] }
};

export default config;
