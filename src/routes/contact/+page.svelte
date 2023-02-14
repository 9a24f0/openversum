<script lang="ts">
	import ContactMain from '$lib/components/contact/ContactMain.svelte';
	import ContactDefault from '$lib/components/contact/ContactDefault.svelte';
	import ContactEntrepreneur from '$lib/components/contact/ContactEntrepreneur.svelte';
	import ContactPartner from '$lib/components/contact/ContactPartner.svelte';
	import ContactNavigation from '$lib/components/contact/ContractNavigation.svelte';

	let currentForm = 'Contact';
</script>

<div class="contact_container ">
	{#if currentForm === 'Contact'}
		<div class="h-[calc(100vh-13rem)] bg-blue-500 w-full flex justify-center items-center">
			<ContactMain bind:currentFormChild={currentForm} />
		</div>
	{:else }
		<div class="flex">
			<ContactNavigation/>
			{#if currentForm === 'general'}
				<ContactDefault/>
			{/if}
			{#if currentForm === 'entrepreneur'}
				<ContactEntrepreneur/>
			{/if}
			{#if currentForm === 'partner'}
				<ContactPartner/>
			{/if}
		</div>
	{/if}
</div>

<style>
</style>
