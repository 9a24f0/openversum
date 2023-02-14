<script lang="ts">
	import { t } from '$lib/translations';
	export let currentFormChild;
	function changeStateContact(state) {
		currentFormChild = state;
	}
</script>

<!-- <div class="border-b border-gray-200">
	<nav class="-mb-px flex" aria-label="Tabs">
		Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
		<button
			on:click={() => (currentForm = 'general')}
			class:current-tab={currentForm === 'general'}
			class:default-tab={currentForm != 'general'}
			class="w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm"
		>
			{$t('contact.navG')}
		</button>

		<button
			on:click={() => (currentForm = 'entrepreneur')}
			class:current-tab={currentForm === 'entrepreneur'}
			class:default-tab={currentForm != 'entrepreneur'}
			class="w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm"
		>
			{$t('contact.navE')}
		</button>

		<button
			on:click={() => (currentForm = 'partner')}
			class:current-tab={currentForm === 'partner'}
			class:default-tab={currentForm != 'partner'}
			class=" w-1/3 py-4 px-1 text-center border-b-2 font-medium text-sm"
		>
			{$t('contact.navP')}
		</button>
	</nav>
</div> -->

<ul>
	<li class="cursor-pointer" on:click={() => changeStateContact('General')}>General</li>
	<li class="cursor-pointer" on:click={() => changeStateContact('Entrepreneur')}>Entrepreneur</li>
	<li class="cursor-pointer" on:click={() => changeStateContact('Partner')}>Partner</li>
</ul>

<style lang="postcss">
	.default-tab {
		@apply border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300;
	}
	.current-tab {
		@apply border-indigo-500 text-indigo-600;
	}
</style>
