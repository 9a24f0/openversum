<script lang="ts">
	import SolutionsFlyoutMenu from './SolutionsFlyoutMenu.svelte';
	import ChevronDownSVG from './SVG/ChevronDownSVG.svelte';
	import { user } from '$lib/stores/sessionStore';
	import WorkWithUseFlyoutMenu from './WorkWithUseFlyoutMenu.svelte';
	import SimpleSlotModal from './SimpleSlotModal.svelte';
	import ContactForm from './ContactForm.svelte';

	let showSolutionsMenu = false;
	let showWorkWithUs = false;
	let showContact = false;
</script>

<nav class="hidden md:flex space-x-10">
	<div class="relative">
		<!-- Item active: "text-gray-900", Item inactive: "text-emerald-700" -->
		{#if $user}
			<button
				on:click|stopPropagation={() => (showSolutionsMenu = !showSolutionsMenu)}
				type="button"
				class="whitespace-nowrap text-emerald-700 group bg-white rounded-md inline-flex items-center text-lg font-medium hover:text-emerald-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
				aria-expanded="false"
			>
				<span>Solutions</span>
				<ChevronDownSVG />
			</button>
		{/if}

		{#if showSolutionsMenu}
			<SolutionsFlyoutMenu on:closeMenu={() => (showSolutionsMenu = false)} />
		{/if}
	</div>

	<a
		href="/about"
		class="whitespace-nowrap text-lg font-medium text-emerald-700 hover:text-emerald-900"
	>
		What we do
	</a>
	<a
		href="/who-we-are"
		class="whitespace-nowrap text-lg font-medium text-emerald-700 hover:text-emerald-900"
	>
		Who we are
	</a>
	<div class="relative">
		<!-- Item active: "text-gray-900", Item inactive: "text-emerald-700" -->
		<button
			on:click|stopPropagation={() => (showWorkWithUs = !showWorkWithUs)}
			type="button"
			class="whitespace-nowrap text-emerald-700 group inline-flex items-center text-lg font-medium hover:text-emerald-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
			aria-expanded="false"
		>
			<span>Work with us</span>
			<ChevronDownSVG />
		</button>

		{#if showWorkWithUs}
			<WorkWithUseFlyoutMenu on:closeMenu={() => (showWorkWithUs = false)} />
		{/if}
	</div>
	<button
		on:click={() => (showContact = !showContact)}
		class="whitespace-nowrap text-lg font-medium text-emerald-700 hover:text-emerald-900"
	>
		Contact us
	</button>
</nav>
{#if showContact}
	<SimpleSlotModal on:closeModal={() => (showContact = false)}>
		<ContactForm on:submitedContact={() => (showContact = false)} />
	</SimpleSlotModal>
{/if}
