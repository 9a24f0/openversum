<script lang="ts">
	import ContactMain from './ContactMain.svelte';
	import ContactDefault from './ContactDefault.svelte';
	import ContactEntrepreneur from './ContactEntrepreneur.svelte';
	import ContactPartner from './ContactPartner.svelte';
	import ContactNavigation from './ContactNavigation.svelte';
	import { contactScreen } from '$lib/stores/generalState';
</script>

<svelte:head>
	<title>Openversum - Contact us - providing clean and safe drinking water where most needed</title>
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

{#if $contactScreen === ''}
	<div
		class="min-h-[calc(100vh-9.5rem)] md:min-h-[calc(100vh-10rem)] bg-blue-500 w-full flex justify-center items-center"
	>
		<ContactMain />
	</div>
{:else}
	<div
		class="min-h-[calc(100vh-9.5rem)] md:min-h-[calc(100vh-10rem)] grid grid-cols-2 md:grid-cols-5 mx-auto px-1 sm:px-8 md:px-10 lg:px-12 xl:px-24"
	>
		<!-- <div
		class="min-h-[calc(100vh-9.5rem)] md:min-h-[calc(100vh-10rem)] flex flex-col md:flex-row items-center justify-evenly"
	> -->
		<div class="col-span-2 flex items-center pb-4 sm:pb-0 px-4 justify-start md:justify-center">
			<ContactNavigation />
		</div>
		<div class="w-full col-span-2 md:col-span-3 flex items-center justify-center  ">
			<div class="w-full max-w-2xl mx-6 sm:mx-4">
				{#if $contactScreen === 'general'}
					<ContactDefault />
				{/if}
				{#if $contactScreen === 'entrepreneur'}
					<ContactEntrepreneur />
				{/if}
				{#if $contactScreen === 'partner'}
					<ContactPartner />
				{/if}
			</div>
		</div>
		<!-- <div class="w-48" /> -->
	</div>
{/if}

<style>
</style>
