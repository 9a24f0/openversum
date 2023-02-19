<script lang="ts">
	import { t } from '$lib/translations';
	import { contactScreen } from '$lib/stores/generalState';
	import { fly, slide } from 'svelte/transition';

	$: arr = ['general', 'entrepreneur', 'partner'].filter((item) => item !== $contactScreen);
	$: getScreenName = (contactScreen: String) => {
		switch (contactScreen) {
			case 'general':
				return $t('contact.navG');
			case 'entrepreneur':
				return $t('contact.navE');
			case 'partner':
				return $t('contact.navP');
		}
	};
</script>

<nav class="not-italic flex flex-col items-start">
	{#key $contactScreen}
		<button
			in:fly={{ x: -100, delay: 150 }}
			class="cursor-pointer text-5xl text-blue"
			on:click={() => contactScreen.set('general')}>{getScreenName($contactScreen)}</button
		>
	{/key}
	{#each arr as item (item)}
		<button
			class="cursor-pointer my-1.5 block font-normal text-sm text-darkblue"
			on:click={() => contactScreen.set(item)}
		>
			{getScreenName(item)}
		</button>
	{/each}
</nav>

<style>
</style>
