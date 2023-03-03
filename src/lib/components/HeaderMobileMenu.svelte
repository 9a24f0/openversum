<script>
	import { createEventDispatcher } from 'svelte';
	import { clickOutside } from '$lib/utilities/clickOutside';
	import ChartBarSvg from './SVG/ChartBarSVG.svelte';
	import CloseSvg from './SVG/CloseSVG.svelte';
	import CursorClickSvg from './SVG/CursorClickSVG.svelte';
	import RefreshSvg from './SVG/RefreshSVG.svelte';
	import ViewGridSvg from './SVG/ViewGridSVG.svelte';

	import { user } from '$lib/stores/sessionStore';
	import ContactForm from '$lib/components/contact/ContactForm.svelte';

	import SimpleSlotModal from './SimpleSlotModal.svelte';
	import LangSelect from './UI/LangSelect.svelte';
	import { t } from '$lib/translations';
	import { fly } from 'svelte/transition';

	let showContact = false;
	const dispatch = createEventDispatcher();
</script>

<div
	transition:fly
	use:clickOutside={() => dispatch('closeMenu')}
	class="absolute top-0 inset-x-0 p-2 z-10 transition transform origin-top-right md:hidden"
>
	<div
		class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
	>
		<div class="py-2 px-5">
			<div class="flex items-center justify-between">
				<a on:click={() => dispatch('closeMenu')} href="/">
					<img class="h-8 w-auto" src="./logo_openversum_blue.svg" alt="openversum" />
				</a>
				<div class="-mr-2">
					<button
						on:click={() => dispatch('closeMenu')}
						type="button"
						class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					>
						<span class="sr-only">Close menu</span>
						<!-- Heroicon name: outline/x -->
						<CloseSvg />
					</button>
				</div>
			</div>
		</div>
		<div class="py-4 px-5 space-y-2">
			<div class="pb-2 grid grid-cols-2 gap-y-4 gap-x-8">
				<a
					on:click={() => dispatch('closeMenu')}
					href="/#what_we_do"
					class="text-base font-medium text-blue hover:text-blue-700"
				>
					{$t('common.whatWeDo')}
				</a>

				<a
					on:click={() => dispatch('closeMenu')}
					href="/#who_we_are"
					class="text-base font-medium text-blue hover:text-blue-700"
				>
					{$t('common.whoWeAre')}
				</a>

				<a
					on:click={() => dispatch('closeMenu')}
					href="/partners"
					class="text-base font-medium text-blue hover:text-blue-700"
				>
					{$t('common.mobilePartner')}
				</a>
				<a
					on:click={() => dispatch('closeMenu')}
					href="/entrepreneurs"
					class="text-base font-medium text-blue hover:text-blue-700"
				>
					{$t('common.mobileEntrep')}
				</a>

				<button class="text-base text-left font-medium text-blue hover:text-blue-700">
					<a href="/contact">{$t('common.contact')}</a>
				</button>

				<!-- <a
					on:click={() => dispatch('closeMenu')}
					href="https://app.openversum.com"
					target="_blank"
					class="text-base font-medium text-blue hover:text-blue-700"
				>
					Log in
				</a> -->

				<div class="flex my-auto">
					<LangSelect color="blue" />
				</div>
			</div>
		</div>
	</div>
</div>

{#if showContact}
	<div on:click|stopPropagation>
		<SimpleSlotModal on:closeModal={() => (showContact = false)}>
			<ContactForm currentForm="general" on:submitedContact={() => (showContact = false)} />
		</SimpleSlotModal>
	</div>
{/if}
