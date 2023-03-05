<script lang="ts">
	import { clickOutside } from '$lib/utilities/clickOutside';
	import { createEventDispatcher } from 'svelte';
	import { t } from '$lib/translations';
	import { isHoverHeader } from '$lib/stores/generalState';
	import { fly, slide } from 'svelte/transition';

	const dispatch = createEventDispatcher();
</script>

<div transition:slide use:clickOutside={() => dispatch('closeMenu')} class="z-10 w-full">
	<div
		class:text-white={$isHoverHeader}
		class="{$isHoverHeader ? 'bg-blue-500' : 'bg-white'} bg-blue overflow-hidden pb-2"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="hidden sm:flex justify-evenly">
			<a
				on:click={() => dispatch('closeMenu')}
				href="/entrepreneurs"
				class="p-2 rounded-lg border-transparent border-2 hover:border-white"
			>
				<p class="text-base font-medium text-darkblue">{$t('common.mobileEntrep')}</p>
				<p class="mt-1 text-sm {$isHoverHeader ? 'text-white' : 'text-blue'}">
					{@html $t('common.entrepDescription')}
				</p>
			</a>

			<a
				on:click={() => dispatch('closeMenu')}
				href="/partners"
				class="p-2 rounded-lg border-transparent border-2 hover:border-white"
			>
				<p class="text-base font-medium text-darkblue">{$t('common.mobilePartner')}</p>
				<p class="mt-1 text-sm {$isHoverHeader ? 'text-white' : 'text-blue'}">
					{@html $t('common.partnerDescription')}
				</p>
			</a>
		</div>
	</div>
</div>
