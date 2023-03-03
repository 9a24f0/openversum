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
		class="min-h-[calc(100vh-9.5rem)] md:min-h-[calc(100vh-10rem)] bg-blue-500 w-full flex justify-center items-center"
	>
		<ContactMain />
	</div>
{:else}
	<div
		class="min-h-[calc(100vh-9.5rem)] md:min-h-[calc(100vh-10rem)] grid grid-cols-2 md:grid-cols-5 mx-auto"
	>
		<!-- <div
		class="min-h-[calc(100vh-9.5rem)] md:min-h-[calc(100vh-10rem)] flex flex-col md:flex-row items-center justify-evenly"
	> -->
		<div class="col-span-2 flex items-center justify-center">
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
