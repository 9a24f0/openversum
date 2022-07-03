<script>
	import Auth from './Auth.svelte';
	import HeaderMobileMenu from './HeaderMobileMenu.svelte';
	import HeaderNavbar from './HeaderNavbar.svelte';
	import BlobTopR from './SVG/BlobTopR.svelte';
	import MenuSvg from './SVG/MenuSVG.svelte';
	import { clickOutside } from '$lib/utilities/clickOutside';
	import { fade } from 'svelte/transition';
	import { user } from '$lib/stores/sessionStore';
	import { supabase } from '$lib/supabase';

	let showMobileMenu = false;
	let showAuth = false;

	const handleLogOut = async () => {
		await supabase.auth.signOut();
	};
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-transparent">
	<!-- <footer class="bg-slate-50 ">footer</footer> -->
	<div class="absolute origin-top-left -top-16 -right-14 opacity-80">
		<BlobTopR />
	</div>
	{#if showAuth}
		<div
			use:clickOutside={() => (showAuth = false)}
			transition:fade={{ duration: 200 }}
			class="z-10 absolute origin-top-left top-20 right-5"
		>
			<Auth />
		</div>
	{/if}

	<div class="max-w-screen-2xl mx-auto px-4 sm:px-6">
		<div
			class="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10"
		>
			<div class="flex justify-start lg:w-0 lg:flex-1">
				<a href="/">
					<span class="sr-only">Openversum</span>
					<img class="h-10 w-auto sm:h-14" src="./openversum_logo.png" alt="openversumlogo" />
				</a>
			</div>
			<div class="z-10 -mr-2 -my-2 md:hidden">
				<button
					on:click|stopPropagation={() => (showMobileMenu = !showMobileMenu)}
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
			<div class="z-10 hidden md:flex items-center justify-end md:flex-1 lg:w-0">
				{#if $user}
					<button
						on:click|stopPropagation={handleLogOut}
						class="whitespace-nowrap text-lg font-medium text-white hover:text-emerald-900 "
					>
						Log out
					</button>
				{:else}
					<button
						on:click|stopPropagation={() => (showAuth = !showAuth)}
						class="whitespace-nowrap text-lg font-medium text-white hover:text-emerald-900 "
					>
						Sign in
					</button>
				{/if}
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
		<HeaderMobileMenu on:closeMenu={() => (showMobileMenu = false)} />
	{/if}
</div>
