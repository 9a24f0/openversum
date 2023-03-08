<script lang="ts">
	import PrimaryButton from '$lib/components/UI/PrimaryButton.svelte';
	import Paragraph from '$lib/components/UI/Paragraph.svelte';
	import Video from '$lib/components/UI/EmbeddedVideo.svelte';
	import WatchButton from '$lib/components/UI/WatchButton.svelte';
	import WaveIconSvg from '$lib/components/SVG/WaveIconSVG.svelte';
	import EntrepreneurImage1 from '$lib/images/Emprendedor1.png?w=400&h=400&webp';
	import EntrepreneurImage2 from '$lib/images/Emprendedor2.png?w=400&h=285&webp';

	import { goto } from '$app/navigation';
	import { t } from '$lib/translations';
	import { contactScreen } from '$lib/stores/generalState';

	let showVideoModal = false;

	const navigateToContactEntrepreneur = () => {
		contactScreen.set('entrepreneur');
		goto('/contact');
	};
</script>

<svelte:head>
	<title
		>Openversum - Entrepreneurs - providing clean and safe drinking water where most needed</title
	>
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
	class="min-h-[calc(100vh-9.5rem)] md:min-h-[calc(100vh-10rem)] bg-darkblue grid grid-cols-4 md:grid-cols-10 p-8 sm:p-12 lg:py-24 px-3 sm:px-10 md:px-20 lg:px-28 xl:px-40"
>
	<div class="col-span-4 h-64 w-64  sm:h-80 sm:w-80 md:h-[400px] md:w-[400px] place-self-center">
		<img
			src={EntrepreneurImage1}
			alt="EntrepreneursCoverImage"
			class="w-full h-full rounded-t-full rounded-l-full object-cover"
		/>
	</div>
	<div class="md:col-start-7 col-span-4 text-white flex flex-col">
		<Paragraph
			title={$t('entrepreneurs.title')}
			titleFontSize={'lg'}
			paragraph={$t('entrepreneurs.workTogetherP')}
		>
			<WatchButton
				on:click={() => {
					showVideoModal = true;
				}}
			/>
		</Paragraph>
		<span class="place-self-end">
			<WaveIconSvg />
		</span>
	</div>
	<div class="col-span-4 md:w-4/5 text-white py-8 md:py-12 lg:py-20">
		<Paragraph
			title={$t('entrepreneurs.profileTitle')}
			titleFontSize={'sm'}
			paragraph={$t('entrepreneurs.profileP')}
		/>
	</div>
	<div class="md:col-start-6 col-span-4 text-white flex flex-col py-8 md:py-12 lg:py-20">
		<Paragraph
			title={$t('entrepreneurs.franchiseeTitle')}
			titleFontSize={'sm'}
			paragraph={$t('entrepreneurs.franchiseeP')}
		>
			<PrimaryButton on:click={navigateToContactEntrepreneur}>{$t('common.contact')}</PrimaryButton>
		</Paragraph>
	</div>
	<div class="col-span-4 w-full md:w-4/5 place-self-center text-white py-8 pr-4">
		<img
			src={EntrepreneurImage2}
			alt="EntrepreneursImage"
			class="rounded-2xl aspect-video bg-blue-500"
		/>
	</div>
	<div
		class="col-span-4 md:col-start-6  text-blue-500 flex flex-col place-self-end py-8 text-xl md:text-2xl w-full"
	>
		Forma parte <br /> de la familia Openversum <br /> con +20 emprendedores
	</div>
</div>

{#if showVideoModal}
	<Video on:closeModal={() => (showVideoModal = false)} />
{/if}
