<script>
	import ContactMain from '$lib/components/contact/ContactMain.svelte';
	import ContactDefault from '$lib/components/contact/ContactDefault.svelte';
	import ContactEntrepreneur from '$lib/components/contact/ContactEntrepreneur.svelte';
	import ContactPartner from '$lib/components/contact/ContactPartner.svelte';
	import ContactNavigation from '$lib/components/contact/NavbarContact.svelte';

	let currentForm = 'Contact';
</script>

<div>
	{#if currentForm === 'Contact'}
		<div class="h-[calc(100vh-13rem)] bg-blue-500 w-full flex justify-center items-center">
			<ContactMain bind:currentFormChild={currentForm} />
		</div>
	{:else if currentForm === 'General'}
		<div class="flex items-center h-[calc(100vh-13rem)] justify-evenly py-24 ">
			<div class="pl-32 flex-1">
				<ContactNavigation bind:currentFormChild={currentForm} />
			</div>
			<div class="pr-28 w-3/5 ">
				<ContactDefault />
			</div>
		</div>
	{:else if currentForm === 'Entrepreneur'}
		<div class="flex items-center h-[calc(100vh-13rem)] justify-evenly  py-24">
			<div class="pl-32 flex-1">
				<ContactNavigation bind:currentFormChild={currentForm} />
			</div>
			<div class="pr-28 w-3/5 ">
				<ContactEntrepreneur />
			</div>
		</div>
	{:else if currentForm === 'Partner'}
		<div class="flex items-center h-[calc(100vh-13rem)] justify-evenly py-24">
			<div class="pl-32 flex-1">
				<ContactNavigation bind:currentFormChild={currentForm} />
			</div>
			<div class="pr-28 w-3/5 ">
				<ContactPartner />
			</div>
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
