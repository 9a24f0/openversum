<script lang="ts">
	import { loading, locale } from '$lib/translations';

	import TranslateSvg from '../SVG/TranslateSVG.svelte';
	import lang from '$lib/translations/lang.json';
	const possibleLocales = Object.keys(lang);
	const handleLangChange = (lang: string) => {
		locale.set(lang);
	};
</script>

<div class="h-full my-auto text-emerald-700 mr-1">
	<TranslateSvg />
</div>
<select
	value={locale.get()}
	id="lang"
	name="lang"
	class="w-14 py-1 px-1.5 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
>
	{#each possibleLocales as opt}
		<option on:click={() => handleLangChange(opt)} class="font-sans" value={opt}>{opt}</option>
	{/each}
</select>
