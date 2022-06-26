const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [require('tailwind-scrollbar'), require('@tailwindcss/forms')]
};

module.exports = config;
