<script>
	import Elipse1Svg from '$lib/components/SVG/Elipse1SVG.svelte';
	import OpenversumAppSvg from '$lib/components/SVG/OpenversumAppSVG.svelte';
</script>

<svelte:head>
	<title
		>Openversum - providing clean and safe drinking water where most needed - Meet the team</title
	>
	<meta
		name="description"
		content="Openversum about page. Meet the startup team and our capabilities. Technology and educational platform to enable and empower local entrepreneurs to produce and distribute innovative drinking water filters. Entrepreneurs make a living by bringing clean water to their communities."
	/>
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<html lang="en" />
</svelte:head>

<div class="container mx-auto sm:px-6 lg:px-8 h-full">
	<!-- Content goes here -->
	<div class="grid grid-cols-2 gap-8 h-full">
		<div class="grid col-span-1 content-evenly">
			<h1 class="font-bold text-4xl md:text-5xl">We combine</h1>
			<div class="mx-auto">
				<img src="./Filtre.png" alt="filter design" />
			</div>
		</div>
		<div class="grid col-span-1 content-center">
			<div class="mt-12">
				<h2 class="text-2xl mb-2 font-semibold text-gray-700">All-in-one drinking water filter</h2>
				<ul class="pl-8 list-disc">
					<li class="text-xl">
						High removal rates of pathogens (>99.999%), pesticides, heavy metals and micropollutant
					</li>
					<li class="text-xl">Lowers the risks of recontamination</li>
					<li class="text-xl">Stable long term performances</li>
				</ul>
			</div>
			<div class="mt-12">
				<h2 class="text-2xl mb-2 font-semibold text-gray-700">Novel manufacturing process</h2>

				<ul class="pl-8 list-disc">
					<li class="text-xl">Low production costs</li>
					<li class="text-xl">Biodegradable cartidge</li>
					<li class="text-xl">Solvent-free</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Copy -->

	<div class="h-full">
		<h2 class="text-2xl mb-2 font-semibold text-gray-700">
			Online platform targetted at local entrepreneurs
		</h2>
		<div class="flex justify-evenly">
			<ul class="pl-8 list-disc my-auto">
				<li class="text-xl">Water knowhow</li>
				<li class="text-xl">Filter manufacturing instructions</li>
				<li class="text-xl">Business tools (accounting, monitoring...)</li>
				<li class="text-xl">Direct access to ordering of supplies</li>
				<li class="text-xl">Network of entrepreneurs</li>
			</ul>

			<OpenversumAppSvg />
		</div>

		<div class="w-full justify-center flex">
			<div
				class="my-auto relative h-[80px] md:h-[112px] lg:h-[185px] w-[500px] md:w-[600px] lg:w-[900px] mt-8"
			>
				<h2
					class="z-10 text-lg md:text-xl lg:text-3xl font-semibold absolute top-1/4 left-[7%] text-white"
				>
					In a sustainable microfranchising distribution system
				</h2>
				<div class="absolute top-0 flex-shrink w-[500px] md:w-[600px] lg:w-[900px]">
					<Elipse1Svg />
				</div>
			</div>
		</div>
	</div>
</div>
