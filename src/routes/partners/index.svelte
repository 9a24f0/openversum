<script lang="ts">
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import SimpleSlotModal from '$lib/components/SimpleSlotModal.svelte';
	import Elipse3Svg from '$lib/components/SVG/Elipse3SVG.svelte';
	import PrimaryButton from '$lib/components/UI/PrimaryButton.svelte';
	import WatchButton from '$lib/components/WatchButton.svelte';
	import { t } from '$lib/translations';
	let blobW: any;
	let showVideoModal = false;

	let showContact = false;
</script>

<div class="container mx-auto px-2 sm:px-6 lg:px-16">
	<div class="sm:grid sm:grid-cols-2 gap-8">
		<div class="relative col-span-2 my-8">
			<div bind:clientWidth={blobW} class="mx-auto w-full  sm:w-3/4">
				<Elipse3Svg />

				<h2
					style="width:{blobW}px;"
					class="absolute text-white origin-top-left top-[30%] mx-auto text-center whitespace-nowrap text-4xl md:text-5xl font-semibold "
				>
					{$t('partners.title')}
				</h2>
			</div>
		</div>

		<div class="col-span-2 mb-8 gap-8 sm:inline-flex">
			<div class="sm:w-2/3">
				<h1 class="font-bold text-4xl md:text-5xl mb-8">{$t('partners.subtitle')}</h1>

				<p class="text-justify text-lg">
					{$t('partners.paragraph')}
				</p>

				<PrimaryButton on:click={() => (showContact = true)}>{$t('common.contact')}</PrimaryButton>
			</div>
			<div class="inline-flex w-1/3 my-auto">
				<WatchButton on:click={() => (showVideoModal = !showVideoModal)} />
				<span class="whitespace-nowrap mr-8 ml-2 font-semibold text-lg my-auto"
					>{$t('common.watchVideo')}</span
				>
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
			src="https://www.youtube.com/embed/ONzSx-UL1Bw?start=4"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	</SimpleSlotModal>
{/if}

{#if showContact}
	<div on:click|stopPropagation>
		<SimpleSlotModal on:closeModal={() => (showContact = false)}>
			<ContactForm currentForm="partner" on:submitedContact={() => (showContact = false)} />
		</SimpleSlotModal>
	</div>
{/if}
