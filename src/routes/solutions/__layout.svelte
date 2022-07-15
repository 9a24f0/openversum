<script lang="ts">
	import { goto } from '$app/navigation';
	import { user } from '$lib/stores/sessionStore';
	import { loadCustomers } from '$lib/stores/customerStore';
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { supabase } from '$lib/supabase';

	supabase.auth.onAuthStateChange((e) => {
		if (!$user && browser) goto('/');
	});

	if (!$user && browser) goto('/');

	let loaded = false;
	onMount(async () => {
		await loadCustomers();
		loaded = true;
	});
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="max-w-7xl mx-auto px-4 lg:px-8">
	<!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
	<div class="max-w-5xl mx-auto">
		<!-- Content goes here -->
		{#if loaded}
			<slot />
		{/if}
	</div>
</div>
