<template>
  <div class="d:flex gap:20">
    <a
      aria-label="Youtube link gomb"
      :href="props.ytLink"
      target="_blank"
    >
      <div
        class="w:32 h:32 fill:red-36"
        v-html="siYoutube.svg"
      />
    </a>
    <a
      aria-label="Letöltés link gomb"
      :href="props.downloadLink"
      target="_blank"
    >
      <div class="w:32 h:32">
        <PhDownload
          color="white"
          class="width:32 height:32"
        />
      </div>
    </a>
  </div>
</template>
<script lang="ts" setup>
import {PhDownload} from '@phosphor-icons/vue';
import {siYoutube} from 'simple-icons';

const props = defineProps<{
  downloadLink: string,
  ytLink: string,
}>();
</script>
