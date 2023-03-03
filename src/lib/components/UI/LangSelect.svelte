<script lang="ts">
	import { loading, locale } from '$lib/translations';
	import lang from '$lib/translations/lang.json';
	import { isHoverHeader } from '$lib/stores/generalState';
	let value = locale.get();
	const possibleLocales = Object.keys(lang);

	export let color: 'blue' | 'white' | null = null;
</script>

{#if color === null}
	<div
		class="relative flex {$isHoverHeader
			? 'border-white'
			: 'border-blue'} border-2 rounded-3xl my-auto px-1"
	>
		{#each possibleLocales as opt}
			<button
				on:click={() => {
					locale.set(opt);
					value = opt;
				}}
				class="leading-8 h-8 w-10 align-middle z-10 {opt === value
					? $isHoverHeader
						? 'text-blue'
						: 'text-white'
					: $isHoverHeader
					? 'text-white'
					: 'text-blue'} 
				hover:transition-colors hover:ease-in"
			>
				<p class="align-middle -mt-1">
					{opt}
				</p>
			</button>
		{/each}
		<div
			class="h-8 w-12 {$isHoverHeader
				? 'bg-white'
				: 'bg-blue'} absolute inset-0 rounded-3xl {value === 'es'
				? 'translate-x-10'
				: ''} transition-transform ease-in"
		/>
	</div>
{:else}
	<div class="relative flex border-{color} border-2 rounded-3xl my-auto px-1">
		{#each possibleLocales as opt}
			<button
				on:click={() => {
					locale.set(opt);
					value = opt;
				}}
				class="leading-8 h-8 w-10 align-middle z-10 {opt === value
					? 'text-white'
					: `text-${color}`} hover:transition-colors hover:ease-in"
			>
				<p class="align-middle -mt-1">
					{opt}
				</p>
			</button>
		{/each}
		<div
			class="h-8 w-12 bg-{color} absolute inset-0 rounded-3xl {value === 'es'
				? 'translate-x-10'
				: ''} transition-transform ease-in"
		/>
	</div>
{/if}
