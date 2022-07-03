<script>
	import Header from '$lib/components/Header.svelte';
	import { supabase } from '$lib/supabase';
	import { user } from '$lib/stores/sessionStore';
	import { onMount } from 'svelte/internal';
	import '../app.css';

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

<div class="bg-white h-full">
	<div class="h-[12%]">
		<Header />
	</div>
	<main class="h-[88%]">
		<slot />
	</main>
</div>
