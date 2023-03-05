<script lang="ts">
	import PrimaryButton from '$lib/components/UI/PrimaryButton.svelte';
	import Paragraph from '$lib/components/UI/Paragraph.svelte';
	import Video from '$lib/components/UI/EmbeddedVideo.svelte';
	import WatchButton from '$lib/components/WatchButton.svelte';

	import { goto } from '$app/navigation';
	import { t } from '$lib/translations';
	import { contactScreen } from '$lib/stores/generalState';

	let showVideoModal = false;

	const navigateToContactPartner = () => {
		contactScreen.set('partner');
		goto('/contact');
	}
</script>

<div class="min-h-[calc(100vh-9.5rem)] md:min-h-[calc(100vh-10rem)] bg-darkblue grid grid-cols-2 md:grid-cols-5 p-8 sm:p-12 lg:p-24">
	<div class="col-span-2 w-4/5 place-self-center">
		<img src="" alt="PartnersCoverImage" class="rounded-t-full rounded-l-full aspect-square bg-blue-500">
	</div>
	<div></div>
	<div class="col-span-2 text-white flex flex-col">
		<Paragraph title={$t('partners.title')} titleFontSize={'lg'} paragraph={$t('partners.paragraph')}>
			<WatchButton on:click={() => {showVideoModal = true}}/>
		</Paragraph>
		<PrimaryButton buttonSize={'lg'} on:click={navigateToContactPartner}>{$t('common.contact')}</PrimaryButton>
	</div>
</div>

<Video showVideoModal={showVideoModal}></Video>
