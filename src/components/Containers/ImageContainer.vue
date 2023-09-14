<template>
  <div class="m:16 box-shadow:2px|2px|2px|black">
    <img
      :src="props.src"
      :alt="props.alt"
      class="max-width:100% height:auto"
    >
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    src: string,
    alt?: string
}>();
</script>
