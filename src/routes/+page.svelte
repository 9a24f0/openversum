<script lang="ts">
	import AnimatedBlob from '$lib/components/AnimatedBlob.svelte';
	import SideSocialButtons from '$lib/components/SideSocialButtons.svelte';
	import SimpleSlotModal from '$lib/components/SimpleSlotModal.svelte';
	import BottomWaves from '$lib/components/SVG/BottomWaves.svelte';
	import BottomWaves2 from '$lib/components/SVG/BottomWaves2.svelte';
	import Elipse1Svg from '$lib/components/SVG/Elipse1SVG.svelte';
	import OpenversumAppSvg from '$lib/components/SVG/OpenversumAppSVG.svelte';
	import TopWaves from '$lib/components/SVG/TopWaves.svelte';
	import TopWaves2 from '$lib/components/SVG/TopWaves2.svelte';
	import WatchButton from '$lib/components/WatchButton.svelte';
	import { t } from '$lib/translations';
	import { onMount } from 'svelte';
	export let data: any;
	const imageList = data.imageList;
	let innerHeight: number;
	let scrollYIndex: number;
	let gridWidth: number;
	let showVideoModal = false;

	let Carousel: any; // for saving Carousel component class
	let carousel: any; // for calling methods of the carousel instance

	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;
	});

	/* const handleNextClick = () => {
		carousel.goToNext();
	}; */
</script>

<svelte:head>
	<title>Openversum - providing clean and safe drinking water where most needed</title>
	<meta
		name="description"
		content="Technology and educational platform to enable and empower local entrepreneurs to produce and distribute innovative drinking water filters. Entrepreneurs make a living by bringing clean water to their communities."
	/>
	<meta
		name="description"
		content="Plataforma tecnológica y educativa para capacitar y empoderar a los empresarios locales para que produzcan y distribuyan filtros de agua potable innovadores. Los empresarios se ganan la vida llevando agua limpia a sus comunidades."
	/>
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<html lang="en" />
</svelte:head>

<svelte:window bind:scrollY={scrollYIndex} bind:innerHeight />

<div class="w-full">
	<div
		bind:clientWidth={gridWidth}
		style:height="{Math.max(innerHeight - 280, 300)}px"
		class="grid grid-cols-4 md:grid-cols-7 w-full "
	>
		<div class="relative col-span-4 h-full">
			<div class="inline-flex  h-full">
				<div class="my-auto">
					<SideSocialButtons />
				</div>
				<div class="grid grid-cols-1 pl-8 py-4 content-evenly">
					<div>
						<h1 class="font-bold text-4xl md:text-5xl mb-4">
							{$t('home.title')}
						</h1>
						<h3 class="font-semibold text-lg text-gray-500">
							{$t('home.subtitle')}
						</h3>
					</div>
					<div class="inline-flex">
						<WatchButton on:click={() => (showVideoModal = !showVideoModal)} />
						<span class="mr-8 ml-2 font-semibold text-lg my-auto">{$t('common.watchVideo')}</span>
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

	<!-- style:transform="translateY({y * -1.2}px)" -->
	<div class="mt-10 sm:mt-2 w-full h-48 opacity-70">
		<BottomWaves />
	</div>
	<div class="w-full bg-emerald-200 bg-opacity-70">
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
					<img
						class="h-56 md:h-64 lg:h-96 object-cover mx-auto p-4 rounded-md"
						src={img}
						alt="ov-carousel"
					/>
				</div>
			{/each}
		</svelte:component>
	</div>

	<div id="what_we_do" class="w-full h-48 opacity-70">
		<TopWaves />
	</div>

	<div class="container mx-auto px-2 sm:px-6 lg:px-16">
		<!-- Content goes here -->
		<!-- 
		<div class="w-full justify-center flex">
				<div
				class="my-auto relative h-[80px] md:h-[112px] lg:h-[185px] w-[500px] md:w-[600px] lg:w-[900px] mt-8"
			>
				<h2
					class="z-10 text-lg md:text-xl lg:text-5xl font-semibold absolute top-1/4 left-[7%] text-white text-center"
				>
					What we do
				</h2>
				<div class="absolute -top-2 flex-shrink w-[500px] md:w-[600px] lg:w-[900px]">
					<Elipse1Svg />
				</div>
			</div> 
		</div>
	-->
		<section class="grid grid-cols-1 sm:grid-cols-2 gap-8 h-full">
			<div class="grid col-span-1 content-evenly">
				<h1 class="font-bold text-4xl md:text-5xl">{$t('common.whatWeDo')}</h1>
				<div class="mx-auto">
					<img class="max-h-48" src="./Filtre.png" alt="filter design" />
				</div>
			</div>
			<div class="grid col-span-1 content-center">
				<div class="sm:mt-12">
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
				<div class="mt-4 sm:mt-12">
					<h2 class="text-2xl mb-2 font-semibold text-gray-700">{$t('home.manufactureSub')}</h2>

					<ul class="pl-8 list-disc">
						<li class="text-xl">{$t('home.manufactureLi1')}</li>
						<li class="text-xl">{$t('home.manufactureLi2')}</li>
						<li class="text-xl">{$t('home.manufactureLi3')}</li>
					</ul>
				</div>
			</div>
		</section>

		<!-- Copy -->

		<section class="" id="microfranchising">
			<h2 class="text-2xl font-semibold text-gray-700 mt-1">{$t('home.microfranchiseSub')}</h2>
			<div class="flex-col sm:grid sm:grid-cols-2 flex justify-evenly ">
				<ul class="pl-8 list-disc my-auto">
					<li class="text-xl">{$t('home.microLi1')}</li>
					<li class="text-xl">{$t('home.microLi2')}</li>
					<li class="text-xl">{$t('home.microLi3')}</li>
					<li class="text-xl">{$t('home.microLi4')}</li>
					<li class="text-xl">{$t('home.microLi5')}</li>
					<li class="text-xl">{$t('home.microLi6')}</li>
				</ul>

				<OpenversumAppSvg />
			</div>
		</section>

		<section class="h-full w-full flex flex-col sm:grid sm:grid-cols-2 mt-8 gap-8">
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

	<div id="who_we_are" class="w-full h-48 opacity-70">
		<BottomWaves2 />
	</div>

	<div class="bg-emerald-200 bg-opacity-70 w-full">
		<div class="container mx-auto px-2 sm:px-6 lg:px-16">
			<h1 class="font-bold text-4xl md:text-5xl  sm:mb-8">{$t('home.visionTitle')}</h1>

			<p class="text-lg sm:text-xl px-4 sm:px-8 md:px-16 pt-8 pb-4 text-justify sm:columns-2">
				{@html $t('home.visionP')}
			</p>
			<div class="flex mb-8">
				<img
					src="https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/public/openversum-images/general/social_financial_environmental.png"
					alt="social financial environmental"
				/>
			</div>

			<h1 class="font-bold text-4xl md:text-5xl  mb-4 mt-4 sm:mb-8">{$t('home.teamTitle')}</h1>

			<div class="grid grid-cols-5 gap-2 sm:px-8 md:px-20">
				<img class="h-20 w-20 mx-auto" src="./ourteam/olivier.png" alt="Olivier Groeningen" />
				<p class="col-span-4 my-auto">
					<span class="font-semibold">Olivier Gröninger</span>, {$t('home.oliP')}
				</p>
				<p class="col-span-4 my-auto text-right">
					<span class="font-semibold">Laura Stocco</span>, {$t('home.lauraP')}
				</p>

				<img class="h-20 w-20 mx-auto" src="./ourteam/laura.png" alt="Laura Stocco" />
				<img class="h-20 w-20 mx-auto" src="./ourteam/lorenzo.png" alt="Lorenzo donadio" />
				<p class="col-span-4 my-auto">
					<span class="font-semibold">Lorenzo Donadio</span>, {$t('home.zozoP')}
				</p>

				<p class="col-span-4 my-auto text-right">
					<span class="font-semibold">Julián Salazar</span>, {$t('home.julianP')}
				</p>
				<img class="h-20 w-20 mx-auto" src="./ourteam/julian.png" alt="Julian Salazar" />
			</div>
		</div>
	</div>
	<div class="w-full h-48 opacity-70">
		<TopWaves2 />
	</div>

	<div class="container mx-auto px-2 sm:px-6 lg:px-16">
		<h1 class="font-bold text-4xl md:text-5xl  mb-4 mt-4 sm:mb-8">{$t('home.partnersT')}</h1>

		<div class="flex justify-evenly">
			<img class="max-h-24" src="/partner_logos/cruz_roja_sucre.png" alt="cruz roja sucre" />
			<img class="max-h-24 p-2" src="partner_logos/ETH-logo.jpg" alt="ETH partner" />

			<img class="max-h-24" src="/partner_logos/rios.png" alt="fundacion rios" />
		</div>

		<h1 class="font-bold text-4xl md:text-5xl  mb-4 mt-4 sm:mb-8">{$t('home.awardsT')}</h1>
		<div class="w-full grid grid-cols-2 md:grid-cols-4 gap-2 px-8 items-center">
			<div class="">
				<img
					class="max-h-[100px] mx-auto"
					src="partner_logos/swiss_conf.png"
					alt="swiss confederation partner"
				/>
				<p class="text-center pt-2">Together we’re better award & DEZA humanitarian innovation</p>
			</div>

			<div class="">
				<img class="max-h-[100px] mx-auto" src="partner_logos/sdg_eth.png" alt="ETH partner" />
				<p class="text-center pt-2">SDG pitch: most impact award</p>
			</div>
			<div class="">
				<img
					class="max-h-[100px] mx-auto"
					src="partner_logos/kick_fund.png"
					alt="kick foundation partner"
				/>
				<p class="text-center pt-2">Talentkick accelerator</p>
			</div>
			<div class="">
				<img
					class="max-h-[100px] mx-auto"
					src="partner_logos/hult_un.png"
					alt="Hult program partner"
				/>
				<p class="text-center pt-2">Global Accelerator in Boston</p>
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
