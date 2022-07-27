<script lang="ts">
	import InputField from '$lib/components/UI/InputField.svelte';
	import EmailField from '$lib/components/UI/EmailField.svelte';
	import { supabase } from '$lib/supabase';
	import type { definitions } from '$lib/types/supabase';
	import PrimaryButton from '$lib/components/UI/PrimaryButton.svelte';
	import { createEventDispatcher } from 'svelte';
	import { nanoid } from 'nanoid';

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
		<InputField bind:value={name} label="Name" placeholder="Your name" />
		<EmailField
			bind:value={email}
			bind:isValid={isEmailValid}
			label="Email"
			placeholder="youremail@example.com"
		/>
		<InputField bind:value={organization} label="Organization" placeholder="Organization" />
		<InputField bind:value={country} label="Country" placeholder="Country" />
	</div>

	<div class="mt-2">
		<label for="last-name" class="block text-sm font-medium text-gray-700">Upload your CV</label>
		<input
			bind:files={inputCV}
			class="block p-2 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 focus:outline-none"
			id="file_input"
			type="file"
			accept="application/pdf, application/vnd.ms-word"
		/>
		<p class="mt-0.5 text-xs text-gray-500">PDF or Word</p>
	</div>

	<div class="my-2">
		<label for="message" class="block text-sm font-medium text-gray-700">Write us a message</label>
		<div class="mt-1">
			<textarea
				bind:value={message}
				placeholder="contact us ..."
				rows="4"
				name="message"
				id="message"
				class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full border-gray-300 rounded-md"
			/>
		</div>
	</div>

	<PrimaryButton {disabled} on:click={submitContact}>Contact Us</PrimaryButton>
</form>
