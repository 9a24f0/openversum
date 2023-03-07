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

<div
	class="min-h-[calc(100vh-9.5rem)] md:min-h-[calc(100vh-10rem)] bg-darkblue grid grid-cols-2 md:grid-cols-5 p-8 sm:p-12 lg:p-24"
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

<Video {showVideoModal} />
