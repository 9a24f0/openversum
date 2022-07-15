<script>
	import FinancialSvg from '$lib/components/SVG/FinancialSVG.svelte';
	import HandShakeSvg from '$lib/components/SVG/HandShakeSVG.svelte';
	import LeafSvg from '$lib/components/SVG/LeafSVG.svelte';
</script>

<div class="container mx-auto sm:px-6 lg:px-8 h-full">
	<h1 class="font-bold text-4xl md:text-5xl">Our Vision</h1>

	<p class="text-lg mt-4 p-8">
		We want to improve the lives of people living in poverty, and who struggle due to inequality. We
		believe that by making water goods and services available the often disadvantaged rural areas,
		we empower local communities and have a positive impact on public health. This is achieved
		through providing education and resources to local experts. As a result, we enable them to
		create a social business while improving the lives of their communities.
		<br />
		<br />
		We are successful if we are sustainable in 3 dimensions:
	</p>
	<div class="flex justify-evenly align-bottom items-end gap-8">
		<HandShakeSvg />
		<FinancialSvg />
		<LeafSvg />
	</div>
	<h1 class="font-bold text-4xl md:text-5xl">Meet the core team</h1>

	<img class="h-16 w-16" src="./ourteam/olivier.png" alt="Olivier Groeningen" />
	Olivier Gröninger, CEO Ph.D. in Chemical Engineering ETHZ Expert in nanotechnology and social businesses
	<img class="h-16 w-16" src="./ourteam/laura.png" alt="Laura Stocco" />
	Laura Stocco, CTO MSc. Environmental Engineering EPFL, EAWAG Expert in water & sanitation in LMIC

	<img class="h-16 w-16" src="./ourteam/lorenzo.png" alt="Lorenzo donadio" />
	Lorenzo Donadio, CIO MSc. Environmental Engineering EPFL Expert in data science and web development

	<img class="h-16 w-16" src="./ourteam/julian.png" alt="Julian Salazar" />
	Julián Salazar, COO MA Public Management and Policy UNIL Expert in impact evaluation and policy
</div>
