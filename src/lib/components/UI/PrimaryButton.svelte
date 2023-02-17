<script lang="ts">
	export let buttonSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let disabled = false;
</script>

<div class="my-auto">
	<!-- class:opacity-60={disabled} -->
	<button
		{disabled}
		on:click
		type="button"
		class={`${
			buttonSize === 'xs'
				? 'px-2.5 py-1.5 text-xs font-medium'
				: buttonSize === 'sm'
				? 'px-3 py-2 text-sm leading-4 font-medium'
				: buttonSize === 'md'
				? 'px-4 py-2 text-sm font-medium'
				: buttonSize === 'lg'
				? 'px-4 py-2 text-base font-medium'
				: buttonSize === 'xl'
				? 'px-6 py-3 text-base font-medium'
				: ''
		}w-40 px-9 py-3 bg-green-500 rounded-3xl font-semibold text-white cursor-pointer hover:opacity-80 mt-5`}
		><slot /></button
	>
</div>
