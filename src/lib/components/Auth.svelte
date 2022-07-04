<script lang="ts">
	import { supabase } from '$lib/supabase';

	let loading = false;
	let email = '';

	const handleLogin = async () => {
		loading = true;
		const { error } = await supabase.auth.signIn({ email });
		if (error) throw error;
		alert('Check your email for the login link!');
		loading = false;
	};

	async function signInWithGoogle() {
		const { user, session, error } = await supabase.auth.signIn(
			{
				provider: 'google'
			},
			{
				scopes: 'email'
			}
		);
	}
	async function signInWithFacebook() {
		const { user, session, error } = await supabase.auth.signIn(
			{
				provider: 'facebook'
			},
			{
				scopes: 'email'
			}
		);
	}
</script>

<!-- 				const { error } = await supabase.auth.signIn({ email });
				if (error) throw error;
				alert('Check your email for the login link!'); -->
<div class="mt-2 w-full sm:mx-auto sm:max-w-md">
	<div class="bg-white py-6 px-2 shadow rounded-lg sm:px-10">
		<!-- <form class="space-y-6" action="#" method="POST">
			<div>
				<label for="email" class="block text-sm font-medium text-gray-700"> Email address </label>
				<div class="mt-1">
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
			</div>

			<div>
				<label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
				<div class="mt-1">
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
			</div>

			<div class="flex items-center justify-between">
				<div class="flex items-center">
					<input
						id="remember-me"
						name="remember-me"
						type="checkbox"
						class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
					/>
					<label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
				</div>

				<div class="text-sm">
					<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
						Forgot your password?
					</a>
				</div>
			</div>

			<div>
				<button
					type="submit"
					class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>Sign in</button
				>
			</div>
		</form> -->

		<form on:submit|preventDefault={handleLogin} disabled={loading}>
			<input
				bind:value={email}
				type="email"
				name="email"
				id="email"
				class="mt-2 appearance-none block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				placeholder="your@email.com"
			/>

			<div class="mt-2">
				<button
					on:click={handleLogin}
					disabled={loading}
					type="submit"
					class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-500 bg-white hover:bg-indigo-100 ring-1 ring-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 "
					>Sign in with magic link</button
				>
			</div>
		</form>

		<div class="mt-2">
			<div class="relative">
				<div class="absolute inset-0 flex items-center">
					<div class="w-full border-t border-gray-300" />
				</div>
				<div class="relative flex justify-center text-sm">
					<span class="px-2 bg-white text-gray-500"> Continue with </span>
				</div>
			</div>

			<div class="mt-2 grid grid-cols-2 gap-3">
				<div>
					<button
						on:click={signInWithFacebook}
						class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
					>
						<span class="sr-only">Sign in with Facebook</span>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
							<path
								fill-rule="evenodd"
								d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
								clip-rule="evenodd"
							/>
						</svg>
					</button>
				</div>

				<div>
					<button
						on:click={signInWithGoogle}
						class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
					>
						<span class="sr-only">Sign in with Google</span>
						<svg
							class="w-5 h-5"
							aria-hidden="true"
							focusable="false"
							data-prefix="fab"
							data-icon="google"
							role="img"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 488 512"
							><path
								fill="currentColor"
								d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
							/></svg
						>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
