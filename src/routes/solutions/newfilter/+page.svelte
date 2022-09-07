<script lang="ts">
	import Combox from '$lib/components/UI/Combox.svelte';
	import InputCurrency from '$lib/components/UI/InputCurrency.svelte';
	import InputNumber from '$lib/components/UI/InputNumber.svelte';
	import NewCustomerForm from '$lib/components/UI/NewCustomerForm.svelte';
	import PrimaryButton from '$lib/components/UI/PrimaryButton.svelte';
	import { customer } from '$lib/stores/customerStore';
	import { supabase } from '$lib/supabase';
	import { user } from '$lib/stores/sessionStore';
	import type { definitions } from '$lib/types/supabase';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	let itemSold: '' | 'filter' | 'cartdrige' = '';
	let showNewCustomer = false;
	let selectedCustomer: false | definitions['customer'] = false;
	let totalPrice: number;
	let totalAmount: number;

	let comboxW: number;
	let latitude: number;
	let longitude: number;

	$: purchaseEnabled = itemSold && totalAmount > 0 && totalPrice > 0 && selectedCustomer;

	const handleNewCustomer = (detail: any) => {
		selectedCustomer = detail;
		showNewCustomer = false;
	};
	const handleSelectCustomer = (detail: string) => {
		const customerId = detail.split(' - ')[0];
		selectedCustomer = $customer.filter((x) => x.id === parseInt(customerId))[0];
		showNewCustomer = false;
	};

	const addPurchase = async () => {
		if (!selectedCustomer) return;

		let payload = {
			sold_by: $user?.id,
			sold_to: selectedCustomer?.id,
			amount: totalAmount,
			total_price: totalPrice,
			latitude: latitude,
			longitude: longitude,
			sold_item: itemSold
		};

		const { data, error } = await supabase
			.from<definitions['filter_sales']>('filter_sales')
			.insert(payload);

		if (error) {
			throw new Error(error.message);
		} else {
			alert('Recorded purchase');
			goto('/');
		}
	};

	const geoOptions = {
		enableHighAccuracy: false,
		timeout: 5000,
		maximumAge: 0
	};

	const geoSucess = (pos: GeolocationPosition) => {
		const crd = pos.coords;
		latitude = crd.latitude;
		longitude = crd.longitude;
	};

	const geoError = (err: GeolocationPositionError) => {
		console.warn(`ERROR(${err.code}): ${err.message}`);
	};
	onMount(async () => {
		navigator.geolocation.getCurrentPosition(geoSucess, geoError, geoOptions);
	});
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<section class="space-y-3">
	<h1 class="text-lg font-semibold">Select the sold item:</h1>
	<div class="grid grid-cols-7 w-full gap-x-8 gap-y-2">
		<button
			on:click={() => (itemSold = 'filter')}
			class:bg-grad-card={itemSold === 'filter'}
			class="col-span-3 bg-white shadow overflow-hidden rounded-md px-2 py-4 hover:shadow-lg "
		>
			<!-- Your content -->
			Filter
		</button>
		<span class="text-center my-auto">Or</span>
		<button
			on:click={() => (itemSold = 'cartdrige')}
			class:bg-grad-card={itemSold === 'cartdrige'}
			class="col-span-3 bg-white shadow overflow-hidden rounded-md px-2 py-4 hover:shadow-lg "
		>
			<!-- Your content -->
			Cartdrige
		</button>

		<div class="col-span-3">
			<InputNumber bind:value={totalAmount} label="Amount" />
		</div>
		<div class="col-span-1" />
		<div class="col-span-3">
			<InputCurrency
				placeholder="20 - Suggested Price"
				bind:value={totalPrice}
				label="Total Price"
			/>
		</div>
	</div>

	<h1 class="text-lg font-semibold">Select the client:</h1>

	{#if selectedCustomer}
		<div class="bg-white p-6 rounded-lg shadow-lg">
			<h2 class="text-2xl font-bold mb-2 text-gray-800">Customer:</h2>
			<div class="grid col-span-1 sm:grid-cols-2 gap-4">
				<p class="text-gray-700">Name: {selectedCustomer.name}</p>
				<p class="text-gray-700">Adress: {selectedCustomer.adress}</p>
				<p class="text-gray-700">City: {selectedCustomer.city}</p>
				<p class="text-gray-700">Organization: {selectedCustomer.organization}</p>
			</div>
		</div>

		<PrimaryButton disabled={!purchaseEnabled} on:click={addPurchase}
			>Confirm Purchase</PrimaryButton
		>
	{:else}
		<div class="grid grid-cols-7 w-full gap-x-8 gap-y-2">
			<div bind:clientWidth={comboxW} class="relative col-span-3 overflow-hidden rounded-md pt-1 ">
				<Combox
					w={comboxW}
					input={$customer.map((x) => `${x.id} - ${x.name} - ${x.organization}`)}
					inputValue=""
					placeholder="Select a Customer"
					on:selectedItem={(e) => handleSelectCustomer(e.detail)}
				/>
			</div>
			<span class="text-center my-auto">Or</span>
			<button
				on:click={() => (showNewCustomer = !showNewCustomer)}
				class="col-span-3 bg-white shadow overflow-hidden rounded-md px-2 py-4"
			>
				<!-- Your content -->
				{#if showNewCustomer}
					Cancel
				{:else}
					+ Add new client
				{/if}
			</button>
		</div>

		{#if showNewCustomer}
			<div class="bg-white shadow overflow-hidden rounded-md px-2 py-4">
				<NewCustomerForm on:newCustomer={(e) => handleNewCustomer(e.detail)} />
			</div>
		{/if}
	{/if}

	<!-- More items... -->
</section>

<style lang="postcss">
	.bg-grad-card {
		@apply bg-gradient-to-r from-blue-200 via-white to-emerald-200;
	}
</style>
