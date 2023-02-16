<script lang="ts">
	import ContactMain from '$lib/components/contact/ContactMain.svelte';
	import ContactDefault from '$lib/components/contact/ContactDefault.svelte';
	import ContactEntrepreneur from '$lib/components/contact/ContactEntrepreneur.svelte';
	import ContactPartner from '$lib/components/contact/ContactPartner.svelte';
	import ContactNavigation from '$lib/components/contact/ContractNavigation.svelte';

	import { contactScreen } from '$lib/stores/generalState';
</script>

{#if $contactScreen === ''}
	<div class="h-[calc(100vh-12.5rem)] md:h-[calc(100vh-9rem)] bg-blue-500 w-full flex justify-center items-center">
		<ContactMain bind:currentFormChild={$contactScreen} />
	</div>
{:else }
	<div class="flex">
		<ContactNavigation/>
		{#if $contactScreen === 'general'}
			<ContactDefault/>
		{/if}
		{#if $contactScreen === 'entrepreneur'}
			<ContactEntrepreneur/>
		{/if}
		{#if $contactScreen === 'partner'}
			<ContactPartner/>
		{/if}
	</div>
{/if}

<style>
</style>
