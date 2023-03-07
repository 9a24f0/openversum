<script lang="ts">
	import { t } from '$lib/translations';
	import { locale } from '$lib/translations';
	import { fly } from 'svelte/transition';
	import AnimatedWave from '$lib/components/AnimatedWave.svelte';
	import H3 from './H3.svelte';

	const awardsPrograms = [
		{
			name: 'UpLink Top Innovators',
			alt: 'Uplink',
			imgSrc: './Logos/color/Uplink.svg',
			descriptionEs:
				'Desafío Mundial del Agua Dulce del Foro Económico Mundial. Esta iniciativa de innovación de cinco años pretende encontrar soluciones innovadoras que conserven y restauren los ecosistemas de agua dulce. Está financiada por HCL y cuenta con el apoyo de ARUP, el Enviado Especial del Reino de los Países Bajos para Asuntos Internacionales relacionados con el Agua, PA Consulting, The Nature Conservancy y Xylem"',
			descriptionEn:
				'World Economic Forum Global Freshwater Challenge. This five year Aquapreneur Innovation Initiative aims to find innovative solutions that conserve and restore freshwater ecosystems. Funded by HCL, and supported by ARUP, Kingdom of the Netherlands | Special Envoy for International Water Affairs, PA Consulting, The Nature Conservancy, and Xylem.',
			url: 'https://uplink.weforum.org/uplink/s/uplink-issue/a002o0000173B6sAAE/global-freshwater-challenge'
		},
		{
			name: 'Switzerland Innovation Tech4Impact',
			alt: 'Switzerland_innovation',
			imgSrc: './Logos/color/Switzerland_innovation.svg',
			descriptionEs:
				'El objetivo de la "Switzerland Innovation Tech4Impact Initiative" (SI Tech4Impact) es facilitar la realización de proyectos de innovación que aborden los retos medioambientales y sociales más apremiantes de la sociedad, centrándose en temas seleccionados de la Agenda 2030 para el Desarrollo Sostenible de la ONU.',
			descriptionEn:
				'The objective of the “Switzerland Innovation Tech4Impact Initiative” (SI Tech4Impact) is to facilitate the realization of innovation projects that tackle society’s most pressing environmental and societal challenges, focusing on selected themes of the UN 2030 Agenda for Sustainable Development.',
			url: 'https://www.switzerland-innovation.com/node/472'
		},
		{
			name: 'Hult Prize',
			alt: 'Hult_Prize',
			imgSrc: './Logos/color/Hult_Prize.svg',
			descriptionEs:
				'Boston Global Accelerator <br/>Openversum fue uno de los 6 finalistas que se presentaron en Nueva York en la Clinton Global Initiative <br/>Seleccionados entre más de 25.000 startups de todo el mundo',
			descriptionEn:
				"Boston Global Accelerator <br/> Openversum was one of 6 Finalists pitching in New York at the Clinton Global Initiative <br/> Selected out of 25'000+ startups internationally",
			url: 'https://www.hultprize.org/2022-global-finals/'
		},
		{
			name: 'Venture Kick',
			alt: 'Venture_Kick',
			imgSrc: './Logos/color/Venture_Kick.svg',
			descriptionEs:
				'Venture Kick es un modelo filantrópico de financiación en tres fases cuyo objetivo es apoyar a las empresas suizas de nueva creación con financiación suficiente para poner en marcha su éxito empresarial',
			descriptionEn:
				'Venture Kick is a philanthropic three stage funding model initiated to support Swiss startups with enough funding to kick-start their entrepreneurial success.',
			url: 'https://www.venturekick.ch/openversum'
		},
		{
			name: 'Community Award of the Youth and Future Prize',
			alt: 'Swiss_confederation',
			imgSrc: './Logos/color/Swiss_confederation.svg',
			descriptionEs:
				'El Premio Juventud y Futuro 2022 fue entregado por el Presidente Suizo Ignazio Cassis, con el apoyo de la Agencia Suiza para el Desarrollo y la Cooperación (COSUDE) y la Secretaría de Estado de Economía (SECO)',
			descriptionEn:
				'Swiss Youth and Future Prize 2022 handed over by the Swiss President Ignazio Cassis, with support from the Swiss Development and Cooperation (SDC) and State Secretariat for Economic Affairs (SECO)',
			url: 'https://www.eda.admin.ch/deza/de/home/deza/aktuell/newsuebersicht/2022/09/jugend-und-zukunftspreis-gewinnerteam.html'
		},
		{
			name: 'Swiss Water Partnership Youth',
			alt: 'Swiss_water_partnership',
			imgSrc: './Logos/color/Swiss_water_partnership.svg',
			descriptionEs:
				'SWP Youth es una iniciativa de y para jóvenes con sede en Suiza que trabaja para aprovechar el agua para el desarrollo. Su objetivo es crear una comunidad activa de jóvenes profesionales del agua, estudiantes y futuros líderes del sector. ',

			descriptionEn:
				'SWP Youth is an initiative for and by young people based in Switzerland and working towards leveraging water for development. It aims at creating an active community of young water professionals, students and future water leaders. ',
			url: null
		},
		{
			name: 'Microsoft For Startups',
			alt: 'Microsoft_4startups',
			imgSrc: './Logos/color/Microsoft_4startups.jpg',
			descriptionEs:
				'Microsoft para Startups reúne a personas, conocimientos y tecnología para ayudar a los fundadores en todas las etapas a resolver los retos de las startups. <br/> Seleccionados para el concurso Pitch for Impact en el evento Microsoft Envision de Zúrich',
			descriptionEn:
				'Microsoft for Startups Founders Hub brings people, knowledge, and technology together to help founders at every stage solve startup challenges. <br/> Selected for the Pitch for Impact competition at the Microsoft Envision event in Zürich',
			url: null
		},
		{
			name: 'Green Accelerator',
			alt: 'Green_acc',
			imgSrc: './Logos/color/Green_acc.svg',
			descriptionEs:
				'El Davos Green Accelerator, impulsado por illuminem, llamó la atención de los líderes mundiales reunidos en Davos sobre las soluciones más innovadoras para hacer frente al cambio climático. Una de las más de 20 startups seleccionadas para participar en el evento paralelo del FEM.',
			descriptionEn:
				'The Davos Green Accelerator, powered by illuminem, brought to the attention of global leaders convening in Davos the most innovative solutions tackling climate change. One of a curated selection of 20+ startups pitching at their WEF side-event',
			url: null
		},
		{
			name: 'Seif',
			alt: 'Seif',
			imgSrc: './Logos/color/Seif.svg',
			descriptionEs: 'Acelerador intensivo orientado al impacto <br/> Finalists',
			descriptionEn: 'Intensive impact oriented accelerator. <br/> Pitching finalists runner-ups',
			url: null
		},

		{
			name: 'Talent Kick',
			alt: 'Talent Kick',
			imgSrc: './Logos/color/kickfoundation.webp',
			descriptionEs: 'Uno de nuestros primeros apoyos a la carrera empresarial',
			descriptionEn: 'One of our first supportes for the entrepreneurial career path',
			url: null
		},
		{
			name: 'Together for the SDGs',
			alt: 'Together4SDG',
			imgSrc: './Logos/color/ETHtogether4sdg.png',
			descriptionEs:
				'Nuestra propuesta fue seleccionada por su mayor impacto potencial en el programa de eventos "Juntos por los SDGs" de la ETH de Zúrich',
			descriptionEn:
				'Our pitch was selected for biggest potential impact at ETH Zürich “Together for the SDGs"event programme',
			url: null
		}
	];

	let selectedAward = awardsPrograms[0];
	let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<section class="w-full bg-blue snap-start relative">
	<div style="width: {innerWidth}px;" class="absolute h-12 -top-9">
		<AnimatedWave duration={4000} fill="#76d0cd" w={innerWidth} />
	</div>
	<div class="container mx-auto px-3 sm:px-12 lg:px-24 py-4">
		<div class="flex justify-center">
			<h1 class="font-poppins font-semibold text-3xl md:text-4xl text-white mb-4 mt-4 sm:mb-8">
				{$t('home.awardsT')}
			</h1>
		</div>
		<div class="w-full flex justify-center pb-12">
			<div class="flex flex-wrap justify-center bg-white rounded-xl">
				{#key selectedAward}
					<div
						in:fly={{ x: 100, duration: 500 }}
						class="w-full px-2 sm:px-8 flex justify-evenly space-x-4 py-4 sm:py-8"
					>
						<div class="max-w-xs mx-auto my-auto">
							<H3>{selectedAward.name}</H3>
						</div>
						<p class="max-w-md">
							{@html $locale === 'es' ? selectedAward.descriptionEs : selectedAward.descriptionEn}

							{#if selectedAward.url}
								<br />
								<a
									target="_blank"
									rel="noreferrer"
									href={selectedAward.url}
									class="text-blue hover:text-blue-600 underline capitalize"
								>
									<span>{$t('common.learnMore')}...</span>
								</a>
							{/if}
						</p>
					</div>
				{/key}
				{#each awardsPrograms as ap}
					{@const isSelected = ap.name === selectedAward.name}
					<!-- class="{isSelected
							? 'opacity-100 border-t-4 border-green'
							: 'opacity-70'} p-4 px-8 border-t hover:opacity-100 transition-all" -->
					<button
						on:click={() => (selectedAward = ap)}
						class="{isSelected
							? 'opacity-100 '
							: 'opacity-70'} relative p-2 sm:py-4 sm:px-8 border-t hover:opacity-100 transition-all"
					>
						{#if isSelected}
							<div
								transition:fly={{ x: 100, duration: 500 }}
								class="absolute h-1 bg-green inset-0"
							/>
						{/if}
						<img
							loading="lazy"
							class="h-12 sm:h-24 aspect-video object-contain "
							alt={ap.name}
							src={ap.imgSrc}
						/>
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>
