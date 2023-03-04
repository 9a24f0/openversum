<script lang="ts">
	import ChevronDownSVG from './SVG/ChevronDownSVG.svelte';
	import { t } from '$lib/translations';
	import { isHoverHeader, contactScreen } from '$lib/stores/generalState';
	export let showWorkWithUs = false;
</script>

<nav class="hidden md:flex md:justify-around space-x-2 sm:space-x-4 md:space-x-8">
	<!-- <a
		href="https://app.openversum.com"
		target="_blank"
		class=" text-md lg:text-lg font-medium text-emerald-700 hover:text-emerald-900"
	>
		Log in
	</a> -->

	<a
		href="/#what_we_do"
		class="text-md lg:text-lg font-medium {$isHoverHeader
			? 'text-white hover:text-blue-100'
			: 'text-blue'} focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl px-1 max-w-[100px] lg:max-w-xs "
	>
		{$t('common.whatWeDo')}
	</a>
	<a
		href="/about-us"
		class=" text-md lg:text-lg font-medium {$isHoverHeader
			? 'text-white hover:text-blue-100'
			: 'text-blue'} focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl px-1 max-w-[100px] lg:max-w-xs "
	>
		{$t('common.aboutUs')}
	</a>
	<div class="relative">
		<!-- Item active: "text-gray-900", Item inactive: "text-emerald-700" -->
		<button
			on:click|stopPropagation={() => (showWorkWithUs = !showWorkWithUs)}
			type="button"
			class=" {$isHoverHeader
				? 'text-white hover:text-blue-100'
				: 'text-blue'} group inline-flex items-center text-md lg:text-lg font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl px-1 max-w-[100px] lg:max-w-xs "
			aria-expanded="false"
		>
			<span>{$t('common.workWithUs')}</span>
			<ChevronDownSVG />
		</button>
	</div>
	<button
		on:click={() => contactScreen.set('')}
		class=" text-md lg:text-lg font-medium {$isHoverHeader
			? 'text-white hover:text-blue-100'
			: 'text-blue'} focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-xl px-1 max-w-[100px] lg:max-w-xs "
	>
		<a href="/contact">{$t('common.contact')}</a>
	</button>
</nav>
