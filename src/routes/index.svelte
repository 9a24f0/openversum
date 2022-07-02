<script lang="ts">
	import AnimatedBlob from '$lib/components/AnimatedBlob.svelte';

	let y: number;
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

<AnimatedBlob />
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
