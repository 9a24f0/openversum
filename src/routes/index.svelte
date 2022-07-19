<script lang="ts">
	import AnimatedBlob from '$lib/components/AnimatedBlob.svelte';
	import SideSocialButtons from '$lib/components/SideSocialButtons.svelte';
	import SimpleSlotModal from '$lib/components/SimpleSlotModal.svelte';
	import WatchButton from '$lib/components/WatchButton.svelte';
	import { onMount } from 'svelte';
	export let imageList: any[];
	let y: number;
	let gridWidth: number;
	let showVideoModal = false;

	let Carousel: any; // for saving Carousel component class
	let carousel: any; // for calling methods of the carousel instance

	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;
	});

	const handleNextClick = () => {
		carousel.goToNext();
	};
</script>

<svelte:head>
	<title>Openversum - providing clean and safe drinking water where most needed</title>
	<meta
		name="description"
		content="Technology and educational platform to enable and empower local entrepreneurs to produce and distribute innovative drinking water filters. Entrepreneurs make a living by bringing clean water to their communities."
	/>
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<html lang="en" />
</svelte:head>
<svelte:window bind:scrollY={y} />

<div class="w-full h-full">
	<div bind:clientWidth={gridWidth} class="grid grid-cols-4 md:grid-cols-7 w-full h-full">
		<div class="relative col-span-4 h-full">
			<div class="inline-flex  h-full">
				<div class="my-auto">
					<SideSocialButtons />
				</div>
				<div class="grid grid-cols-1 pl-8 py-4 content-evenly">
					<div>
						<h1 class="font-bold text-4xl md:text-5xl">
							Bringing safe and clean water where it is most needed.
						</h1>
						<h3 class="font-semibold text-lg text-gray-500">
							Microfranchising of locally manufactured water goods with leading-edge membrane
							technology
						</h3>
					</div>
					<div class="inline-flex">
						<WatchButton on:click={() => (showVideoModal = !showVideoModal)} />
						<span class="mr-8 font-semibold text-lg my-auto">Watch Video</span>
					</div>
				</div>
			</div>
		</div>
		{#if gridWidth > 767}
			<div class="relative col-span-3 h-full">
				<div class="absolute top-[10%] right-0 w-full">
					<AnimatedBlob />
				</div>
				<div class="absolute inline-flex top-[15%]  w-full justify-center">
					<img
						class="w-full max-w-[200px]"
						src="./openversum_logo_white.png"
						alt="openvserum white logo"
					/>
				</div>
			</div>
		{/if}
	</div>

	<!-- Carousel -->
	<svelte:component
		this={Carousel}
		bind:this={carousel}
		particlesToShow={gridWidth > 767 ? 3 : gridWidth > 450 ? 2 : 1}
		autoplay
		autoplayDuration={2000}
	>
		{#each imageList as img}
			<div class="h-56 md:h-64 lg:h-96">
				<img class="h-56 md:h-64 lg:h-96 object-cover mx-auto" src={img} alt="ov-carousel" />
			</div>
		{/each}
	</svelte:component>

	<div class="w-full grid grid-cols-2 md:grid-cols-4 gap-2 px-8 items-center">
		<img
			class="max-h-[100px]"
			src="partner_logos/swiss_conf.png"
			alt="swiss confederation partner"
		/>
		<img class="max-h-[100px]" src="partner_logos/eth.png" alt="ETH partner" />
		<img class="max-h-[100px]" src="partner_logos/kick_fund.png" alt="kick foundation partner" />
		<img class="max-h-[100px]" src="partner_logos/hult_un.png" alt="Hult program partner" />
	</div>
</div>

{#if showVideoModal}
	<SimpleSlotModal on:closeModal={() => (showVideoModal = false)}>
		<iframe
			class="rounded-md"
			width="770"
			height="415"
			src="https://www.youtube.com/embed/EsGui64xO78?start=18"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</SimpleSlotModal>
{/if}

<!-- <div class="text-white flex-col">
	<section
		name="landing"
		class="relative bg-gradient-to-b from-black to-gray-600 via-black flex justify-center py-8 h-screen"
		style:transform="translateY({y * -3}px)"
	>
		<div class="w-full">
			<img
				class="top-[20%] max-h-[70%] my-auto absolute object-fill flex-1"
				src="./openversum_logo_whitefont.png"
				alt="openversum logo"
			/>
			<img
				class="top-[20%] max-h-[70%] my-auto absolute blur-sm opacity-80 object-fill flex-1 animate-pulse"
				src="./openversum_logo_whitefont.png"
				alt="openversum logo blurred"
			/>
		</div>
		<section
			name="landing"
			class="bg-gradient-to-b to-black from-gray-600 via-purple-900 flex justify-center py-8 h-screen"
			style:transform="translateY({y * -1}px)"
		>
			<div class="">
				<h1>Welcome to SvelteKit</h1>
				<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
			</div>
		</section>
	</section>
</div> -->
