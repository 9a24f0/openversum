import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	plugins: [sveltekit(), imagetools()],
	build: {
		target: 'es2022'
	},

	define: {
		'process.env': process.env,
		'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
	}
	// optimizeDeps: { include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep'] }
});
