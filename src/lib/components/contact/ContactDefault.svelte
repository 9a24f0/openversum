<script lang="ts">
	import InputField from '$lib/components/UI/InputField.svelte';
	import EmailField from '$lib/components/UI/EmailField.svelte';
	import { supabase } from '$lib/supabase';
	import type { definitions } from '$lib/types/supabase';
	import PrimaryButton from '$lib/components/UI/PrimaryButton.svelte';
	import { createEventDispatcher } from 'svelte';
	import { t } from '$lib/translations';

	const dispatch = createEventDispatcher();
	type ContactIn = Omit<Omit<definitions['contact'], 'id'>, 'created_at'>;

	let name = '';
	let email = '';
	let message = '';

	let isEmailValid: boolean;
	$: disabled = !isEmailValid || email === '' || name === '' || message === '';
	const submitContact = async () => {
		const { data, error } = await supabase
			.from<ContactIn>('contact')
			.insert({ name, email, message });
		if (error) {
			alert('Oups an error happened please try again');
			throw error;
		} else if (data) {
			alert(`Sucess! Thank you ${data[0].name} we will be in touch soon!`);
		}
		dispatch('submitedContact');
	};
</script>

<form on:submit|preventDefault>
	<div class="grid grid-cols-6 w-full gap-x-3 gap-y-5">
		<InputField
			bind:value={name}
			label={$t('contact.name')}
			placeholder={$t('contact.namePlaceholder')}
		/>
		<EmailField
			bind:value={email}
			bind:isValid={isEmailValid}
			label="Email"
			placeholder="youremail@example.com"
		/>
	</div>
	<div class="mt-5">
		<label for="message" class="block text-sm font-medium text-gray-700"
			>{$t('contact.writeUs')}</label
		>
		<div class="mt-1">
			<textarea
				bind:value={message}
				placeholder={$t('contact.contactPlaceholder')}
				rows="4"
				name="message"
				id="message"
				class="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm border-darkblue rounded-md"
			/>
		</div>
	</div>

	<PrimaryButton {disabled} on:click={submitContact}>{$t('common.contact')}</PrimaryButton>
</form>
