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

<div class="container mx-auto px-2 sm:px-6 lg:px-16">
	<!-- Content goes here -->
	<section class="grid grid-cols-1 sm:grid-cols-2 gap-8 h-full">
		<div class="grid col-span-1 content-evenly">
			<h1 class="font-bold text-4xl md:text-5xl">We combine</h1>
			<div class="mx-auto">
				<img class="max-h-48" src="./Filtre.png" alt="filter design" />
			</div>
		</div>
		<div class="grid col-span-1 content-center">
			<div class="sm:mt-12">
				<h2 class="text-2xl mb-2 font-semibold text-gray-700">All-in-one drinking water filter</h2>
				<ul class="pl-8 list-disc">
					<li class="text-xl">
						High removal rates of pathogens (>99.999%), pesticides, heavy metals and micropollutant
					</li>
					<li class="text-xl">Lowers the risks of recontamination</li>
					<li class="text-xl">Stable long term performances</li>
				</ul>
			</div>
			<div class="mt-4 sm:mt-12">
				<h2 class="text-2xl mb-2 font-semibold text-gray-700">Novel manufacturing process</h2>

				<ul class="pl-8 list-disc">
					<li class="text-xl">Low production costs</li>
					<li class="text-xl">Biodegradable cartidge</li>
					<li class="text-xl">Solvent-free</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Copy -->

	<section class="">
		<h2 class="text-2xl mb-2 font-semibold text-gray-700">
			Online platform targetted at local entrepreneurs
		</h2>
		<div class="flex-col sm:grid sm:grid-cols-2 flex justify-evenly ">
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
					class="z-10 text-lg md:text-xl lg:text-3xl font-semibold absolute top-1/4 left-[7%] text-white text-center"
				>
					In a sustainable microfranchising distribution system
				</h2>
				<div class="absolute -top-2 flex-shrink w-[500px] md:w-[600px] lg:w-[900px]">
					<Elipse1Svg />
				</div>
			</div>
		</div>
	</section>

	<section class="h-full w-full flex flex-col sm:grid sm:grid-cols-2 mt-8 gap-8">
		<div class="flex-col">
			<h1 class="font-bold text-4xl md:text-5xl">The global drinking water problem</h1>

			<p class="text-lg text-justify pr-4 pl-2 mt-16">
				More than 2 billion people use drinking water sources that are contaminated with faeces. The
				issue is that consumption of contaminated water as well as poor sanitation and hygiene can
				lead to diarrhoeal diseases. As a result, 297'000 children under five every year die every
				year. And this despite the many water treatment solutions that exist!
			</p>
		</div>
		<div class="sm:flex ">
			<img
				class="my-auto max-h-52"
				src="https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/public/openversum-images/general/treatmenttech.png"
				alt="possible water treatments"
			/>
		</div>

		<div class="col-span-2 flex">
			<h1 class="text-teal-600 text-4xl font-bold mx-auto">
				Then why does the problem still exist?
			</h1>
		</div>

		<div class="sm:flex">
			<img
				class="my-auto max-h-52 mx-auto rounded-lg"
				src="https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/public/openversum-images/general/whatwedo_example.png"
				alt="what we do, example"
			/>
		</div>
		<div class="flex">
			<p class="text-lg text-justify pr-2 pl-4 my-auto">
				Treatment technologies often fail because of their price, practicality, or simply because
				users do not trust or like them. The second biggest challenge is to bring the technology to
				market. Are the resources and infrastructures available? Do effective policies exist in
				order to implement the technology sustainably? Are people aware that there is a problem, and
				what are the solutions?
			</p>
		</div>

		<div class="col-span-2 flex">
			<h1 class="text-teal-600 text-4xl font-bold mx-auto">
				Openversum overcomes these barriers by...
			</h1>
		</div>

		<div class="col-span-2 flex flex-wrap gap-2">
			<img
				class="my-auto max-h-52 mx-auto rounded-lg"
				src="https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/public/openversum-images/general/blob_manufacture.png"
				alt="locally manufacture filters"
			/>
			<p class="my-auto max-w-[200px] text-lg">
				Training local entrepreneurs to locally manufacture and distribute household level drinking
				water filters
			</p>
			<img
				class="my-auto max-h-52 mx-auto rounded-lg"
				src="https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/public/openversum-images/general/blob_distribute.png"
				alt="locally distribute filters"
			/>
			<p class="my-auto max-w-[200px] text-lg">
				Consequently creating employment for thousands of entrepreneurs and reaching the people in
				most need!​
			</p>
		</div>
		<!-- <div class="col-span-2 w-full justify-center flex">
			<div
				class="my-auto relative h-[80px] md:h-[112px] lg:h-[185px] w-[500px] md:w-[600px] lg:w-[900px] mt-8"
			>
				<h2
					class="z-10 text-lg md:text-xl lg:text-3xl font-semibold absolute top-1/4 left-[17%] text-white text-center"
				>
					Household level drinking water filters
				</h2>
				<div class="absolute -top-2 flex-shrink w-[500px] md:w-[600px] lg:w-[900px]">
					<Elipse1Svg />
				</div>
			</div>
		</div> -->
	</section>
</div>
