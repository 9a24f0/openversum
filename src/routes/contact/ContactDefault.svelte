<script lang="ts">
	import InputField from '$lib/components/UI/InputField.svelte';
	import EmailField from '$lib/components/UI/EmailField.svelte';
	import { supabase } from '$lib/supabase';
	import PrimaryButton from '$lib/components/UI/PrimaryButton.svelte';
	import { createEventDispatcher } from 'svelte';
	import { t } from '$lib/translations';
	import TextAreaField from '$lib/components/UI/TextAreaField.svelte';
	import toast from 'svelte-french-toast';
	import { contactScreen } from '$lib/stores/generalState';
	const dispatch = createEventDispatcher();

	let name = '';
	let email = '';
	let message = '';

	let isEmailValid: boolean;
	$: disabled = !isEmailValid || email === '' || name === '' || message === '';

	const submitContact = async () => {
		const { data, error } = await supabase.from('contact').insert({ name, email, message });
		if (error) {
			toast.error('Oups an error happened please try again');
			throw error;
		} else if (data) {
			toast.success(`Sucess! Thank you ${name} we will be in touch soon!`);
			$contactScreen = '';
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
