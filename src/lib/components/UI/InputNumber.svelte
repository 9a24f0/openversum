<script lang="ts">
	export let label = 'Total Price';
	export let value: any;
	export let step = 1;
</script>

<label for="price" class="block text-sm font-medium text-gray-700">{label}sssssssssss</label>
<div class="mt-1 relative rounded-md shadow-sm">
	<input
		bind:value
		type="number"
		min="0"
		{step}
		name="price"
		id="price"
		class="focus:ring-cyan-500 focus:border-cyan-500 block w-full pl-4 sm:text-sm border-gray-300 rounded-md"
		placeholder="0"
	/>
</div>
