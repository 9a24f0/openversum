<script lang="ts">
	export let label = '';
	export let colSpan: number | string = 3;
	export let options: string[];
	export let value: any = options[0];
	export let emptyText = 'Select your option';
</script>

<div class="field col-span-6 relative" style="--colSpan: {colSpan}">
	<label for="label" class="block text-base font-medium text-gray-700">{label}</label>
	<select
		bind:value
		id="country"
		name="country"
		autocomplete="country-name"
		class="block min-w-[110px] w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
	>
		<option value="" disabled selected>{emptyText}</option>
		{#each options as opt}
			<option value={opt}>{opt}</option>
		{/each}
	</select>
</div>

<style lang="postcss">
	@media (min-width: 640px) {
		.field {
			grid-column: span var(--colSpan) / span var(--colSpan);
		}
	}
</style>
