<script lang="ts">
	import FacebookLight from '$lib/components/SVG/FacebookLightSVG.svelte';
	import FacebookDark from '$lib/components/SVG/FacebookDarkSVG.svelte';
	import InstagramLight from '$lib/components/SVG/InstagramLightSVG.svelte';
	import InstagramDark from '$lib/components/SVG/InstagramDarkSVG.svelte';
	import LinkedInLight from '$lib/components/SVG/LinkedInLightSVG.svelte';
	import LinkedInDark from '$lib/components/SVG/LinkedInDarkSVG.svelte';
	import TwitterLight from '$lib/components/SVG/TwitterLightSVG.svelte';
	import TwitterDark from '$lib/components/SVG/TwitterDarkSVG.svelte';
	import { page } from '$app/stores';
	import { contactScreen } from '$lib/stores/generalState';

	$: route = $page.url.pathname.slice(1);
	$: isIconLight =
		route === 'partners' ||
		route === 'entrepreneurs' ||
		(route === 'contact' && $contactScreen === '');
	$: isBackgroundCyan = route === 'contact' && $contactScreen === '';
	$: isBackgroundDarkBlue =
		(route !== 'contact' && route === 'entrepreneurs') || route === 'partners';
</script>

<footer class="w-full text-sm font-medium font-mukta">
	<div
		class="w-full py-4 sm:py-8 flex items-center justify-evenly h-20 sm:h-28
				{isBackgroundCyan
			? 'bg-blue-500 text-white'
			: isBackgroundDarkBlue
			? 'bg-darkblue text-white'
			: 'bg-white text-darkblue'}
			"
	>
		<!-- Ill hide this untill we have out policy and TC -->
		<!-- <div class="text-sm text-mukta my-auto underline underline-offset-auto flex justify-between w-48">
			<a href="#">Política de Privacidad</a>
			<a href="#">T&C</a>
		</div> -->
		<p class="w-60 text-center">© 2022 Openversum, all rights reserved</p>
		<div class="w-48 justify-evenly flex my-auto">
			{#if isIconLight}
				<a href="https://www.facebook.com/openversum/" target="_blank" rel="noreferrer"
					><FacebookLight /></a
				>
				<a href="https://www.instagram.com/openversum/" target="_blank" rel="noreferrer"
					><InstagramLight /></a
				>
				<a href="https://www.linkedin.com/company/openversum/" target="_blank" rel="noreferrer"
					><LinkedInLight /></a
				>
				<a href="https://twitter.com/openversum" target="_blank" rel="noreferrer"
					><TwitterLight /></a
				>
			{:else}
				<a href="https://www.facebook.com/openversum/" target="_blank" rel="noreferrer"
					><FacebookDark /></a
				>
				<a href="https://www.instagram.com/openversum/" target="_blank" rel="noreferrer"
					><InstagramDark /></a
				>
				<a href="https://www.linkedin.com/company/openversum/" target="_blank" rel="noreferrer"
					><LinkedInDark /></a
				>
				<a href="https://twitter.com/openversum" target="_blank" rel="noreferrer"><TwitterDark /></a
				>
			{/if}
		</div>
	</div>
</footer>
