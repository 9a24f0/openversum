<script>
	import Auth from './Auth.svelte';
	import HeaderMobileMenu from './HeaderMobileMenu.svelte';
	import HeaderNavbar from './HeaderNavbar.svelte';
	import MenuSvg from './SVG/MenuSVG.svelte';
	import { clickOutside } from '$lib/utilities/clickOutside';
	import { fade } from 'svelte/transition';
	import { user } from '$lib/stores/sessionStore';
	import { supabase } from '$lib/supabase';
	import { isHoverHeader } from '$lib/stores/generalState';
	import LangSelect from './UI/LangSelect.svelte';

	let showMobileMenu = false;
	let showAuth = false;
	const handleLogOut = async () => {
		await supabase.auth.signOut();
	};
</script>

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
			class="flex justify-between pl-32 pr-32
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
			<HeaderNavbar />

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

			<!-- 
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
		-->
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
		<HeaderMobileMenu
			on:closeMenu={() => (showMobileMenu = false)}
			on:logOut={handleLogOut}
			on:signIn={() => (showAuth = !showAuth)}
		/>
	{/if}
</div>
