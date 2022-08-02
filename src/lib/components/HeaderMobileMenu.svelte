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

	let showContact = false;
	const dispatch = createEventDispatcher();
</script>

<div
	use:clickOutside={() => dispatch('closeMenu')}
	class="absolute top-0 inset-x-0 p-2 z-10 transition transform origin-top-right md:hidden"
>
	<div
		class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
	>
		<div class="py-2 px-5">
			<div class="flex items-center justify-between">
				<div>
					<img class="h-8 w-auto" src="./openversum_logo.png" alt="openversum" />
				</div>
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

			{#if $user}
				<div class="mt-6">
					<nav on:click={() => dispatch('closeMenu')} class="grid gap-y-8">
						<a
							href="/solutions/newfilter"
							class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
						>
							<!-- Heroicon name: outline/cursor-click -->
							<div class="text-emerald-700">
								<CursorClickSvg />
							</div>
							<span class="ml-3 text-base font-medium text-gray-900"> New Filter </span>
						</a>

						<a
							href="/solutions/finance"
							class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
						>
							<!-- Heroicon name: outline/chart-bar -->
							<div class="text-emerald-700">
								<ChartBarSvg />
							</div>
							<span class="ml-3 text-base font-medium text-gray-900"> Finance </span>
						</a>

						<a
							href="/solutions/inventory"
							class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
						>
							<!-- Heroicon name: outline/view-grid -->
							<div class="text-emerald-700">
								<ViewGridSvg />
							</div>
							<span class="ml-3 text-base font-medium text-gray-900"> Inventory </span>
						</a>

						<a
							href="/solutions/shop"
							class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
						>
							<!-- Heroicon name: outline/refresh -->
							<div class="text-emerald-700">
								<RefreshSvg />
							</div>
							<span class="ml-3 text-base font-medium text-gray-900"> Shop </span>
						</a>
					</nav>
				</div>
			{/if}
		</div>
		<div class="py-4 px-5 space-y-2">
			<div class="pb-2 grid grid-cols-2 gap-y-4 gap-x-8">
				<a
					on:click={() => dispatch('closeMenu')}
					href="/#what_we_do"
					class="text-base font-medium text-emerald-700 hover:text-emerald-900"
				>
					{$t('common.whatWeDo')}
				</a>

				<a
					on:click={() => dispatch('closeMenu')}
					href="/#who_we_are"
					class="text-base font-medium text-emerald-700 hover:text-emerald-900"
				>
					{$t('common.whoWeAre')}
				</a>

				<a
					on:click={() => dispatch('closeMenu')}
					href="/partners"
					class="text-base font-medium text-emerald-700 hover:text-emerald-900"
				>
					{$t('common.mobilePartner')}
				</a>
				<a
					on:click={() => dispatch('closeMenu')}
					href="/entrepreneurs"
					class="text-base font-medium text-emerald-700 hover:text-emerald-900"
				>
					{$t('common.mobileEntrep')}
				</a>

				<button
					on:click={() => (showContact = !showContact)}
					class="text-base text-left font-medium text-emerald-700 hover:text-emerald-900"
				>
					{$t('common.contact')}
				</button>

				<div class="flex my-auto">
					<LangSelect />
				</div>
			</div>
			<!-- <div>
          <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
          <p class="mt-6 text-center text-base font-medium text-gray-500">
            Existing customer?
            <a href="#" class="text-indigo-600 hover:text-indigo-500"> Sign in </a>
          </p>
        </div> -->

			<!-- <div class="pt-2 border-t flex md:flex items-center justify-center md:flex-1 lg:w-0">
				{#if $user}
					<button
						on:click|stopPropagation={() => {
							dispatch('logOut');
							dispatch('closeMenu');
						}}
						class="w-full whitespace-nowrap text-lg font-medium text-emerald-800 hover:text-emerald-900 hover:bg-emerald-100 rounded-xl px-2 py-1 border-emerald-800 border "
					>
						Log out
					</button>
				{:else}
					<button
						on:click|stopPropagation={() => {
							dispatch('signIn');
							dispatch('closeMenu');
						}}
						class="w-full whitespace-nowrap text-lg font-medium text-emerald-800 hover:text-emerald-900 hover:bg-emerald-100 rounded-xl px-2 py-1 border-emerald-800 border "
					>
						Sign in
					</button>
				{/if}
			</div> -->
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
