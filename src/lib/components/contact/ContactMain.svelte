<script lang="ts">
	import { t } from '$lib/translations';
	export let currentFormChild;
	function changeStateContact(state: String) {
		currentFormChild = state;
	}
</script>

<nav class="font-medium not-italic semi-bold flex flex-col gap-6 text-[45px] font-poppins text-white">
	<button
		class="self-center transition ease-in-out duration-300 hover:translate-y-2"
		on:click={() => changeStateContact('general')}>
		{$t('contact.navG')}
	</button>
	<button
		class="self-center transition ease-in-out duration-300 hover:translate-y-2"
		on:click={() => changeStateContact('entrepreneur')}
	>
		{$t('contact.navE')}
	</button>
	<button
		class="self-center transition ease-in-out duration-300 hover:translate-y-2"
		on:click={() => changeStateContact('partner')}
	>
		{$t('contact.navP')}
	</button>
</nav>

<style>
</style>
