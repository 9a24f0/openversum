<script lang="ts">
	import '../app.postcss';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { locale, loadTranslations } from '$lib/translations';
	import { page } from '$app/stores';
	import lang from '$lib/translations/lang.json';
	import { Toaster } from 'svelte-french-toast';
	import { webVitals } from '$lib/vitals';
	import { browser } from '$app/environment';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
	const analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

	const possibleLocales = Object.keys(lang);
	let loaded = false;
	onMount(async () => {
		// if user exists do something
		/* if ($user) {
			
		} */
		//i18n stuff https://www.npmjs.com/package/sveltekit-i18n
		const navLang = navigator.language.split('-')[0];
		const defaultLocale = possibleLocales.includes(navLang) ? navLang : 'en';
		const { pathname } = $page.url;
		const initLocale = locale.get() || defaultLocale; // set default if no locale already set
		await loadTranslations(initLocale, pathname); // keep this just before the `return`
		loaded = true;
	});

	$: if (browser && analyticsId) {
		webVitals({
			path: $page.url.pathname,
			params: $page.params,
			analyticsId
		});
	}
</script>

<Toaster />
<div class="relative overflow-x-hidden font-mukta text-darkblue">
	{#if loaded}
		<Header />
		<main class="mt-[4.5rem] md:mt-20 ">
			<slot />
		</main>

		<Footer />
	{/if}
</div>
