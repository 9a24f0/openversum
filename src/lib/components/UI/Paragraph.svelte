<script lang="ts">
	export let title: string;
	export let titleFontSize: 'sm' | 'md' | 'lg' = 'lg';
	export let paragraph: string;
</script>

<div class="my-auto">
	<p
		class:text-2xl={titleFontSize === 'sm'}
		class:text-4xl={titleFontSize === 'md'}
		class:text-5xl={titleFontSize === 'lg'}
		class="font-poppins"
	>
		{title}
	</p>
	<p class="py-4">{paragraph}</p>
	<slot />
</div>
