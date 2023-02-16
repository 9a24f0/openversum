<script lang="ts">
	import { t } from '$lib/translations';
	import { contactScreen } from '$lib/stores/generalState';

	$: arr = ['general', 'entrepreneur', 'partner'].filter((item) => item !== $contactScreen);
	$: getScreenName = (contactScreen: String) => {
		switch(contactScreen) {
			case 'general':
				return $t('contact.navG');
			case 'entrepreneur':
				return $t('contact.navE');
			case 'partner':
				return $t('contact.navP');
		}
	}
</script>

<nav class="not-italic flex flex-col items-start">
	<button
		class="cursor-pointer text-5xl text-blue"
		on:click={() => contactScreen.set('general')}>{getScreenName($contactScreen)}</button
	>
	{#each arr as item}
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
