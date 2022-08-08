<script lang="ts">
	import { loading, locale } from '$lib/translations';

	import TranslateSvg from '../SVG/TranslateSVG.svelte';
	import lang from '$lib/translations/lang.json';
	let value = locale.get();
	const possibleLocales = Object.keys(lang);
</script>

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
</select>
