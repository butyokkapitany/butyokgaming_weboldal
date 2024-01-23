<template>
  <div class="p:10 position:relative">
    <a
      :href="props.to"
      class="{height:5px;content:'';width:100%;margin:0px|auto;right:0px;bottom:0px;bg:red-50;position:absolute;transform:scaleX(0);transition:transform|200ms|ease;}:after
    transform:scaleX(1):hover:after color:white cursor:pointer font-weight:700"
    >
      <slot />
    </a>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{to: string}>();
</script>
