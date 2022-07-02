<script>
	import ChartBarSvg from './SVG/ChartBarSVG.svelte';
	import CloseSvg from './SVG/CloseSVG.svelte';
	import CursorClickSvg from './SVG/CursorClickSVG.svelte';
	import RefreshSvg from './SVG/RefreshSVG.svelte';
	import ViewGridSvg from './SVG/ViewGridSVG.svelte';
</script>

<div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
	<div
		class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50"
	>
		<div class="pt-5 pb-6 px-5">
			<div class="flex items-center justify-between">
				<div>
					<img class="h-8 w-auto" src="./openversum_logo.png" alt="openversum" />
				</div>
				<div class="-mr-2">
					<button
						type="button"
						class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					>
						<span class="sr-only">Close menu</span>
						<!-- Heroicon name: outline/x -->
						<CloseSvg />
					</button>
				</div>
			</div>
			<div class="mt-6">
				<nav class="grid gap-y-8">
					<a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
						<!-- Heroicon name: outline/chart-bar -->
						<ChartBarSvg />
						<span class="ml-3 text-base font-medium text-gray-900"> Analytics </span>
					</a>

					<a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
						<!-- Heroicon name: outline/cursor-click -->
						<CursorClickSvg />
						<span class="ml-3 text-base font-medium text-gray-900"> Engagement </span>
					</a>

					<a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
						<!-- Heroicon name: outline/view-grid -->
						<ViewGridSvg />
						<span class="ml-3 text-base font-medium text-gray-900"> Integrations </span>
					</a>

					<a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
						<!-- Heroicon name: outline/refresh -->
						<RefreshSvg />
						<span class="ml-3 text-base font-medium text-gray-900"> Automations </span>
					</a>
				</nav>
			</div>
		</div>
		<div class="py-6 px-5 space-y-6">
			<div class="grid grid-cols-2 gap-y-4 gap-x-8">
				<a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Pricing </a>

				<a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Docs </a>

				<a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700">
					Help Center
				</a>

				<a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Guides </a>

				<a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Events </a>

				<a href="#" class="text-base font-medium text-gray-900 hover:text-gray-700"> Security </a>
			</div>
			<!-- <div>
          <a href="#" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
          <p class="mt-6 text-center text-base font-medium text-gray-500">
            Existing customer?
            <a href="#" class="text-indigo-600 hover:text-indigo-500"> Sign in </a>
          </p>
        </div> -->
		</div>
	</div>
</div>
