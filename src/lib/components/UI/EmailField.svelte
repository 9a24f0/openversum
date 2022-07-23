<script lang="ts">
	export let label = '';
	export let placeholder = '';
	export let value: any;
	let inputEmail: HTMLInputElement;
</script>

<div class="relative col-span-6 sm:col-span-3">
	<label for="email" class="block text-sm font-medium text-gray-700">{label}</label>
	<input
		bind:this={inputEmail}
		on:change={() => console.log(inputEmail.checkValidity())}
		required
		bind:value
		{placeholder}
		type="email"
		name="email"
		id="email"
		class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
	/>
	<p>please a valid email</p>
	<p>please a valid email</p>
</div>
