<script lang="ts">
	import ContactGeneral from '$lib/components/contact/ContactGeneral.svelte';
	import ContactPartner from '$lib/components/contact/ContactPartner.svelte';
	import ContactNavBar from '$lib/components/contact/ContactNavBar.svelte';
	import ContactEntrepreneur from '$lib/components/contact/ContactEntrepreneur.svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	let currentForm: string;
</script>

<div class="max-w-lg gap-2 bg-white p-4 rounded-2xl text-left">
	<div class="w-full mb-2 flex justify-center">
		<h1 class="text-xl font-semibold ">Contact Openversum</h1>
	</div>
	<div class="mb-4 block">
		<ContactNavBar bind:currentForm />
	</div>
	{#if currentForm === 'general'}
		<ContactGeneral on:submitedContact={() => dispatch('submitedContact')} />
	{:else if currentForm === 'entrepreneur'}
		<ContactEntrepreneur />
	{:else if currentForm === 'partner'}
		<ContactPartner />
	{/if}
</div>
