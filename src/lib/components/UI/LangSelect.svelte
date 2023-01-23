<script lang="ts">
	import { loading, locale } from '$lib/translations';

	import TranslateSvg from '../SVG/TranslateSVG.svelte';
	import lang from '$lib/translations/lang.json';
	import { isHoverHeader } from '$lib/stores/generalState';
	let value = locale.get();
	const possibleLocales = Object.keys(lang);
</script>

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
<!-- 
<div class="h-full my-auto text-emerald-700 mr-1">
	<TranslateSvg />
</div>

<select
	bind:value
	on:change={(e) => locale.set(value)}
	id="lang"
	name="lang"
	class="w-14 py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
>
	{#each possibleLocales as opt}
		<option class="font-sans" value={opt}>{opt}</option>
	{/each}
</select> -->
