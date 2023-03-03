<script lang="ts">
  import Social from "$lib/components/SVG/Social.svelte";
  import Financial from "$lib/components/SVG/Financial.svelte";
  import Environmental from "$lib/components/SVG/Environmental.svelte";
  import { t } from '$lib/translations';
	import ImageCard from "$lib/components/UI/ImageCard.svelte";
</script>

<div class="flex flex-wrap justify-between px-8 sm:px-12 lg:px-24 items-center border-gray-100 py-8 md:py-12">
  <div class="lg:w-1/2 lg:pr-48">
    <p class="font-poppins text-[2.125rem] text-darkblue font-medium">
      Nosotros
    </p>
    <hr class="bg-darkblue">
    <p class="py-4 text-darkblue">
      Queremos mejorar la vida de las personas que viven en la pobreza
      y tienen dificultades debido a la desigualdad. Creemos que al 
      poner a  disposición de las zonas rurales, a menudo desfavorecidas,
      bienes y  servicios relacionados con el agua, potenciamos a las 
      comunidades locales y tenemos un impacto positivo en la salud
      pública. Esto se  consigue proporcionando educación y recursos
      a los expertos locales.
    </p>
    <p class="py-4 text-darkblue">
      Como resultado, les permitimos crear un negocio social mientras 
      mejoran la vida de sus comunidades. 
    </p>
    <p class="py-4 text-darkblue">
      Tenemos éxito si somos sostenibles en 3 dimensiones:
    </p>
  </div>
  <div class="flex flex-grow justify-between">
    <span>
      <Environmental />
      <p class="text-2xl font-poppins text-blue-500">Ambiental</p>
    </span>
    <span>
      <Social />
      <p class="text-2xl font-poppins text-blue-500">Social</p>
    </span>
    <span>
      <Financial />
      <p class="text-2xl font-poppins text-blue-500">Financiero</p>
    </span>
  </div>
</div>
  
<div class="w-full flex justify-center">
  <p class="font-poppins text-[2.125rem] text-blue-500 font-medium">
    Conoce nuestro equipo
  </p>
</div>
<div class="px-8 sm:px-12 lg:px-24 flex-grow items-center border-gray-100 py-4">
  <ImageCard/>
</div>

