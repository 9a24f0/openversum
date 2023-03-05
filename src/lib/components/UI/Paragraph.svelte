<script lang="ts">
  export let title: string;
  export let titleFontSize = 'lg';
  export let paragraph: string;
</script>

<div class="my-auto">
  <p class="
    font-poppins
    {titleFontSize === 'sm' ? 'text-2xl' :
     titleFontSize === 'md' ? 'text-4xl' :
     titleFontSize === 'lg' ? 'text-5xl' :
     ''}
    ">
    {title}
  </p> 
  <p class="py-4">{paragraph}</p>
  <slot></slot>
</div>