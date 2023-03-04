<script lang="ts">
	import Social from '$lib/components/SVG/Social.svelte';
	import Financial from '$lib/components/SVG/Financial.svelte';
	import Environmental from '$lib/components/SVG/Environmental.svelte';
	import { t } from '$lib/translations';
	import ImageCard from '$lib/components/UI/ImageCard.svelte';
</script>

<div
	class="flex flex-wrap justify-between px-8 sm:px-12 lg:px-24 items-center border-gray-100 py-8 md:py-12"
>
	<div class="lg:w-1/2 lg:pr-32">
		<h1 class="font-poppins text-4xl text-darkblue font-medium pb-2 border-b-2 border-darkblue">
			{$t('aboutus.title')}
		</h1>
		<p class="py-4 text-darkblue">
			{@html $t('aboutus.description')}
		</p>
	</div>
	<div class="flex flex-grow flex-wrap justify-evenly pt-8">
		<div class="flex flex-col place-items-center">
			<span class="flex justify-center w-24 h-24">
				<Environmental />
			</span>
			<h3 class="text-md md:text-2xl pt-8 font-poppins text-blue-500">
				{$t('aboutus.environmentalT')}
			</h3>
		</div>
		<div class="flex flex-col place-items-center">
			<span class="flex justify-center w-24 h-24">
				<Social />
			</span>
			<h3 class="text-md md:text-2xl pt-8 font-poppins text-blue-500">{$t('aboutus.socialT')}</h3>
		</div>
		<div class="flex flex-col place-items-center">
			<span class="flex justify-center w-24 h-24">
				<Financial />
			</span>
			<h3 class="text-md md:text-2xl pt-8 font-poppins text-blue-500">
				{$t('aboutus.financialT')}
			</h3>
		</div>
	</div>
</div>

<div class="w-full flex justify-center pt-8 px-8 text-center">
	<h2 class="font-poppins text-4xl text-blue-500 font-medium">
		{$t('aboutus.teamTitle')}
	</h2>
</div>

<div class="px-8 sm:px-12 lg:px-24 flex flex-wrap justify-center py-4">
	<ImageCard
		name={'Olivier Gröninger'}
		description={$t('aboutus.oliP')}
		title={'CEO'}
		imgSrc={'https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/public/openversum-images/general/whatwedo_example.png'}
	/>
	<ImageCard
		name={'Laura Stocco'}
		description={$t('aboutus.lauraP')}
		title={'CTO'}
		imgSrc={'https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/public/openversum-images/general/whatwedo_example.png'}
	/>
	<ImageCard
		name={'Lorenzo Donadio'}
		description={$t('aboutus.zozoP')}
		title={'CIO'}
		imgSrc={'https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/public/openversum-images/general/whatwedo_example.png'}
	/>
</div>

<div class="w-full flex justify-center pt-16">
	<h3 class="font-poppins text-2xl text-darkblue font-medium">
		{$t('aboutus.partnersT')}
	</h3>
</div>

<div class="flex justify-center">
	<div class="inline-grid grid-cols-3 gap-8 py-14">
		<img
			class="max-h-14 place-self-center"
			src="/partner_logos/cruz_roja_sucre.png"
			alt="cruz roja sucre"
		/>
		<img
			class="max-h-14 place-self-center border-x-2 border-darkblue"
			src="partner_logos/ETH-logo.jpg"
			alt="ETH partner"
		/>
		<img class="max-h-14 place-self-center" src="/partner_logos/rios.png" alt="fundacion rios" />
	</div>
</div>
