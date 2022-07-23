<script lang="ts">
	import InputField from '$lib/components/UI/InputField.svelte';
	import EmailField from '$lib/components/UI/emailField.svelte';

	let name = '';
	let email = '';
	let message = '';
</script>

<form on:submit|preventDefault class="max-w-lg">
	<div class="grid grid-cols-6 w-full gap-x-8 gap-y-2">
		<InputField bind:value={name} label="Name" placeholder="Your name" />
		<EmailField bind:value={email} label="Email" placeholder="youremail@example.com" />
	</div>
	<div>
		<label for="message" class="block text-sm font-medium text-gray-700">Write us a message</label>
		<div class="mt-1">
			<textarea
				bind:value={message}
				placeholder="contact us ..."
				rows="4"
				name="message"
				id="message"
				class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
			/>
		</div>
	</div>
</form>
