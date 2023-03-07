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
		class=" text-md lg:text-lg text-center font-medium text-emerald-700 hover:text-emerald-900"
	>
		Log in
	</a> -->
	<div class="my-auto">
		<a
			href="/#what_we_do"
			class="text-md lg:text-lg font-medium {$isHoverHeader
				? 'text-white hover:text-blue-100'
				: 'text-blue'}  focus:underline  rounded-xl px-1 max-w-[100px] lg:max-w-xs "
		>
			{$t('common.whatWeDo')}
		</a>
	</div>
	<div class="my-auto">
		<a
			href="/about-us"
			class=" text-md lg:text-lg text-center font-medium {$isHoverHeader
				? 'text-white hover:text-blue-100'
				: 'text-blue'}  focus:underline  rounded-xl px-1 max-w-[100px] lg:max-w-xs "
		>
			{$t('common.aboutUs')}
		</a>
	</div>
	<div class="relative">
		<!-- Item active: "text-gray-900", Item inactive: "text-emerald-700" -->
		<button
			on:click|stopPropagation={() => (showWorkWithUs = !showWorkWithUs)}
			type="button"
			class=" {$isHoverHeader
				? 'text-white hover:text-blue-100'
				: 'text-blue'} group inline-flex items-center text-md lg:text-lg font-medium   focus:underline  rounded-xl px-1 max-w-[100px] lg:max-w-xs "
			aria-expanded="false"
		>
			<span>{$t('common.workWithUs')}</span>
			<ChevronDownSVG />
		</button>
	</div>
	<div class="my-auto">
		<a
			on:click={() => contactScreen.set('')}
			href="/contact"
			class="text-md lg:text-lg text-center font-medium {$isHoverHeader
				? 'text-white hover:text-blue-100'
				: 'text-blue'}  focus:underline  rounded-xl px-1 max-w-[100px] lg:max-w-xs "
		>
			{$t('common.contact')}
		</a>
	</div>
</nav>
