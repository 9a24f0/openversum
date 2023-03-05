<script lang="ts">
	import AwardsAndPrograms from './AwardsAndPrograms.svelte';

	import AnimatedWave from '$lib/components/AnimatedWave.svelte';
	import SimpleSlotModal from '$lib/components/SimpleSlotModal.svelte';
	import { t } from '$lib/translations';
	import LandingImage from '$lib/images/landing_image.jpg?w=1600&webp';
	import FilterImage from '$lib/images/filter_openversum.png?h=800&webp';
	import GreenDropImage from '$lib/images/greenwaterdrop.svg?h=300&webp';
	import OvercomesImage from '$lib/images/overcomes.png?h=300&webp';
	import WaterProblemImage from '$lib/images/waterproblem.png?h=300&webp';
	import H2 from './H2.svelte';
	let innerHeight: number;
	let innerWidth: number;
	let scrollYIndex: number;
	let showVideoModal = false;
</script>

<svelte:head>
	<title>Openversum - providing clean and safe drinking water where most needed</title>
	<meta
		name="description"
		content="Technology and educational platform to enable and empower local entrepreneurs to produce and distribute innovative drinking water filters. Entrepreneurs make a living by bringing clean water to their communities."
	/>
	<meta
		name="descripcion"
		content="Plataforma tecnológica y educativa para capacitar y empoderar a los empresarios locales para que produzcan y distribuyan filtros de agua potable innovadores. Los empresarios se ganan la vida llevando agua limpia a sus comunidades."
	/>
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<html lang="en" />
</svelte:head>

<svelte:window bind:scrollY={scrollYIndex} bind:innerHeight bind:innerWidth />
<div class="w-full overflow-x-hidden space-y-4 md:space-y-8">
	<div class="relative w-full">
		<div
			class="absolute w-80 sm:w-96 md:w-[530px] top-[14vh] left-[5vh] md:top-[16vh] md:left-[15vh]"
		>
			<h1 class="font-poppins text-white font-bold text-3xl sm:text-4xl md:text-6xl">
				<!-- Bringing safe and <span class="text-blue-300">clean</span>
				<span class="text-blue-300">water</span>
				where it is most needed -->
				{$t('home.title')}
			</h1>
			<p class="text-white text-md sm:text-lg md:text-xl">
				{$t('home.subtitle')}
			</p>
		</div>
		<img
			class="max-h-[90vh] min-h-[500px] mx-auto w-full object-cover"
			src={LandingImage}
			alt="kick foundation partner"
		/>
		<div style="width: {innerWidth}px;" class="absolute h-32 md:h-44 bottom-0">
			<AnimatedWave w={innerWidth} />
		</div>
	</div>
	<div id="what_we_do" class="relative w-full h-20 md:h-24">
		<div style="width: {innerWidth}px;" class="absolute h-20 md:h-24 bottom-0">
			<AnimatedWave duration={5500} fill="#76d0cd" w={innerWidth} />
		</div>
		<div style="width: {innerWidth}px;" class="absolute h-20 md:h-24 -bottom-4">
			<AnimatedWave duration={5500} w={innerWidth} />
		</div>
	</div>

	<section class="container mx-auto px-2 sm:px-10 lg:px-36">
		<div class="w-full flex justify-between">
			<div class="space-y-4 max-w-xl relative">
				<H2>
					{$t('common.whatWeDo')}
				</H2>

				<div>
					<h3 class="text-lg sm:text-xl mb-2 font-semibold ">
						{$t('home.filterSub')}
					</h3>
					<img
						class="float-right sm:hidden -z-10 h-[300px] opacity-80"
						src={FilterImage}
						alt="Filter schema"
					/>
					<ul class="pl-8 list-disc">
						<li class="text-base sm:text-lg">
							{$t('home.filterLi1')}
						</li>
						<li class="text-base sm:text-lg">{$t('home.filterLi2')}</li>
						<li class="text-base sm:text-lg">{$t('home.filterLi3')}</li>
					</ul>
				</div>

				<div>
					<h3 class="text-lg sm:text-xl mb-2 font-semibold ">{$t('home.manufactureSub')}</h3>

					<ul class="pl-8 list-disc">
						<li class="text-base sm:text-lg">{$t('home.manufactureLi1')}</li>
						<li class="text-base sm:text-lg">{$t('home.manufactureLi2')}</li>
						<li class="text-base sm:text-lg">{$t('home.manufactureLi3')}</li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg sm:text-xl font-semibold  mt-1">{$t('home.microfranchiseSub')}</h3>
					<ul class="pl-8 list-disc my-auto">
						<li class="text-base sm:text-lg">{$t('home.microLi1')}</li>
						<li class="text-base sm:text-lg">{$t('home.microLi2')}</li>
						<li class="text-base sm:text-lg">{$t('home.microLi3')}</li>
						<li class="text-base sm:text-lg">{$t('home.microLi4')}</li>
						<li class="text-base sm:text-lg">{$t('home.microLi5')}</li>
						<li class="text-base sm:text-lg">{$t('home.microLi6')}</li>
					</ul>
				</div>

				<!-- <img
					class="absolute right-0 top-10 sm:hidden -z-10 h-[350px] opacity-80"
					src={FilterImage}
					alt="Filter schema"
				/> -->
			</div>

			<div class="hidden sm:block my-auto max-h-[550px]">
				<img class="min-h-[350px] max-h-[550px]" src={FilterImage} alt="Filter schema" />
			</div>
		</div>
	</section>

	<div class="relative w-full h-20 md:h-24">
		<div style="width: {innerWidth}px;" class="absolute h-20 md:h-24 bottom-0">
			<AnimatedWave duration={4800} fill="#76d0cd" w={innerWidth} />
		</div>
		<div style="width: {innerWidth}px;" class="absolute h-20 md:h-24 -bottom-4">
			<AnimatedWave duration={4800} w={innerWidth} />
		</div>
	</div>

	<section class="container mx-auto px-2 sm:px-10 lg:px-36 space-y-4 pb-12">
		<H2>
			{$t('home.globalWaterTitle')}
		</H2>

		<div class="flex justify-evenly">
			<div class="my-auto">
				<img class="hidden sm:block max-h-[230px]" src={GreenDropImage} alt="greenwater drop" />
			</div>
			<p class="text-base max-w-md sm:text-lg p-4">
				<span class="text-blue text-2xl sm:text-5xl">+2.000</span>
				<img
					class="block sm:hidden float-left max-h-[230px] pr-4 pb-4"
					src={GreenDropImage}
					alt="greenwater drop"
				/>
				<br />
				{$t('home.globalWaterP')}
			</p>
		</div>

		<!-- <img class="float-right" src="grid_filter.svg" alt="filtergridchema" /> -->
		<H2>
			{$t('home.whyProblemTitle')}
		</H2>

		<div class="flex justify-evenly">
			<p class="text-base max-w-md sm:text-lg pr-2 pl-4 my-auto">
				<img
					class="block sm:hidden float-right max-h-[230px]"
					src={WaterProblemImage}
					alt="water problem"
				/>
				{$t('home.whyProblemP')}
			</p>
			<img class="hidden sm:block max-h-[230px]" src={WaterProblemImage} alt="water problem" />
		</div>
		<H2>
			{$t('home.overcomesTitle')}
		</H2>
		<div class="flex justify-evenly">
			<p class="my-auto max-w-md text-base sm:text-lg">
				<img
					class="block sm:hidden float-right max-h-[230px]"
					src={OvercomesImage}
					alt="Openversum overcomes barriers"
				/>
				{$t('home.overcomesP1')}
				<br />
				{$t('home.overcomesP2')}
			</p>
			<img
				class="hidden sm:block max-h-[230px]"
				src={OvercomesImage}
				alt="Openversum overcomes barriers"
			/>
		</div>
	</section>

	<AwardsAndPrograms />
</div>

{#if showVideoModal}
	<SimpleSlotModal on:closeModal={() => (showVideoModal = false)}>
		<iframe
			class="rounded-md"
			width="770"
			height="420"
			src="https://www.youtube.com/embed/EsGui64xO78?start=18"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</SimpleSlotModal>
{/if}
