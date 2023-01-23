<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import { supabase } from '$lib/supabase';
	import { user } from '$lib/stores/sessionStore';
	import { onMount } from 'svelte/internal';
	import BlobTopR from '$lib/components/SVG/BlobTopR.svelte';
	import BottomWaves2 from '$lib/components/SVG/BottomWaves2.svelte';
	import { locale, loadTranslations } from '$lib/translations';
	import { page } from '$app/stores';
	import LangSelect from '$lib/components/UI/LangSelect.svelte';
	import lang from '$lib/translations/lang.json';
	import { webVitals } from '$lib/vitals';
	import { browser } from '$app/environment';
	import { isHoverHeader } from '$lib/stores/generalState';
	let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

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

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-240539759-1">
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'UA-240539759-1');
	</script>
</svelte:head>

<div class="relative overflow-x-hidden font-mukta overflow-y-scroll min-h-screen h-full">
	{#if loaded}
		<div
			on:mouseenter={() => ($isHoverHeader = true)}
			on:mouseleave={() => ($isHoverHeader = false)}
			class:bg-blue={$isHoverHeader}
			class:text-white={$isHoverHeader}
			class="bg-white fixed w-full top-0 z-10"
		>
			<Header />
		</div>
		<main class="mt-18 md:mt-20">
			<slot />
		</main>
	{/if}

	<footer class="w-full">
		<div class="w-full opacity-70 h-20">
			<BottomWaves2 />
		</div>
		<div class="w-full bg-emerald-200 bg-opacity-70 flex justify-evenly h-12">
			<img class="h-10" src="/openversum_logo_white.png" alt="footer logo" />
			<p class="text-sm text-white my-auto">© 2022 Openversum, all rights reserved</p>
		</div>
	</footer>
</div>
