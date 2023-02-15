<script lang="ts">
	import ContactMain from '$lib/components/contact/ContactMain.svelte';
	import ContactDefault from '$lib/components/contact/ContactDefault.svelte';
	import ContactEntrepreneur from '$lib/components/contact/ContactEntrepreneur.svelte';
	import ContactPartner from '$lib/components/contact/ContactPartner.svelte';
	import ContactNavigation from '$lib/components/contact/ContractNavigation.svelte';

	let currentForm = 'Contact';
	let cssBtn = 'contact';
</script>

<div class="">
	{#if currentForm === 'Contact'}
		<div class="h-[calc(100vh-13rem)] bg-blue-500 w-full flex justify-center items-center">
			<ContactMain bind:currentFormChild={currentForm} />
		</div>
	{:else if currentForm === 'General'}
		<div class="flex items-center h-[calc(100vh-13rem)] justify-evenly py-24 ">
			<div class="pl-32 flex-1">
				<ContactNavigation bind:currentFormChild={currentForm} />
			</div>
			<div class="pr-28 w-3/5 pl-16 ">
				<ContactDefault {cssBtn} />
			</div>
		</div>
	{:else if currentForm === 'Entrepreneur'}
		<div class="flex items-center h-[calc(100vh-13rem)] justify-evenly  py-24">
			<div class="pl-32 flex-1">
				<ContactNavigation bind:currentFormChild={currentForm} />
			</div>
			<div class="pr-28 w-3/5 pl-16  ">
				<ContactEntrepreneur {cssBtn} />
			</div>
		</div>
	{:else if currentForm === 'Partner'}
		<div class="flex items-center h-[calc(100vh-13rem)] justify-evenly py-24">
			<div class="pl-32 flex-1">
				<ContactNavigation bind:currentFormChild={currentForm} />
			</div>
			<div class="pr-28 w-3/5 pl-16  ">
				<ContactPartner {cssBtn} />
			</div>
		</div>
	{/if}
</div>
