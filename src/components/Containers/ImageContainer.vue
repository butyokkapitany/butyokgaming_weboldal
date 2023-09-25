<template>
  <div class="m:16 box-shadow:2px|2px|2px|black">
    <img
      :src="props.src.src"
      :alt="props.alt"
      class="max-width:100% height:auto"
    >
  </div>
</template>

<script lang="ts" setup>
import type {ImageMetadata} from 'astro';
const props = defineProps<{
    src: ImageMetadata,
    alt: string
}>();
</script>
