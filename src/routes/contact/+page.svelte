<script lang="ts">
	import ContactMain from './ContactMain.svelte';
	import ContactDefault from './ContactDefault.svelte';
	import ContactEntrepreneur from './ContactEntrepreneur.svelte';
	import ContactPartner from './ContactPartner.svelte';
	import ContactNavigation from './ContactNavigation.svelte';
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
		<div class="col-span-2 flex items-center px-4 justify-start md:justify-center">
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
