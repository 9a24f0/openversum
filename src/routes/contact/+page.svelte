<script>
	import ContactDefault from '$lib/components/contact/ContactDefault.svelte';
	import ContactEntrepreneur from '$lib/components/contact/ContactEntrepreneur.svelte';
	import ContactPartner from '$lib/components/contact/ContactPartner.svelte';

	let currentForm = 'general';
	function handleChange(x) {
		currentForm = x;
	}
</script>

<div class="contact_container bg-blue-500 w-full flex justify-center items-center">
	<ul class="font-medium not-italic semi-bold flex flex-col gap-6">
		<li class="contact_container-item self-center" on:click={handleChange('general')}>Genenral</li>
		<li class="contact_container-item self-center">Emprendedor</li>
		<li class="contact_container-item self-center">Socio</li>
	</ul>
</div>
{#if currentForm === 'general'}
	<ContactDefault />
{:else if currentForm === 'entrepreneur'}
	<ContactEntrepreneur />
{:else if currentForm === 'partner'}
	<ContactPartner />
{/if}

<style>
	.contact_container {
		height: calc(100vh - 8rem - 80px);
	}
	.contact_container-item {
		color: theme('colors.white.DEFAULT');
		font-size: theme('fontSize.45');
		font-family: theme('fontFamily.poppins');
	}
</style>
