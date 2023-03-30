<script lang="ts">
	import {
		Button,
		Container,
		Head,
		Heading,
		Hr,
		Html,
		Preview,
		Section,
		Text,
		Img
	} from 'svelte-email';

	export let message: string;
	export let name: string;
	export let email: string;
	export let organization: string;
	export let country: string;
	export let type: string;

	const previewText = `Read ${name}'s message`;

	const fontFamily =
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

	const main = {
		backgroundColor: '#ffffff'
	};

	const container = {
		margin: '0 auto',
		padding: '20px 0 48px',
		width: '580px'
	};

	const heading = {
		fontFamily,
		fontSize: '32px',
		lineHeight: '1.3',
		fontWeight: '700',
		color: '#1A4444'
	};

	const paragraph = {
		fontFamily,
		fontSize: '18px',
		lineHeight: '1.4',
		color: '#1A4444'
	};

	const msg = {
		...paragraph,
		padding: '24px',
		backgroundColor: '#f2f3f3',
		borderRadius: '5px'
	};

	const button = {
		fontFamily,
		backgroundColor: '#9DC96B',
		borderRadius: '5px',
		color: '#fff',
		fontSize: '18px',
		textDecoration: 'none',
		textAlign: 'center' as const,
		display: 'block',
		width: '100%'
	};

	const hr = {
		borderColor: '#cccccc',
		margin: '20px 0'
	};

	const footer = {
		fontFamily,
		color: '#9ca299',
		fontSize: '14px',
		marginBottom: '10px'
	};
</script>

<Html>
	<Head />
	<Preview preview={previewText} />
	<Section style={main}>
		<Container style={container}>
			<Heading style={heading}>Here is {name}'s message:</Heading>
			<Text style={msg}>"{message}"</Text>
			{#if type !== 'general'}
				<Hr style={hr} />
				<Heading style={heading}>Contact information:</Heading>
				{#if organization}
					<Text style={paragraph}>Organization: {organization}</Text>
				{/if}
				{#if country}
					<Text style={paragraph}>Country: {country}</Text>
				{/if}
			{/if}
			<Section style={{ padding: '16px 0 20px' }}>
				<Button pY={19} style={button} href="mailto:{email}">Contact Back</Button>
			</Section>
			<Hr style={hr} />
			<Img src="https://openversum.com/OVLogoFull.png" alt="Openversum" width="200" height="50"></Img>
			<Text style={footer}>© 2023 Openversum, all rights reserved</Text>
		</Container>
	</Section>
</Html>