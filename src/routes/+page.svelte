<script lang="ts">
	import AwardsAndPrograms from './AwardsAndPrograms.svelte';

	import AnimatedWave from '$lib/components/AnimatedWave.svelte';
	import SimpleSlotModal from '$lib/components/SimpleSlotModal.svelte';
	import { t } from '$lib/translations';
	import LandingImage from '$lib/images/landing_image.jpg?w=1600&webp';
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

<div class="w-full">
	<div class="relative">
		<div class="absolute w-80 md:w-96 top-[14vh] left-[5vh] md:top-[16vh] md:left-[15vh]">
			<h1 class="font-poppins text-white font-bold text-3xl sm:text-4xl md:text-5xl">
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

	<div id="what_we_do" class="w-full">
		<h1 class="font-bold text-4xl md:text-5xl">{$t('common.whatWeDo')}</h1>
		<div>
			<h2 class="text-2xl mb-2 font-semibold text-gray-700">
				{$t('home.filterSub')}
			</h2>
			<ul class="pl-8 list-disc">
				<li class="text-xl">
					{$t('home.filterLi1')}
				</li>
				<li class="text-xl">{$t('home.filterLi2')}</li>
				<li class="text-xl">{$t('home.filterLi3')}</li>
			</ul>
		</div>
		<div>
			<h2 class="text-2xl mb-2 font-semibold text-gray-700">{$t('home.manufactureSub')}</h2>

			<ul class="pl-8 list-disc">
				<li class="text-xl">{$t('home.manufactureLi1')}</li>
				<li class="text-xl">{$t('home.manufactureLi2')}</li>
				<li class="text-xl">{$t('home.manufactureLi3')}</li>
			</ul>
		</div>
		<div>
			<h2 class="text-2xl font-semibold text-gray-700 mt-1">{$t('home.microfranchiseSub')}</h2>
			<ul class="pl-8 list-disc my-auto">
				<li class="text-xl">{$t('home.microLi1')}</li>
				<li class="text-xl">{$t('home.microLi2')}</li>
				<li class="text-xl">{$t('home.microLi3')}</li>
				<li class="text-xl">{$t('home.microLi4')}</li>
				<li class="text-xl">{$t('home.microLi5')}</li>
				<li class="text-xl">{$t('home.microLi6')}</li>
			</ul>
			<!-- <OpenversumAppSvg /> -->
		</div>
	</div>

	<!-- Copy -->

	<section class="w-full flex flex-col sm:grid sm:grid-cols-2 mt-8 gap-8">
		<div class="flex-col">
			<h1 class="font-bold text-4xl md:text-5xl">{$t('home.globalWaterTitle')}</h1>

			<p class="text-lg sm:text-xl text-justify pr-4 pl-2 mt-16">
				{$t('home.globalWaterP')}
			</p>
		</div>
		<div class="sm:flex ">
			<img
				class="my-auto max-h-80 mx-auto rounded-lg"
				src="https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/public/openversum-images/general/whatwedo_example.png"
				alt="what we do, example"
			/>
		</div>

		<div class="col-span-2 flex">
			<h1 class="text-teal-600 text-4xl font-bold mx-auto">
				{$t('home.whyProblemTitle')}
			</h1>
		</div>

		<div class="sm:flex">
			<img
				class="my-auto max-h-52"
				src="https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/public/openversum-images/general/treatmenttech.png"
				alt="possible water treatments"
			/>
		</div>
		<div class="flex">
			<p class="text-lg sm:text-xl text-justify pr-2 pl-4 my-auto">
				{$t('home.whyProblemP')}
			</p>
		</div>

		<div class="col-span-2 flex">
			<h1 class="text-teal-600 text-4xl font-bold mx-auto">
				{$t('home.overcomesTitle')}
			</h1>
		</div>

		<div class="col-span-2 flex flex-wrap gap-2">
			<div class="inline-flex mx-auto space-x-4">
				<img
					class="my-auto max-h-32 sm:max-h-52 mx-auto rounded-lg"
					src="https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/public/openversum-images/general/blob_manufacture.png"
					alt="locally manufacture filters"
				/>
				<p class="my-auto max-w-[200px] text-justify text-lg sm:text-xl">
					{$t('home.overcomesP1')}
				</p>
			</div>
			<div class="inline-flex mx-auto space-x-4">
				<img
					class="my-auto max-h-32 sm:max-h-52 mx-auto rounded-lg"
					src="https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/public/openversum-images/general/blob_distribute.png"
					alt="locally distribute filters"
				/>
				<p class="my-auto max-w-[200px] text-justify text-lg sm:text-xl">
					{$t('home.overcomesP2')}
				</p>
			</div>
		</div>
	</section>
</div>

<AwardsAndPrograms />

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
