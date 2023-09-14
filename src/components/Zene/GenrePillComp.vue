<template>
  <div
    class="min-width:50px text:center font-weight:700 uppercase font-size:16"
    :class="`color:${props.colorName}-70`"
  >
    <label
      class="border-radius:20 p:0|10"
      :class="`border:2px|solid|${props.colorName}-44 `"
    >{{ props.genre }}</label>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
    colorName: string,
    genre: string,
}>();
</script>
