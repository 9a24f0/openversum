<script lang="ts">
	import InputField from '$lib/components/UI/InputField.svelte';
	import EmailField from '$lib/components/UI/EmailField.svelte';
	import { supabase } from '$lib/supabase';
	import type { definitions } from '$lib/types/supabase';
	import PrimaryButton from '$lib/components/UI/PrimaryButton.svelte';
	import { createEventDispatcher } from 'svelte';
	import { nanoid } from 'nanoid';
	import { t } from '$lib/translations';
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
		message === '' ||
		organization === '' ||
		country === '';

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
	<div class="grid grid-cols-6 w-full gap-x-8 gap-y-2">
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
		<InputField
			bind:value={organization}
			label={$t('contact.organization')}
			placeholder={$t('contact.organization')}
		/>
		<InputField
			bind:value={country}
			label={$t('contact.country')}
			placeholder={$t('contact.country')}
		/>
	</div>

	<div class="mt-2 ">
		<label for="last-name" class="block text-sm font-semibold text-darkblue mb-2"
			>{$t('contact.cvUp')} *</label
		>
		<button
			class=" box-border flex items-center w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:outline-none bg-white"
		>
			<span
				class="block bg-darkblue text-white text-base font-normal font-mono p-2.5 px-4 rounded-lg "
				>{$t('contact.cvUp')}</span
			>
			<p class="ml-3 text-darkblue font-normal text-base ">
				{$t('contact.placeholderCvUp')}
			</p>
		</button>
		<input
			bind:files={inputCV}
			class="hidden block p-2 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:outline-none"
			id="file_input"
			type="file"
			accept="application/pdf, application/vnd.ms-word"
		/>
		<p class="mt-0.5 text-xs text-gray-500">PDF or Word</p>
	</div>

	<div class="my-2">
		<label for="message" class="block text-sm font-medium text-gray-700"
			>{$t('contact.writeUs')}</label
		>
		<div class="mt-1 rounded-md">
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
