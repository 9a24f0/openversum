<script lang="ts">
	export let label = '';
	export let placeholder = '';
	export let value: any;
	export let isRequired: Boolean;
</script>

<div class="col-span-6 sm:col-span-3">
	<label for="last-name" class="block text-sm font-semibold text-darkblue ">
		{label}
		{#if isRequired}
		*
		{/if}
	</label>
	<input
		bind:value
		{placeholder}
		type="text"
		name="last-name"
		id="last-name"
		autocomplete="family-name"
		class="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm border-darkblue rounded-md"
	/>
</div>
