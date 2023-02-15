<script lang="ts">
	export let buttonSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let disabled = false;
</script>

<div class="my-auto">
	<button
		{disabled}
		on:click
		type="button"
		class="w-40 px-9 py-3 bg-green-500 rounded-3xl text-sm font-semibold text-white cursor-pointer hover:opacity-80"
		><slot /></button
	>
</div>
