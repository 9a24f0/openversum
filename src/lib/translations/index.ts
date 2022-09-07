import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
	translations: {
		en: { lang },
		es: { lang }
	},
	loaders: [
		// ENGLISH!!!!
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en/common.json')).default
		},
		{
			locale: 'en',
			key: 'contact',
			loader: async () => (await import('./en/contact.json')).default
		},
		{
			locale: 'en',
			key: 'entrepreneurs',

			loader: async () => (await import('./en/entrepreneurs.json')).default
		},
		{
			locale: 'en',
			key: 'partners',
			loader: async () => (await import('./en/partners.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			loader: async () => (await import('./en/home.json')).default
		},
		// SPANISH!!!!
		{
			locale: 'es',
			key: 'common',
			loader: async () => (await import('./es/common.json')).default
		},
		{
			locale: 'es',
			key: 'contact',
			loader: async () => (await import('./es/contact.json')).default
		},
		{
			locale: 'es',
			key: 'entrepreneurs',

			loader: async () => (await import('./es/entrepreneurs.json')).default
		},
		{
			locale: 'es',
			key: 'partners',
			loader: async () => (await import('./es/partners.json')).default
		},
		{
			locale: 'es',
			key: 'home',
			loader: async () => (await import('./es/home.json')).default
		}
	]
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
