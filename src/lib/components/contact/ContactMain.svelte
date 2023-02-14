<script>
	export let currentFormChild = '';
	function changeStateContact(state) {
		currentFormChild = state;
	}
</script>

<!-- <div class="contact_container bg-blue-500 w-full flex justify-center items-center"> -->
<ul class="font-medium not-italic semi-bold flex flex-col gap-6">
	<li
		class="contact_container-item self-center cursor-pointer"
		on:click={() => changeStateContact('General')}
	>
		General
	</li>
	<li
		class="contact_container-item self-center cursor-pointer"
		on:click={() => changeStateContact('Emprendedor')}
	>
		Emprendedor
	</li>
	<li
		class="contact_container-item self-center cursor-pointer"
		on:click={() => changeStateContact('Socio')}
	>
		Socio
	</li>
</ul>

<!-- </div> -->
<style>
	.contact_container-item {
		color: theme('colors.white.DEFAULT');
		font-size: theme('fontSize.45');
		font-family: theme('fontFamily.poppins');
	}
</style>
