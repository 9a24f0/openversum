<script lang="ts">
	import ExclamationCircle from '../SVG/ExclamationCircle.svelte';

	export let label = '';
	export let placeholder = '';
	export let value: any;
	export let isValid: boolean = true;
	let inputEmail: HTMLInputElement;
</script>

<div class="relative col-span-6 sm:col-span-3">
	<label for="email" class="block text-sm font-medium text-gray-700">{label}</label>
	<input
		bind:this={inputEmail}
		on:input={() => (isValid = inputEmail.checkValidity())}
		required
		bind:value
		{placeholder}
		type="email"
		name="email"
		id="email"
		class="mt-1 block w-full shadow-sm rounded-md"
		class:not-valid-field={!isValid}
		class:valid-field={isValid}
	/>
	{#if !isValid}
		<div class="absolute top-6 inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
			<ExclamationCircle />
		</div>
	{/if}
</div>

<style lang="postcss">
	.not-valid-field {
		@apply border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500;
	}
	.valid-field {
		@apply focus:ring-indigo-500 focus:border-indigo-500 border-gray-300;
	}
</style>
