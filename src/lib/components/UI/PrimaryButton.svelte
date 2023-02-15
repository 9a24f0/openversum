<script lang="ts">
	export let buttonSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let disabled = false;
	export let cssBtn: string;
</script>

<div class="my-auto">
	<button
		{disabled}
		on:click
		type="button"
		class:opacity-60={disabled}
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
		} inline-flex items-center border border-transparent rounded-md shadow-sm text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500
		${
			cssBtn == 'contact'
				? 'cursor-pointer rounded-3xl bg-green-500 text-sm font-semibold  px-9 py-3.5 w-40 flex justify-center box-border'
				: ' '
		}
		`}><slot /></button
	>
</div>
