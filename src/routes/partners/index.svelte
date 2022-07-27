<script lang="ts">
	import SimpleSlotModal from '$lib/components/SimpleSlotModal.svelte';
	import Elipse3Svg from '$lib/components/SVG/Elipse3SVG.svelte';
	import WatchButton from '$lib/components/WatchButton.svelte';
	let blobW: any;
	let showVideoModal = false;
</script>

<div class="container mx-auto px-2 sm:px-6 lg:px-16">
	<div class="sm:grid sm:grid-cols-2 gap-8">
		<div class="relative col-span-2 my-8">
			<div bind:clientWidth={blobW} class="mx-auto w-full  sm:w-3/4">
				<Elipse3Svg />

				<h2
					style="width:{blobW}px;"
					class="absolute text-white origin-top-left top-[30%] mx-auto text-center whitespace-nowrap text-4xl md:text-5xl font-semibold "
				>
					Partner space
				</h2>
			</div>
		</div>

		<div class="col-span-2 mb-8 gap-8 sm:inline-flex">
			<div class="sm:w-2/3">
				<h1 class="font-bold text-4xl md:text-5xl mb-8">Working together</h1>

				<p class="text-justify text-lg">
					The many services we provide can be tailored to your needs, might you be an NGO or a
					governmental institution. We offer a cheaper and more sustainable drinking water solution
					that is particularly adapated to rural and remote areas; let’s reach the ones who most
					need it together!
				</p>
			</div>
			<div class="inline-flex w-1/3 my-auto">
				<WatchButton on:click={() => (showVideoModal = !showVideoModal)} />
				<span class="whitespace-nowrap mr-8 font-semibold text-lg my-auto">Watch Video</span>
			</div>
		</div>
	</div>
</div>

{#if showVideoModal}
	<SimpleSlotModal on:closeModal={() => (showVideoModal = false)}>
		<iframe
			class="rounded-md"
			width="770"
			height="420"
			src="https://www.youtube.com/embed/ONzSx-UL1Bw?start=4"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</SimpleSlotModal>
{/if}
