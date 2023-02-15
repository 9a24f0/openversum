<script lang="ts">
	import { t } from '$lib/translations';
	export let currentFormChild: string;
	let arr = [$t('contact.navG'), $t('contact.navE'), $t('contact.navP')];

	$: arr = arr.filter((item) => item !== currentFormChild);
	console.log(arr);
	function changeStateContact(state: string) {
		currentFormChild = state;
	}
</script>

<nav class="not-italic font-medium text-sm flex flex-col items-start">
	<button
		class="cursor-pointer text-5xl text-blue"
		on:click={() => changeStateContact(currentFormChild)}>{currentFormChild}</button
	>
	{#each arr as item}
		<button class="cursor-pointer my-1.5 block" on:click={() => changeStateContact(item)}>
			{item}
		</button>
	{/each}
</nav>

<style>
</style>
