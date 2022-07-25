const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins'],
				quicksand: ['Quicksand'],
				nunito: ['Nunito']
			}
		}
	},

	plugins: [require('tailwind-scrollbar'), require('@tailwindcss/forms')]
};

module.exports = config;
