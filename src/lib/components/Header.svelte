<script>
	import HeaderMobileMenu from './HeaderMobileMenu.svelte';
	import HeaderNavbar from './HeaderNavbar.svelte';
	import MenuSvg from './SVG/MenuSVG.svelte';

	let showMobileMenu = false;
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white">
	<div class="max-w-screen-2xl mx-auto px-4 sm:px-6">
		<div
			class="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10"
		>
			<div class="flex justify-start lg:w-0 lg:flex-1">
				<a href="/">
					<span class="sr-only">Openversum</span>
					<img class="h-8 w-auto sm:h-10" src="./openversum_logo.png" alt="openversumlogo" />
				</a>
			</div>
			<div class="-mr-2 -my-2 md:hidden">
				<button
					on:click={() => (showMobileMenu = !showMobileMenu)}
					type="button"
					class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-expanded="false"
				>
					<span class="sr-only">Open menu</span>
					<!-- Heroicon name: outline/menu -->
					<MenuSvg />
				</button>
			</div>
			<HeaderNavbar />
			<div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
				<a
					href="#"
					class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
				>
					Log in
				</a>
			</div>
		</div>
	</div>

	<!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
	{#if showMobileMenu}
		<HeaderMobileMenu />
	{/if}
</div>
