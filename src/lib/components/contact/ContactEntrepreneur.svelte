<script lang="ts">
	import InputField from '$lib/components/UI/InputField.svelte';
	import EmailField from '$lib/components/UI/EmailField.svelte';
	import { supabase } from '$lib/supabase';
	import type { definitions } from '$lib/types/supabase';
	import PrimaryButton from '$lib/components/UI/PrimaryButton.svelte';
	import { createEventDispatcher } from 'svelte';
	import { nanoid } from 'nanoid';
	import { t } from '$lib/translations';
	import TextAreaField from '../UI/TextAreaField.svelte';
	const id = nanoid(8);
	const dispatch = createEventDispatcher();
	type ContactIn = Omit<Omit<definitions['contact'], 'id'>, 'created_at'>;

	let inputCV: FileList;
	//form fields
	let name = '';
	let email = '';
	let message = '';
	let cv: string | undefined = undefined;
	let type = 'entrepreneur';
	let organization: string | undefined = undefined;
	let phone_number: string | undefined = undefined;
	let country: string | undefined = undefined;
	//endof form
	let isEmailValid: boolean;

	$: disabled =
		!isEmailValid ||
		email === '' ||
		name === '' ||
		message === '' 

	const submitContact = async () => {
		if (inputCV) {
			console.log(inputCV);
			await supabase.storage.from('entrepreneurs').upload(`cv/cv_${id}`, inputCV[0]);
			cv = `https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/sign/entrepreneurs/cv/cv_${id}`;
		} else {
			console.log('No CV');
		}

		const { data, error } = await supabase
			.from<ContactIn>('contact')
			.insert({ name, email, message, type, cv, organization, phone_number, country });
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
			isRequired={true}
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
		<InputField
			isRequired={false}
			bind:value={organization}
			label={$t('contact.organization')}
			placeholder={$t('contact.organization')}
		/>
		<InputField
			isRequired={false}
			bind:value={country}
			label={$t('contact.country')}
			placeholder={$t('contact.country')}
		/>
	</div>

	<div class="mt-5">
		<label for="last-name" class="block text-sm font-semibold text-darkblue mb-2"
			>{$t('contact.cvUp')}</label
		>
		<div
			class="box-border flex items-center w-full rounded-lg border border-darkblue"
		>
			<button
				class="block bg-darkblue text-white text-mukta font-normal p-2.5 px-4 rounded-lg"
				>{$t('contact.btnCvUp')}</button
			>
			<p class="ml-3 text-darkblue font-normal">
				{$t('contact.placeholderCvUp')}
			</p>
			<input
				bind:files={inputCV}
				class="cursor-pointer opacity-0 w-36 h-9 pl-36 absolute z-10 rounded-lg border border-gray-300 focus:outline-none"
				id="file_input"
				type="file"
				accept="application/pdf, application/vnd.ms-word"
			/>
		</div>
	</div>
	
	<TextAreaField bind:message={message}/>
	<PrimaryButton {disabled} on:click={submitContact}>{$t('common.contact')}</PrimaryButton>
</form>
