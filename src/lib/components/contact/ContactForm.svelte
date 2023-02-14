<script lang="ts">
	import ContactPartner from '$lib/components/contact/ContactPartner.svelte';
	import ContactEntrepreneur from '$lib/components/contact/ContactEntrepreneur.svelte';
	import { createEventDispatcher } from 'svelte';
	import NavbarContact from './ContractNavigation.svelte';
	import ContactDefault from './ContactDefault.svelte';
	import { t } from '$lib/translations';

	const dispatch = createEventDispatcher();
	export let currentForm: string;
</script>

<div class="max-w-lg gap-2 bg-white p-4 rounded-2xl text-left">
	<div class="w-full mb-2 flex justify-center">
		<h1 class="text-xl font-semibold ">{$t('contact.title')}</h1>
	</div>
	<div class="mb-4 block">
		<NavbarContact bind:currentForm />
	</div>
	{#if currentForm === 'general'}
		<ContactDefault on:submitedContact={() => dispatch('submitedContact')} />
	{:else if currentForm === 'entrepreneur'}
		<ContactEntrepreneur on:submitedContact={() => dispatch('submitedContact')} />
	{:else if currentForm === 'partner'}
		<ContactPartner on:submitedContact={() => dispatch('submitedContact')} />
	{/if}
</div>
