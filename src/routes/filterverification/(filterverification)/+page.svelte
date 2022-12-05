<script lang="ts">
	import { supabase } from '$lib/supabase';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	let loaded = false;
	let isValid = false;
	onMount(async () => {
		const { data, error } = await supabase.from('filter_ids').select();
		if (data) {
			const filterIds = data?.map((x) => x.id);

			if (filterIds.includes($page.data.filterId)) {
				isValid = true;
			}
		}

		loaded = true;
	});
</script>

<div class="h-[76vh] flex justify-center items-center">
	<div class="text-xl">
		{#if loaded}
			{#if isValid}
				<div class="flex flex-col items-center">
					<div class="">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-20 h-20 text-green-900"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
							/>
						</svg>
					</div>

					<p>Your filter is authentic! Thank you for trusting Openversum</p>
				</div>
			{:else}
				<div class="flex flex-col items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-20 h-20 text-red-900"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
						/>
					</svg>

					<p>
						Warning! We could not validate your filter, please contact us for manual verification
					</p>
				</div>
			{/if}
		{/if}
	</div>
</div>
