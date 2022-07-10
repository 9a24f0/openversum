<script lang="ts">
	export let label = 'Total Price';
	export let value: any;
	export let placeholder = '0.00';
</script>

<label for="price" class="block text-sm font-medium text-gray-700">{label}</label>
<div class="mt-1 relative rounded-md shadow-sm">
	<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
		<span class="text-gray-500 sm:text-sm"> $ </span>
	</div>
	<input
		bind:value
		type="number"
		{placeholder}
		min="0"
		step="0.1"
		name="price"
		id="price"
		class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-[78px] sm:text-sm border-gray-300 rounded-md"
	/>
	<div class="absolute inset-y-0 right-0 flex items-center">
		<label for="currency" class="sr-only">Currency</label>
		<select
			id="currency"
			name="currency"
			class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
		>
			<option>USD</option>
			<option>COP</option>
		</select>
	</div>
</div>
