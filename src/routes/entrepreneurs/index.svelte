<script lang="ts">
	import SimpleSlotModal from '$lib/components/SimpleSlotModal.svelte';
	import BlobProfile from '$lib/components/SVG/BlobProfile.svelte';
	import Elipse2Svg from '$lib/components/SVG/Elipse2SVG.svelte';
	import WatchButton from '$lib/components/WatchButton.svelte';
	let blobW: any;
	let showVideoModal = false;
</script>

<div class="container mx-auto px-2 sm:px-6 lg:px-16">
	<div class="sm:grid sm:grid-cols-2 gap-8">
		<div class="relative col-span-2 my-8">
			<div bind:clientWidth={blobW} class="mx-auto w-full  sm:w-[80%]">
				<Elipse2Svg />
				<h2
					style="width:{blobW}px;"
					class="absolute text-white origin-top-left top-[30%] mx-auto text-center whitespace-nowrap text-4xl md:text-5xl font-semibold "
				>
					Entrepreneur space
				</h2>
			</div>
		</div>

		<div class="col-span-2 mb-8 gap-8 sm:inline-flex">
			<div class="sm:w-2/3">
				<h1 class="font-bold text-4xl md:text-5xl mb-8">Working together</h1>

				<p class="text-justify text-lg">
					Do you have an entrepreneurial mindset? Do you like to sell or create?<br />
					We offer you the possibility to make a living while contributing to improving the health of
					your community and loved ones by bringing safe water where it is most needed.
				</p>
			</div>
			<div class="inline-flex w-1/3 my-auto">
				<WatchButton on:click={() => (showVideoModal = !showVideoModal)} />
				<span class="whitespace-nowrap mr-8 font-semibold text-lg my-auto">Watch Video</span>
			</div>
		</div>

		<div>
			<img
				class="rounded-lg max-w-xs sm:max-w-md object-contain w-full mx-auto"
				src="https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/public/openversum-images/general/franchisee.png"
				alt="becoming a franchisee"
			/>
		</div>

		<div class="space-y-8 mt-8 sm:mt-0">
			<h1 class="font-bold text-4xl md:text-5xl">Becoming a franchisee</h1>

			<p class="text-justify text-lg">
				An openversum entrepreneur is able to build and run his own business of manufacturing,
				distribution and maintenance of drinking water filters.
				<br />
				Our franchisees have access to the openversum platform, which offers tools to support running
				a business and step-by-step instructions on filter manufacturing.
			</p>
		</div>

		<div class="space-y-8 mt-8 sm:mt-0">
			<h1 class="font-bold text-4xl md:text-5xl">Your profile</h1>

			<p class="text-justify text-lg">
				You do not need any previous experience with water filters; our platform teaches you how to
				manufacture them, get the tools, record your sales, puts you in contact with other
				entrepreneurs, and more!
				<br />
				All you need is a smartphone and the possibility to access internet at times.
			</p>
		</div>
		<div class="mt-4 sm:mt-0">
			<div class="relative flex mx-auto w-[85%] sm:w-full">
				<BlobProfile />
				<div class="absolute text-white origin-top-left top-[20%] sm:top-1/4 right-1/4 text-center">
					<span>Become part of ...</span>

					<h2 class="whitespace-nowrap text-3xl sm:text-lg md:text-3xl font-semibold">
						20+ entrepreneurs
					</h2>
					<h2 class="whitespace-nowrap text-3xl sm:text-lg md:text-3xl font-semibold">
						100+ filters sold
					</h2>
				</div>
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
