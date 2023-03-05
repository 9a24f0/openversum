<script lang="ts">
	import PrimaryButton from '$lib/components/UI/PrimaryButton.svelte';
	import Paragraph from '$lib/components/UI/Paragraph.svelte';
	import Video from '$lib/components/UI/EmbeddedVideo.svelte';
	import WatchButton from '$lib/components/WatchButton.svelte';
	import WaveIconSvg from '$lib/components/SVG/WaveIconSVG.svelte';

	import { goto } from '$app/navigation';
	import { t } from '$lib/translations';
	import { contactScreen } from '$lib/stores/generalState';

	let showVideoModal = false;

	const navigateToContactEntrepreneur = () => {
		contactScreen.set('entrepreneur');
		goto('/contact');
	}
</script>

<div class="min-h-[calc(100vh-9.5rem)] md:min-h-[calc(100vh-10rem)] bg-darkblue grid grid-cols-4 md:grid-cols-10 p-8 sm:p-12 lg:p-24">
	<div class="col-span-4 w-4/5 place-self-center">
		<img src="" alt="EntrepreneursCoverImage" class="rounded-t-full rounded-l-full aspect-square bg-blue-500">
	</div>
	<div class="md:col-start-7 col-span-4 text-white flex flex-col">
		<Paragraph title={$t('entrepreneurs.title')} titleFontSize={'lg'} paragraph={$t('entrepreneurs.workTogetherP')}>
			<WatchButton on:click={() => {showVideoModal = true}}/>
		</Paragraph>
		<span class="place-self-end">
			<WaveIconSvg/>
		</span>
	</div>
	<div class="col-span-4 md:w-3/5 place-self-center text-white py-8 md:py-12 lg:py-24">
		<Paragraph title={$t('entrepreneurs.profileTitle')} titleFontSize={'sm'} paragraph={$t('entrepreneurs.profileP')}/>
	</div>
	<div class="md:col-start-6 col-span-4 text-white flex flex-col py-8 md:py-12 lg:py-24">
		<Paragraph title={$t('entrepreneurs.franchiseeTitle')} titleFontSize={'sm'} paragraph={$t('entrepreneurs.franchiseeP')}>
			<PrimaryButton on:click={navigateToContactEntrepreneur}>{$t('common.contact')}</PrimaryButton>
		</Paragraph>
	</div>
	<div class="col-span-4 md:w-3/5 place-self-center text-white">
		<img src="" alt="EntrepreneursImage" class="rounded-2xl aspect-video bg-blue-500">
	</div>
	<div class="md:col-start-6 col-span-2 text-blue-500 flex flex-col place-self-end text-2xl w-full">
		Forma parte <br/> de la familia Openversum <br/> con +20 emprendedores
	</div>
</div>
<Video showVideoModal={showVideoModal}></Video>