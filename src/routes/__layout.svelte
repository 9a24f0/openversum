<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="bg-white h-full">
	<div class="h-[12%]">
		<Header />
	</div>
	<main class="h-[88%]">
		<slot />
	</main>

	<!-- <footer class="bg-slate-50 ">footer</footer> -->
</div>
