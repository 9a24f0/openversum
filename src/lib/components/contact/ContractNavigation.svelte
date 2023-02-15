<script lang="ts">
	import { t } from '$lib/translations';
	export let currentFormChild: string;
	$: arr = [$t('contact.navG'), $t('contact.navE'), $t('contact.navP')];

	$: arr = arr.filter((item) => item !== currentFormChild);
	function changeStateContact(state: string) {
		currentFormChild = state;
	}
</script>

<nav class="not-italic flex flex-col items-start">
	<button
		class="cursor-pointer text-5xl text-blue"
		on:click={() => changeStateContact(currentFormChild)}>{currentFormChild}</button
	>
	{#each arr as item}
		<button
			class="cursor-pointer my-1.5 block font-normal text-sm text-darkblue"
			on:click={() => changeStateContact(item)}
		>
			{item}
		</button>
	{/each}
</nav>

<style>
</style>
