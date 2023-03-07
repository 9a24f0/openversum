<script lang="ts">
	import SimpleSlotModal from '$lib/components/SimpleSlotModal.svelte';
	export let src = 'https://www.youtube.com/embed/ONzSx-UL1Bw?start=4';
</script>

<SimpleSlotModal on:closeModal>
	<iframe
		class="rounded-md aspect-video w-[400px] sm:w-[680px] md:w-[830px]"
		{src}
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
</SimpleSlotModal>
