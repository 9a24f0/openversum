<script>
	import HeaderMobileMenu from './HeaderMobileMenu.svelte';
	import HeaderNavbar from './HeaderNavbar.svelte';
	import MenuSvg from './SVG/MenuSVG.svelte';
	import { isHoverHeader } from '$lib/stores/generalState';
	import LangSelect from './UI/LangSelect.svelte';
	import WorkWithUseFlyoutMenu from './WorkWithUseFlyoutMenu.svelte';
	import { clickOutside } from '$lib/utilities/clickOutside';

	let showMobileMenu = false;
	let showWorkWithUs = false;
</script>

<div
	on:mouseenter={() => ($isHoverHeader = true)}
	on:mouseleave={() => ($isHoverHeader = false)}
	use:clickOutside={() => ($isHoverHeader = false)}
	class:text-white={$isHoverHeader}
	class="{$isHoverHeader ? 'bg-blue-500' : 'bg-white'} fixed w-full top-0 z-10"
>
	<!-- This example requires Tailwind CSS v2.0+ -->
	<div class="relative bg-transparent overflow-x-clip">
		<!-- <footer class="bg-slate-50 ">footer</footer> -->

		<!-- 	{#if showAuth}
		<div
			use:clickOutside={() => (showAuth = false)}
			transition:fade={{ duration: 200 }}
			class="z-10 absolute origin-top-left top-20 right-5"
		>
			<Auth />
		</div>
	{/if} -->

		<div class=" mx-auto w-full  ">
			<div
				class="flex justify-between px-2 sm:px-4 lg:px-24
				flex-grow items-center border-gray-100 py-4"
			>
				<div class="w-48">
					<a href="/">
						<span class="sr-only">Openversum</span>
						<img
							class="h-10 w-auto sm:h-12 flex-1 aspect-auto"
							src={$isHoverHeader ? './logo_openversum_white.svg' : './logo_openversum_blue.svg'}
							alt="openversumlogo"
						/>
					</a>
				</div>
				<HeaderNavbar bind:showWorkWithUs />

				<!-- <div class="hidden md:inline-flex z-0 absolute origin-top-left top-6 right-4"> -->
				<div class="hidden md:inline-flex">
					<LangSelect />
				</div>
				<div class="z-10 -mr-2 -my-2 md:hidden">
					<button
						on:click|stopPropagation={() => (showMobileMenu = !showMobileMenu)}
						type="button"
						class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
						aria-expanded="false"
					>
						<span class="sr-only">Open menu</span>
						<!-- Heroicon name: outline/menu -->
						<MenuSvg />
					</button>
				</div>
			</div>
		</div>
		{#if showWorkWithUs}
			<WorkWithUseFlyoutMenu on:closeMenu={() => (showWorkWithUs = false)} />
		{/if}
		{#if showMobileMenu}
			<HeaderMobileMenu on:closeMenu={() => (showMobileMenu = false)} />
		{/if}
	</div>
</div>
