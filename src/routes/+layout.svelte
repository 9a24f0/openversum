<script lang="ts">
	import '../app.css';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte/internal';
	import { locale, loadTranslations } from '$lib/translations';
	import { page } from '$app/stores';
	import lang from '$lib/translations/lang.json';
	import { webVitals } from '$lib/vitals';
	import { browser } from '$app/environment';

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

<svelte:head />

<div class="relative overflow-x-hidden font-mukta overflow-y-scroll min-h-screen h-full">
	{#if loaded}
		<Header />
		<main class="mt-[4.5rem] md:mt-20">
			<slot />
		</main>

		<Footer />
	{/if}
</div>
