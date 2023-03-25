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
	import type { FormData } from '$lib/types/definitions';
	const dispatch = createEventDispatcher();

	let isEmailValid: boolean;
	export let formData: FormData;
	$: disabled = !isEmailValid || formData.email === '' || formData.name === '' || formData.message === '';

	const submitContact = async () => {
		const { data, error } = await supabase.from('contact').insert({ ...formData });
		if (error) {
			toast.error($t('common.errorMsg'), { duration: 3000 });
		} else {
			toast.success(
				`${$t('common.success')}! ${$t('common.thankyou')} ${formData.name} ${$t('common.beintouch')}`,
				{ duration: 3000 }
			);
			$contactScreen = '';
		}
		dispatch('submitedContact');
	};
</script>

<form on:submit|preventDefault>
	<div class="grid grid-cols-6 w-full gap-x-3 gap-y-5">
		<InputField
			bind:value={formData.name}
			isRequired={true}
			label={$t('contact.name')}
			placeholder={$t('contact.namePlaceholder')}
		/>
		<EmailField
			bind:value={formData.email}
			bind:isValid={isEmailValid}
			label="Email"
			placeholder="youremail@example.com"
		/>
	</div>
	<TextAreaField bind:message={formData.message} />

	<PrimaryButton {disabled} on:click={submitContact}>{$t('common.contact')}</PrimaryButton>
</form>
