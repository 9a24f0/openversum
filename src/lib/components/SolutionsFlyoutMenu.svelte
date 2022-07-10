<script lang="ts">
	import ChartBarSVG from './SVG/ChartBarSVG.svelte';
	import CursorClickSVG from './SVG/CursorClickSVG.svelte';
	import RefreshSvg from './SVG/RefreshSVG.svelte';
	import ViewGridSvg from './SVG/ViewGridSVG.svelte';
	import { clickOutside } from '$lib/utilities/clickOutside';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<div
	use:clickOutside={() => dispatch('closeMenu')}
	class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
>
	<div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
		<div
			on:click={() => dispatch('closeMenu')}
			class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
		>
			<a href="solutions/newfilter" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
				<div class="text-emerald-800">
					<CursorClickSVG />
				</div>

				<div class="ml-4">
					<p class="text-base font-medium text-gray-900">New Filter</p>
					<p class="mt-1 text-sm text-gray-500">
						All you need to sell or replace our drinking water filters.
					</p>
				</div>
			</a>

			<a href="solutions/finance" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
				<div class="text-emerald-800">
					<ChartBarSVG />
				</div>
				<div class="ml-4">
					<p class="text-base font-medium text-gray-900">Finance</p>
					<p class="mt-1 text-sm text-gray-500">
						A central place for all financial support and information.
					</p>
				</div>
			</a>

			<a href="solutions/inventory" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
				<div class="text-emerald-800">
					<ViewGridSvg />
				</div>
				<div class="ml-4">
					<p class="text-base font-medium text-gray-900">Inventory</p>
					<p class="mt-1 text-sm text-gray-500">
						Keep track of your stock of filters and materials
					</p>
				</div>
			</a>

			<a href="solutions/shop" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
				<div class="text-emerald-800">
					<RefreshSvg />
				</div>
				<div class="ml-4">
					<p class="text-base font-medium text-gray-900">Shop</p>
					<p class="mt-1 text-sm text-gray-500">Place an order on more filters or materials</p>
				</div>
			</a>
		</div>
	</div>
</div>
