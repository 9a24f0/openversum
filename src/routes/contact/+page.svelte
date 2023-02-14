<script>
	import ContactMain from '$lib/components/contact/ContactMain.svelte';
	import ContactDefault from '$lib/components/contact/ContactDefault.svelte';
	import ContactEntrepreneur from '$lib/components/contact/ContactEntrepreneur.svelte';
	import ContactPartner from '$lib/components/contact/ContactPartner.svelte';

	let currentForm = 'Contact';
</script>

<div class="contact_container bg-blue-500 w-full flex justify-center items-center">
	{#if currentForm === 'Contact'}
		<ContactMain bind:currentForm1={currentForm} />
	{:else}
		<div class=" w-1/2 pl-32 ">
			<div class="w-176 ">
				<ContactMain bind:currentForm1={currentForm} />
			</div>
		</div>
		<div class=" w-1/2 pr-52 ">
			{#if currentForm === 'General'}
				<ContactDefault />
			{:else if currentForm === 'Emprendedor'}
				<ContactEntrepreneur />
			{:else if currentForm === 'Socio'}
				<ContactPartner />
			{/if}
		</div>
	{/if}
	<!-- {#if currentForm === 'Contact'}
		<ContactMain bind:currentForm1={currentForm} />
	{:else if currentForm === 'General'}
		<ContactDefault />
	{:else if currentForm === 'Emprendedor'}
		<ContactEntrepreneur />
	{:else if currentForm === 'Socio'}
		<ContactPartner />
	{/if} -->
</div>

<style>
	.contact_container {
		height: calc(100vh - 8rem - 80px);
	}
</style>
