<script lang="ts">
  import Social from "$lib/components/SVG/Social.svelte";
  import Financial from "$lib/components/SVG/Financial.svelte";
  import Environmental from "$lib/components/SVG/Environmental.svelte";
  import { t } from '$lib/translations';
	import ImageCard from "$lib/components/UI/ImageCard.svelte";
</script>

<div class="flex flex-wrap justify-between px-8 sm:px-12 lg:px-24 items-center border-gray-100 py-8 md:py-12">
  <div class="lg:w-1/2 lg:pr-32">
    <p class="font-poppins text-[2.125rem] text-darkblue font-medium">
      Nosotros
    </p>
    <hr class="bg-darkblue">
    <p class="py-4 text-darkblue">
      {@html $t('home.visionP')}
    </p>
  </div>
  <div class="flex flex-grow justify-between px-4">
    <div class="flex flex-col place-items-center">
      <span class="flex justify-center w-32 h-28">
        <Environmental />
      </span>
      <p class="text-2xl pt-8 font-poppins text-blue-500">Ambiental</p>
    </div>
    <div class="flex flex-col place-items-center">
      <span class="flex justify-center w-32 h-28">
        <Social />
      </span>
      <p class="text-2xl pt-8 font-poppins text-blue-500">Social</p>
    </div>
    <div class="flex flex-col place-items-center">
      <span class="flex justify-center w-32 h-28">
        <Financial />
      </span>
      <p class="text-2xl pt-8 font-poppins text-blue-500">Financiero</p>
    </div>
  </div>
</div>
  
<div class="w-full flex justify-center pt-8">
  <p class="font-poppins text-[2.125rem] text-blue-500 font-medium">
    Conoce nuestro equipo
  </p>
</div>

<div class="px-8 sm:px-12 lg:px-24 flex justify-center py-4">
  <ImageCard
    name={"Olivier Gröninger"}
    description={$t('home.oliP')}
    title={"CEO"}
    imgSrc={"https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/public/openversum-images/general/whatwedo_example.png"}/>
  <ImageCard
    name={"Laura Stocco"}
    description={$t('home.lauraP')}
    title={"CTO"}
    imgSrc={"https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/public/openversum-images/general/whatwedo_example.png"}/>
  <ImageCard
    name={"Lorenzo Donadio"}
    description={$t('home.zozoP')}
    title={"CIO"}
    imgSrc={"https://blbosiccwkpntqobciwj.supabase.co/storage/v1/object/public/openversum-images/general/whatwedo_example.png"}/>
</div>

<div class="w-full flex justify-center pt-16">
  <p class="font-poppins text-2xl text-darkblue font-medium">
    {$t('home.partnersT')}
  </p>
</div>

<div class="flex justify-center">
  <div class="inline-grid grid-cols-3 gap-8 py-14">
    <img class="max-h-14 place-self-center" src="/partner_logos/cruz_roja_sucre.png" alt="cruz roja sucre" />
    <img class="max-h-14 place-self-center border-x-2 border-darkblue" src="partner_logos/ETH-logo.jpg" alt="ETH partner" />
    <img class="max-h-14 place-self-center" src="/partner_logos/rios.png" alt="fundacion rios" />
  </div>
</div>
