<script lang="ts">
	import InputField from '$lib/components/UI/InputField.svelte';
	import EmailField from '$lib/components/UI/EmailField.svelte';
	import { supabase } from '$lib/supabase';
	import type { definitions } from '$lib/types/supabase';
	import PrimaryButton from '$lib/components/UI/PrimaryButton.svelte';
	import { createEventDispatcher } from 'svelte';
	import { t } from '$lib/translations';
	import TextAreaField from '../UI/TextAreaField.svelte';

	const dispatch = createEventDispatcher();
	type ContactIn = Omit<Omit<definitions['contact'], 'id'>, 'created_at'>;

	let name = '';
	let email = '';
	let message = '';

	let isEmailValid: boolean;
	$: disabled = !isEmailValid || email === '' || name === '' || message === '';

	const submitContact = async () => {
		const { data, error } = await supabase.from('contact').insert({ name, email, message });
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
			isRequired={true}
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
	<TextAreaField bind:message />

	<PrimaryButton {disabled} on:click={submitContact}>{$t('common.contact')}</PrimaryButton>
</form>
