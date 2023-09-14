<template>
  <div>
    <a
      :href="props.href"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        :class="`bg:${props.color}`"
        class="text:uppercase text:center px:10px py:5px r:40px color:gray-94 font:bold"
      >
        {{ props.text }}
      </button>
    </a>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  text: string;
  color: string;
  href: string;
}>();
</script>
