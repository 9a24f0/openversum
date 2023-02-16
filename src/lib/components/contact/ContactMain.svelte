<script lang="ts">
	import { t } from '$lib/translations';
	import { contactScreen } from '$lib/stores/generalState';
</script>

<nav
	class="font-medium not-italic semi-bold flex flex-col gap-6 text-[45px] font-poppins text-white"
>
	<button class="self-center cursor-pointer" on:click={() => contactScreen.set('general')}>
		{$t('contact.navG')}
	</button>
	<button class="self-center cursor-pointer" on:click={() => contactScreen.set('entrepreneur')}>
		{$t('contact.navE')}
	</button>
	<button class="self-center cursor-pointer" on:click={() => contactScreen.set('partner')}>
		{$t('contact.navP')}
	</button>
</nav>

<style>
</style>
