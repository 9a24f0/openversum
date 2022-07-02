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
		<div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
			<a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
				<ChartBarSVG />
				<div class="ml-4">
					<p class="text-base font-medium text-gray-900">Analytics</p>
					<p class="mt-1 text-sm text-gray-500">
						Get a better understanding of where your traffic is coming from.
					</p>
				</div>
			</a>

			<a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
				<CursorClickSVG />
				<div class="ml-4">
					<p class="text-base font-medium text-gray-900">Engagement</p>
					<p class="mt-1 text-sm text-gray-500">
						Speak directly to your customers in a more meaningful way.
					</p>
				</div>
			</a>

			<a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
				<ViewGridSvg />
				<div class="ml-4">
					<p class="text-base font-medium text-gray-900">Integrations</p>
					<p class="mt-1 text-sm text-gray-500">
						Connect with third-party tools that you&#039;re already using.
					</p>
				</div>
			</a>

			<a href="#" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
				<RefreshSvg />
				<div class="ml-4">
					<p class="text-base font-medium text-gray-900">Automations</p>
					<p class="mt-1 text-sm text-gray-500">
						Build strategic funnels that will drive your customers to convert
					</p>
				</div>
			</a>
		</div>
	</div>
</div>
