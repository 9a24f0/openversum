<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
	export let currentFormChild;
	function changeStateContact(state) {
		currentFormChild = state;
	}
</script>

<ul class="font-medium not-italic semi-bold flex flex-col gap-6 text-45 font-poppins text-white">
	<li class="self-center cursor-pointer" on:click={() => changeStateContact('General')}>General</li>
	<li class="self-center cursor-pointer" on:click={() => changeStateContact('Entrepreneur')}>
		Emprendedor
	</li>
	<li class="self-center cursor-pointer" on:click={() => changeStateContact('Partner')}>Socio</li>
</ul>

<style>
</style>
