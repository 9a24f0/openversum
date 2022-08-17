<script lang="ts">
	import SolutionsFlyoutMenu from './SolutionsFlyoutMenu.svelte';
	import ChevronDownSVG from './SVG/ChevronDownSVG.svelte';
	import { user } from '$lib/stores/sessionStore';
	import WorkWithUseFlyoutMenu from './WorkWithUseFlyoutMenu.svelte';
	import SimpleSlotModal from './SimpleSlotModal.svelte';
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import { t } from '$lib/translations';

	let showSolutionsMenu = false;
	let showWorkWithUs = false;
	let showContact = false;
</script>

<nav class="hidden md:flex space-x-10">
	<!-- <a
		href="https://app.openversum.com"
		target="_blank"
		class="whitespace-nowrap text-md lg:text-lg font-medium text-emerald-700 hover:text-emerald-900"
	>
		Log in
	</a> -->

	<a
		href="/#what_we_do"
		class="whitespace-nowrap text-md lg:text-lg font-medium text-emerald-700 hover:text-emerald-900"
	>
		{$t('common.whatWeDo')}
	</a>
	<a
		href="/#who_we_are"
		class="whitespace-nowrap text-md lg:text-lg font-medium text-emerald-700 hover:text-emerald-900"
	>
		{$t('common.whoWeAre')}
	</a>
	<div class="relative">
		<!-- Item active: "text-gray-900", Item inactive: "text-emerald-700" -->
		<button
			on:click|stopPropagation={() => (showWorkWithUs = !showWorkWithUs)}
			type="button"
			class="whitespace-nowrap text-emerald-700 group inline-flex items-center text-md lg:text-lg font-medium hover:text-emerald-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
			aria-expanded="false"
		>
			<span>{$t('common.workWithUs')}</span>
			<ChevronDownSVG />
		</button>

		{#if showWorkWithUs}
			<WorkWithUseFlyoutMenu on:closeMenu={() => (showWorkWithUs = false)} />
		{/if}
	</div>
	<button
		on:click={() => (showContact = !showContact)}
		class="whitespace-nowrap text-md lg:text-lg font-medium text-emerald-700 hover:text-emerald-900"
	>
		{$t('common.contact')}
	</button>
</nav>
{#if showContact}
	<SimpleSlotModal on:closeModal={() => (showContact = false)}>
		<ContactForm currentForm="general" on:submitedContact={() => (showContact = false)} />
	</SimpleSlotModal>
{/if}
