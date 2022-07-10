<script>
	import Header from '$lib/components/Header.svelte';
	import { supabase } from '$lib/supabase';
	import { user } from '$lib/stores/sessionStore';
	import { onMount } from 'svelte/internal';
	import '../app.css';
	import BlobTopR from '$lib/components/SVG/BlobTopR.svelte';

	onMount(async () => {
		user.set(supabase.auth.user());

		// if user exists do something
		/* if ($user) {
			
		} */
	});
	supabase.auth.onAuthStateChange(async (_, session) => {
		user.set(session?.user ?? null);
		// if user exists do something
		/* if (session?.user) {
			await loadAssessors();
		} */
	});
</script>

<div class="h-full relative overflow-x-hidden">
	<div class="h-[12%]">
		<Header />
	</div>
	<main class="h-[88%]">
		<slot />
	</main>
	<div class="-z-10 absolute origin-top-left -top-16 -right-14 opacity-80">
		<BlobTopR />
	</div>
</div>
