<template>
  <a
    :href="props.href"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button
      class="cybr-btn color:white text:uppercase font:2rem bg:transparent outline:transparent letter-spacing:2px position:relative font:bold width:300px height:75px {bg:linear-gradient(0,red-20,red-52);content:'';position:absolute;top:0;right:0;left:0;bottom:0;clip-path:polygon(0|0,100%|0,100%|100%,95%|100%,95%|90%,85%|90%,85%|100%,8%|100%,0|70%);z-index:-1}:after z-index:100 bg:linear-gradient(0,red-10,red-30):hover:after"
    >
      <div
        class="width:25px height:25px m:5px fill:red-60 position:absolute top:2 left:2"
        v-html="props.webIcon.svg"
      />
      <slot />
    </button>
  </a>
</template>

<script lang="ts" setup>
import type {SimpleIcon} from 'simple-icons';

const props = defineProps<{
  webIcon: SimpleIcon;
  href: string;
}>();
</script>

<style scoped>
.cybr-btn {
  font-family: "Cyber", sans-serif;
}
</style>
