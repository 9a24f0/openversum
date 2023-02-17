<script lang="ts">
	import ContactMain from '$lib/components/contact/ContactMain.svelte';
	import ContactDefault from '$lib/components/contact/ContactDefault.svelte';
	import ContactEntrepreneur from '$lib/components/contact/ContactEntrepreneur.svelte';
	import ContactPartner from '$lib/components/contact/ContactPartner.svelte';
	import ContactNavigation from '$lib/components/contact/ContactNavigation.svelte';
	import { t } from '$lib/translations';

	import { contactScreen } from '$lib/stores/generalState';
</script>

{#if $contactScreen === ''}
	<div
		class="h-full md:h-[calc(100vh-9rem)] bg-blue-500 w-full flex justify-center items-center"
	>
		<ContactMain />
	</div>
{:else}
	<div class="h-[calc(100%-12.5rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center justify-evenly">
		<div class="w-60 md:w-48">
			<ContactNavigation />
		</div>
		<div class="w-60">
			<div class="container md:w-[36rem] md:px-16">
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
		<div class="w-48"></div>
	</div>
{/if}

<style>
</style>
