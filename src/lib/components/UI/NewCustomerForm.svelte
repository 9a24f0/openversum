<script lang="ts">
	import { addCustomer } from '$lib/stores/customerStore';
	import type { definitions } from '$lib/types/supabase';
	import InputField from './InputField.svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	import PrimaryButton from './PrimaryButton.svelte';

	const dispatch = createEventDispatcher();

	let newCustomer: Omit<definitions['customer'], 'id'> = {
		name: '',
		adress: '',
		city: '',
		organization: '',
		latitude: undefined,
		longitude: undefined
	};

	$: disabled =
		!newCustomer.name || !newCustomer.adress || !newCustomer.city || !newCustomer.organization;

	const handleAddCustomer = async () => {
		const data = await addCustomer(newCustomer);
		dispatch('newCustomer', data);
	};

	const geoOptions = {
		enableHighAccuracy: false,
		timeout: 5000,
		maximumAge: 0
	};

	const geoSucess = (pos: GeolocationPosition) => {
		const crd = pos.coords;
		newCustomer.latitude = crd.latitude;
		newCustomer.longitude = crd.longitude;
	};

	const geoError = (err: GeolocationPositionError) => {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	};
	onMount(async () => {
		navigator.geolocation.getCurrentPosition(geoSucess, geoError, geoOptions);
	});
</script>

<form on:submit|preventDefault>
	<div class="grid grid-cols-6 gap-4 mb-4">
		<InputField placeholder="Name" label="Customer Name" bind:value={newCustomer.name} />
		<InputField placeholder="Adress" label="Adress" bind:value={newCustomer.adress} />
		<InputField placeholder="City" label="City" bind:value={newCustomer.city} />
		<InputField
			placeholder="Organization"
			label="Organization"
			bind:value={newCustomer.organization}
		/>
	</div>
	<PrimaryButton {disabled} on:click={handleAddCustomer}>Add Customer</PrimaryButton>
</form>
