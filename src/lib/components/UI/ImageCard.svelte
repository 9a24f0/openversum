<script lang="ts">
	export let name: string;
	export let description: string;
	export let title: string;
	export let imgSrc: string;
</script>

<div class="w-52 h-[16.75rem] sm:w-64 sm:h-[18.75rem] cursor-pointer rounded-xl relative m-3">
	<div
		class="transition duration-300 ease-in-out 
			opacity-0 hover:opacity-95 bg-[#BEBEBE]
			z-1 absolute rounded-lg h-full w-full flex"
	>
		<div
			class="transform transition duration-300 ease-in-out hover:translate-y-0 translate-y-4
				p-6 space-y-3 text-lg text-darkblue flex flex-col hover:opacity-100"
		>
			<div class="font-medium">{name}</div>
			<div class="text-sm grow">{description}</div>
			<div class="font-medium place-self-end">{title}</div>
		</div>
	</div>
	<img alt="Organizers" class="object-cover w-full h-full rounded-lg" src={imgSrc} />
</div>
