<script lang="ts">
	import SolutionsFlyoutMenu from './SolutionsFlyoutMenu.svelte';
	import ChevronDownSVG from './SVG/ChevronDownSVG.svelte';

	let showSolutionsMenu = false;
</script>

<nav class="hidden md:flex space-x-10">
	<div class="relative">
		<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
		<button
			on:click={() => (showSolutionsMenu = !showSolutionsMenu)}
			type="button"
			class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			aria-expanded="false"
		>
			<span>Solutions</span>
			<ChevronDownSVG />
		</button>

		<!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
		{#if showSolutionsMenu}
			<SolutionsFlyoutMenu />
		{/if}
	</div>

	<a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Pricing </a>
	<a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Docs </a>

	<div class="relative">
		<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
		<button
			type="button"
			class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			aria-expanded="false"
		>
			<span>More</span>
			<!-- <ChevronDownSvg></ChevronDownSvg> -->
		</button>
	</div>
</nav>
