<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div
	on:click={() => dispatch('closeModal')}
	class="relative z-10"
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
>
	<!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
	<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
	<div class="fixed z-10 inset-0 overflow-y-auto">
		<div class="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
			<!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
			<slot />
		</div>
	</div>
</div>
