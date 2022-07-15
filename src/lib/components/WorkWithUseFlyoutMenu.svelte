<script lang="ts">
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
			<a href="/entrepreneurs" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
				<div class="ml-4">
					<p class="text-base font-medium text-gray-900">Entrepreneurs</p>
					<p class="mt-1 text-sm text-gray-500">
						Do you have an entrepreneurial mindset? <br /> Do you like to sell or create?
					</p>
				</div>
			</a>

			<a href="/partners" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
				<div class="ml-4">
					<p class="text-base font-medium text-gray-900">Partners</p>
					<p class="mt-1 text-sm text-gray-500">
						Are you an NGO or a government institution? <br /> We can help you bring water to people
					</p>
				</div>
			</a>
		</div>
	</div>
</div>
