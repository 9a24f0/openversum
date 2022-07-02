<script>
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
</script>

<div class="bg-white min-h-screen h-full">
	<Header />
	<main>
		<slot />
	</main>

	<footer class="bg-slate-50 ">footer</footer>
</div>
