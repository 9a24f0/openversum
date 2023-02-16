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
		class="h-[calc(100vh-12.5rem)] md:h-[calc(100vh-9rem)] bg-blue-500 w-full flex justify-center items-center"
	>
		<ContactMain />
	</div>
{:else}
	<div class="h-[calc(100vh-12.5rem)] md:h-[calc(100vh-9rem)] flex items-center">
		<div class="pl-32 flex-1 pb-28 ">
			<ContactNavigation />
		</div>
		<div class="pr-28 w-3/5 pl-16">
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
{/if}

<style>
</style>
