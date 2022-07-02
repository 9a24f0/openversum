<script lang="ts">
	import ChartBarSVG from './SVG/ChartBarSVG.svelte';
	import CursorClickSVG from './SVG/CursorClickSVG.svelte';
	import PhoneSvg from './SVG/PhoneSVG.svelte';
	import PlaySvg from './SVG/PlaySVG.svelte';
	import RefreshSvg from './SVG/RefreshSVG.svelte';
	import ViewGridSvg from './SVG/ViewGridSVG.svelte';
</script>

<div
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
				<!-- Heroicon name: outline/shield-check -->
				<svg
					class="flex-shrink-0 h-6 w-6 text-indigo-600"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2"
					stroke="currentColor"
					aria-hidden="true"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
					/>
				</svg>
				<div class="ml-4">
					<p class="text-base font-medium text-gray-900">Security</p>
					<p class="mt-1 text-sm text-gray-500">
						Your customers&#039; data will be safe and secure.
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
		<div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
			<div class="flow-root">
				<a
					href="#"
					class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
				>
					<PlaySvg />
					<span class="ml-3">Watch Demo</span>
				</a>
			</div>

			<div class="flow-root">
				<a
					href="#"
					class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
				>
					<PhoneSvg />
					<span class="ml-3">Contact Sales</span>
				</a>
			</div>
		</div>
	</div>
</div>
