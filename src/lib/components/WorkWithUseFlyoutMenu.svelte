<script lang="ts">
	import { clickOutside } from '$lib/utilities/clickOutside';
	import { createEventDispatcher } from 'svelte';
	import { t } from '$lib/translations';
	import { isHoverHeader } from '$lib/stores/generalState';

	const dispatch = createEventDispatcher();
</script>

<div use:clickOutside={() => dispatch('closeMenu')} class="z-10 w-full">
	<div
		class:text-white={$isHoverHeader}
		class="{$isHoverHeader ? 'bg-blue-500' : 'bg-white'} bg-blue overflow-hidden pb-4"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="flex justify-evenly">
			<a
				on:click={() => dispatch('closeMenu')}
				href="/entrepreneurs"
				class="p-3 flex items-start rounded-lg hover:bg-gray-50"
			>
				<div class="ml-4">
					<p class="text-base font-medium text-gray-900">{$t('common.mobileEntrep')}</p>
					<p class="mt-1 text-sm text-gray-500">
						{@html $t('common.entrepDescription')}
					</p>
				</div>
			</a>

			<a
				on:click={() => dispatch('closeMenu')}
				href="/partners"
				class="p-3 flex items-start rounded-lg hover:bg-gray-50"
			>
				<div class="ml-4">
					<p class="text-base font-medium text-gray-900">{$t('common.mobilePartner')}</p>
					<p class="mt-1 text-sm text-gray-500">
						{@html $t('common.partnerDescription')}
					</p>
				</div>
			</a>
		</div>
	</div>
</div>
