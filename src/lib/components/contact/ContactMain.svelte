<script lang="ts">
	import { t } from '$lib/translations';
	import { contactScreen } from '$lib/stores/generalState';

	export let currentFormChild;
</script>

<nav class="font-medium flex flex-col gap-6 text-[2.8125rem] font-poppins text-white">
	<button
		class="self-center transition ease-in-out duration-300 hover:translate-y-2"
		on:click={() => contactScreen.set('general')}>
		{$t('contact.navG')}
	</button>
	<button
		class="self-center transition ease-in-out duration-300 hover:translate-y-2"
		on:click={() => contactScreen.set('entrepreneur')}
	>
		{$t('contact.navE')}
	</button>
	<button
		class="self-center transition ease-in-out duration-300 hover:translate-y-2"
		on:click={() => contactScreen.set('partner')}
	>
		{$t('contact.navP')}
	</button>
</nav>

<style>
</style>
