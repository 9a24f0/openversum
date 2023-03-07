<script lang="ts">
	import TwitterSvg from '$lib/components/SVG/TwitterSVG.svelte';
	import LinkedInSvg from '$lib/components/SVG/LinkedInSVG.svelte';
	import InstagramSvg from '$lib/components/SVG/InstagramSVG.svelte';
	import FacebookSvg from '$lib/components/SVG/FacebookSVG.svelte';
	import { page } from '$app/stores';
	import { contactScreen } from '$lib/stores/generalState';

	$: route = $page.url.pathname.slice(1);
	$: isIconLight =
		route === 'partners' ||
		route === 'entrepreneurs' ||
		(route === 'contact' && $contactScreen === '');
	$: fill = isIconLight ? 'white' : '#76d0cd';

	$: isBackgroundCyan = route === 'contact' && $contactScreen === '';
	$: isBackgroundDarkBlue =
		(route !== 'contact' && route === 'entrepreneurs') || route === 'partners';
</script>

<footer class="w-full text-sm font-medium font-mukta">
	<div
		class="w-full py-4 flex items-center justify-between h-20 px-2 sm:px-4 lg:px-24 {isBackgroundCyan
			? 'bg-blue-500 text-white'
			: isBackgroundDarkBlue
			? 'bg-darkblue text-white'
			: 'bg-white text-blue'}
			"
	>
		<!-- Ill hide this untill we have out policy and TC -->
		<!-- <div class="text-sm text-mukta my-auto underline underline-offset-auto flex justify-between w-48">
			<a href="#">Política de Privacidad</a>
			<a href="#">T&C</a>
		</div> -->
		<p class="w-60 text-center">© 2023 Openversum, all rights reserved</p>
		<div class="w-48 justify-between flex my-auto ">
			<a href="https://www.facebook.com/openversum/" target="_blank" rel="noreferrer">
				<FacebookSvg {fill} /></a
			>
			<a href="https://www.instagram.com/openversum/" target="_blank" rel="noreferrer">
				<InstagramSvg {fill} /></a
			>
			<a href="https://www.linkedin.com/company/openversum/" target="_blank" rel="noreferrer">
				<LinkedInSvg {fill} /></a
			>
			<a href="https://twitter.com/openversum" target="_blank" rel="noreferrer">
				<TwitterSvg {fill} /></a
			>
		</div>
	</div>
</footer>
