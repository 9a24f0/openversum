<script lang="ts">
	import PrimaryButton from '$lib/components/UI/PrimaryButton.svelte';
	import Paragraph from '$lib/components/UI/Paragraph.svelte';
	import Video from '$lib/components/UI/EmbeddedVideo.svelte';
	import WatchButton from '$lib/components/UI/WatchButton.svelte';
	import Image from '$lib/images/PartnerCruzRoja2.jpg?w=400&h=400&webp';

	import { goto } from '$app/navigation';
	import { t } from '$lib/translations';
	import { contactScreen } from '$lib/stores/generalState';

	let showVideoModal = false;

	const navigateToContactPartner = () => {
		contactScreen.set('partner');
		goto('/contact');
	};
</script>

<svelte:head>
	<title>Openversum - Partners - providing clean and safe drinking water where most needed</title>
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
	class="min-h-[calc(100vh-9.5rem)] md:min-h-[calc(100vh-10rem)] bg-darkblue grid grid-cols-2 md:grid-cols-5 p-8 sm:p-12 lg:py-20 px-3 sm:px-10 md:px-20 lg:px-28 xl:px-40"
>
	<div class="col-span-2 h-64 w-64  sm:h-80 sm:w-80 md:h-[400px] md:w-[400px] place-self-center">
		<img
			src={Image}
			alt="PartnersCoverImage"
			class="w-full h-full rounded-t-full rounded-l-full object-cover"
		/>
	</div>
	<div class="col-span-2 text-white flex flex-col">
		<Paragraph
			title={$t('partners.title')}
			titleFontSize={'lg'}
			paragraph={$t('partners.paragraph')}
		>
			<WatchButton
				on:click={() => {
					showVideoModal = true;
				}}
			/>
		</Paragraph>
		<PrimaryButton buttonSize={'lg'} on:click={navigateToContactPartner}
			>{$t('common.contact')}</PrimaryButton
		>
	</div>
</div>
{#if showVideoModal}
	<Video on:closeModal={() => (showVideoModal = false)} />
{/if}
