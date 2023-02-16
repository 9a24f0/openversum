<script lang="ts">
	import { t } from '$lib/translations';
	import { contactScreen } from '$lib/stores/generalState';

	export let currentFormChild;
</script>

<nav
	class="font-medium not-italic semi-bold flex flex-col gap-6 text-[45px] font-poppins text-white"
>
	<button class="self-center cursor-pointer" on:click={() => changeStateContact('General')}>
		{$t('contact.navG')}
	</button>
	<button class="self-center cursor-pointer" on:click={() => changeStateContact('Entrepreneur')}>
		{$t('contact.navE')}
	</button>
	<button class="self-center cursor-pointer" on:click={() => changeStateContact('Partner')}>
		{$t('contact.navP')}
	</button>
</nav>

<style>
</style>
