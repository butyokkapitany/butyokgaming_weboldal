<template>
  <img
    :src="props.imgSrc"
    alt="Cover Image"
    class="h:8rem"
  >
</template>

<script lang="ts" setup>
const props = defineProps<{
  imgSrc: string
}>();
</script>
