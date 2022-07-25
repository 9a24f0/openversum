<script lang="ts">
	export let label = '';
	export let placeholder = '';
	export let value: any;
</script>

<div class="col-span-6 sm:col-span-3">
	<label for="last-name" class="block text-sm font-medium text-gray-700">{label}</label>
	<input
		bind:value
		{placeholder}
		type="text"
		name="last-name"
		id="last-name"
		autocomplete="family-name"
		class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-gray-300 rounded-md"
	/>
</div>
