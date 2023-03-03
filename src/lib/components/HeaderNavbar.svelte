<script lang="ts">
	import SolutionsFlyoutMenu from './SolutionsFlyoutMenu.svelte';
	import ChevronDownSVG from './SVG/ChevronDownSVG.svelte';
	import { user } from '$lib/stores/sessionStore';
	import WorkWithUseFlyoutMenu from './WorkWithUseFlyoutMenu.svelte';
	import SimpleSlotModal from './SimpleSlotModal.svelte';
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import { t } from '$lib/translations';
	import { isHoverHeader, contactScreen } from '$lib/stores/generalState';
	let showSolutionsMenu = false;
	let showWorkWithUs = false;
	let showContact = false;
</script>

<nav class="hidden md:flex md:justify-around space-x-2 sm:space-x-4 md:space-x-8">
	<!-- <a
		href="https://app.openversum.com"
		target="_blank"
		class=" text-md lg:text-lg font-medium text-emerald-700 hover:text-emerald-900"
	>
		Log in
	</a> -->

	<a
		href="/#what_we_do"
		class="text-md lg:text-lg font-medium {$isHoverHeader
			? 'text-white hover:text-blue-100'
			: 'text-blue'} focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl px-1 max-w-[100px] lg:max-w-xs "
	>
		{$t('common.whatWeDo')}
	</a>
	<a
		href="/#who_we_are"
		class=" text-md lg:text-lg font-medium {$isHoverHeader
			? 'text-white hover:text-blue-100'
			: 'text-blue'} focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl px-1 max-w-[100px] lg:max-w-xs "
	>
		{$t('common.whoWeAre')}
	</a>
	<div class="relative">
		<!-- Item active: "text-gray-900", Item inactive: "text-emerald-700" -->
		<button
			on:click|stopPropagation={() => (showWorkWithUs = !showWorkWithUs)}
			type="button"
			class=" {$isHoverHeader
				? 'text-white hover:text-blue-100'
				: 'text-blue'} group inline-flex items-center text-md lg:text-lg font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl px-1 max-w-[100px] lg:max-w-xs "
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
		on:click={() => contactScreen.set('')}
		class=" text-md lg:text-lg font-medium {$isHoverHeader
			? 'text-white hover:text-blue-100'
			: 'text-blue'} focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl px-1 max-w-[100px] lg:max-w-xs "
	>
		<a href="/contact">{$t('common.contact')}</a>
	</button>
</nav>
{#if showContact}
	<SimpleSlotModal on:closeModal={() => (showContact = false)}>
		<ContactForm currentForm="general" on:submitedContact={() => (showContact = false)} />
	</SimpleSlotModal>
{/if}
