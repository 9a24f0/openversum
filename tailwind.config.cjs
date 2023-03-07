const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	mode: 'jit',

	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins'],
				mukta: ['Mukta Mahee']
			},
			colors: {
				green: {
					DEFAULT: '#9DC96B',
					50: '#F6FAF2',
					100: '#ECF5E3',
					200: '#D8EAC5',
					300: '#C5DFA7',
					400: '#B1D489',
					500: '#9DC96B',
					600: '#82B943',
					700: '#658F34',
					800: '#486625',
					900: '#2B3D16'
				},
				blue: {
					DEFAULT: '#76D0CD',
					50: '#FFFFFF',
					100: '#F0FAF9',
					200: '#D1EFEE',
					300: '#B3E5E3',
					400: '#94DAD8',
					500: '#76D0CD',
					600: '#4CC2BE',
					700: '#379F9C',
					800: '#287573',
					900: '#1A4C4A'
				},
				darkblue: {
					DEFAULT: '#1A4444',
					50: '#57BFBF',
					100: '#48B9B9',
					200: '#3C9D9D',
					300: '#317F7F',
					400: '#256262',
					500: '#1A4444',
					600: '#143535',
					700: '#0F2626',
					800: '#091818',
					900: '#030909'
				}
			}
		}
	},

	plugins: [require('@tailwindcss/forms')]
};

module.exports = config;
