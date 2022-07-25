<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	const dispatch = createEventDispatcher();
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div
	transition:fade={{ duration: 100 }}
	class="relative z-10"
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
>
	<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
	<div on:click={() => dispatch('closeModal')} class="fixed z-10 inset-0 overflow-y-auto">
		<div class="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
			<div on:click|stopPropagation>
				<slot />
			</div>
		</div>
	</div>
</div>
