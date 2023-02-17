<script lang="ts">
  import { t } from "$lib/translations";
  export let message: string
</script>
<div class="mt-5">
  <label for="message" class="block text-sm font-medium text-gray-700"
    >{$t('contact.writeUs')} *</label
  >
  <div class="mt-1">
    <textarea
      bind:value={message}
      placeholder={$t('contact.contactPlaceholder')}
      rows="4"
      name="message"
      id="message"
      class="mt-1 focus:ring-cyan-500 focus:border-cyan-500 block w-full shadow-sm border-darkblue rounded-md"
    />
  </div>
</div>