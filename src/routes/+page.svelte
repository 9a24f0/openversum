<script lang="ts">
	import AwardsAndPrograms from './AwardsAndPrograms.svelte';

	import AnimatedWave from '$lib/components/AnimatedWave.svelte';
	import SimpleSlotModal from '$lib/components/SimpleSlotModal.svelte';
	import { t } from '$lib/translations';
	import LandingImage from '$lib/images/landing_image.jpg?w=1600&webp';
	import FilterImage from '$lib/images/filter_openversum.png?h=800&webp';
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
<div class="w-full overflow-y-scroll space-x-1 sm:space-y-4 md:space-x-8">
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

	<section class="container mx-auto px-2 sm:px-6 lg:px-16">
		<div id="what_we_do" class="w-full flex justify-evenly">
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
						<li class="text-base">
							{$t('home.filterLi1')}
						</li>
						<li class="text-base">{$t('home.filterLi2')}</li>
						<li class="text-base">{$t('home.filterLi3')}</li>
					</ul>
				</div>

				<div>
					<h3 class="text-lg sm:text-xl mb-2 font-semibold ">{$t('home.manufactureSub')}</h3>

					<ul class="pl-8 list-disc">
						<li class="text-base">{$t('home.manufactureLi1')}</li>
						<li class="text-base">{$t('home.manufactureLi2')}</li>
						<li class="text-base">{$t('home.manufactureLi3')}</li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg sm:text-xl font-semibold  mt-1">{$t('home.microfranchiseSub')}</h3>
					<ul class="pl-8 list-disc my-auto">
						<li class="text-base">{$t('home.microLi1')}</li>
						<li class="text-base">{$t('home.microLi2')}</li>
						<li class="text-base">{$t('home.microLi3')}</li>
						<li class="text-base">{$t('home.microLi4')}</li>
						<li class="text-base">{$t('home.microLi5')}</li>
						<li class="text-base">{$t('home.microLi6')}</li>
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

	<section class="container mx-auto px-2 sm:px-6 lg:px-16">
		<div class="w-full">
			<H2>
				{$t('home.globalWaterTitle')}
			</H2>

			<p class="text-lg sm:text-xl text-justify pr-4 pl-2 mt-16">
				{$t('home.globalWaterP')}
			</p>

			<H2>
				{$t('home.whyProblemTitle')}
			</H2>

			<p class="text-lg sm:text-xl text-justify pr-2 pl-4 my-auto">
				{$t('home.whyProblemP')}
			</p>
			<H2>
				{$t('home.overcomesTitle')}
			</H2>

			<p class="my-auto max-w-[200px] text-justify text-lg sm:text-xl">
				{$t('home.overcomesP1')}
			</p>

			<p class="my-auto max-w-[200px] text-justify text-lg sm:text-xl">
				{$t('home.overcomesP2')}
			</p>
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
