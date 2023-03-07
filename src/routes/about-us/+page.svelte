<script lang="ts">
	import Social from '$lib/components/SVG/Social.svelte';
	import Financial from '$lib/components/SVG/Financial.svelte';
	import Environmental from '$lib/components/SVG/Environmental.svelte';
	import { t } from '$lib/translations';
	import ImageCard from '$lib/components/UI/ImageCard.svelte';
	import OliImg from '$lib/images/CEO_Olivier.png?w=416&webp';
	import LauraImg from '$lib/images/CTO_Laura.png?w=416&webp';
	import ZozoImg from '$lib/images/CIO_Lorenzo.png?w=416&webp';
</script>

<svelte:head>
	<title>Openversum - About us - providing clean and safe drinking water where most needed</title>
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

<div
	class="flex flex-wrap justify-between px-8 sm:px-12 lg:px-24 items-center border-gray-100 py-8 md:py-12"
>
	<div class="lg:w-1/2 lg:pr-32">
		<h1 class="font-poppins text-4xl text-darkblue font-medium pb-2 ">
			{$t('aboutus.title')}
		</h1>
		<p class="py-4 text-darkblue">
			{@html $t('aboutus.description')}
		</p>
	</div>
	<div class="flex flex-grow flex-wrap justify-evenly pt-8">
		<div class="flex flex-col place-items-center">
			<span class="flex justify-center w-24 h-24">
				<Environmental />
			</span>
			<h3 class="text-md md:text-2xl pt-8 font-poppins text-blue-500">
				{$t('aboutus.environmentalT')}
			</h3>
		</div>
		<div class="flex flex-col place-items-center">
			<span class="flex justify-center w-24 h-24">
				<Social />
			</span>
			<h3 class="text-md md:text-2xl pt-8 font-poppins text-blue-500">{$t('aboutus.socialT')}</h3>
		</div>
		<div class="flex flex-col place-items-center">
			<span class="flex justify-center w-24 h-24">
				<Financial />
			</span>
			<h3 class="text-md md:text-2xl pt-8 font-poppins text-blue-500">
				{$t('aboutus.financialT')}
			</h3>
		</div>
	</div>
</div>

<div class="w-full flex justify-center pt-8 px-8 text-center">
	<h2 class="font-poppins text-4xl text-blue-500 font-medium">
		{$t('aboutus.teamTitle')}
	</h2>
</div>

<div class="px-8 sm:px-12 lg:px-24 flex flex-wrap justify-center py-4">
	<ImageCard
		name={'Olivier Gröninger'}
		description={$t('aboutus.oliP')}
		title={'CEO'}
		imgSrc={OliImg}
	/>
	<ImageCard
		name={'Laura Stocco'}
		description={$t('aboutus.lauraP')}
		title={'CTO'}
		imgSrc={LauraImg}
	/>
	<ImageCard
		name={'Lorenzo Donadio'}
		description={$t('aboutus.zozoP')}
		title={'CIO'}
		imgSrc={ZozoImg}
	/>
</div>

<div class="w-full flex justify-center pt-16">
	<h3 class="font-poppins text-2xl text-darkblue font-medium">
		{$t('aboutus.partnersT')}
	</h3>
</div>

<div
	class="flex flex-wrap justify-center py-14 gap-4 divide-transparent divide-x-2 md:divide-darkblue"
>
	<div class="flex justify-center w-44 md:w-56">
		<img
			class=" max-h-16 place-self-center"
			src="/partner_logos/tierragrata.jpg"
			alt="Tierra grata"
		/>
	</div>
	<div class="flex justify-center w-44 md:w-56">
		<img
			class=" max-h-16 place-self-center"
			src="/partner_logos/Cruz_roja_sucre.png"
			alt="cruz roja sucre"
		/>
	</div>
	<div class="flex justify-center w-44 md:w-56">
		<img class=" max-h-16 place-self-center " src="partner_logos/ETHz.png" alt="ETH partner" />
	</div>
	<div class="flex justify-center w-44 md:w-56">
		<img class=" max-h-16 place-self-center" src="/partner_logos/Rios.png" alt="fundacion rios" />
	</div>
</div>
