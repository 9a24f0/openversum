<script>
	import ContactMain from '$lib/components/contact/ContactMain.svelte';
	import ContactDefault from '$lib/components/contact/ContactDefault.svelte';
	import ContactEntrepreneur from '$lib/components/contact/ContactEntrepreneur.svelte';
	import ContactPartner from '$lib/components/contact/ContactPartner.svelte';
	import ContactNavigation from '$lib/components/contact/NavbarContact.svelte';

	let currentForm = 'Contact';
</script>

<div class="contact_container ">
	{#if currentForm === 'Contact'}
		<div class="h-[calc(100vh-13rem)] bg-blue-500 w-full flex justify-center items-center">
			<ContactMain bind:currentFormChild={currentForm} />
		</div>
	{:else if currentForm === 'General'} 
		<div class="flex">
			<ContactNavigation/>
			<ContactDefault/>
		</div>
	{:else if currentForm === 'Entrepreneur'} 
		<div>
			<ContactNavigation/>
			<ContactEntrepreneur/>
		</div>
	{:else if currentForm === 'Partner'} 
		<div>
			<ContactEntrepreneur/>
			<ContactPartner/>
		</div>
	{/if}
	<!-- {:else}
		<div class=" w-1/2 pl-32 ">
			<div class="w-176 ">
				<ContactMain bind:currentFormChild={currentForm} />
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
	{/if} -->
	<!-- {#if currentForm === 'Contact'}
		<ContactMain bind:currentFormChild={currentForm} />
	{:else if currentForm === 'General'}
		<ContactDefault />
	{:else if currentForm === 'Emprendedor'}
		<ContactEntrepreneur />
	{:else if currentForm === 'Socio'}
		<ContactPartner />
	{/if} -->
</div>

<style>
</style>
