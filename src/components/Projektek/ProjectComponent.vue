<template>
  <div class="width:300px height:auto bg:gray-4 p:16 r:40px">
    <div class="bg:gray-2/.1 shadow:0px|0px|5px|red-52/.5 p:16 r:40px height:100%">
      <h2 class="color:gray-96 text:center mb:32">
        {{ props.title }}
      </h2>
      <img
        class="width:100% height:auto"
        :src="props.imageSrc.src"
        :alt="props.altTxt"
      >
      <div class="text:center color:gray-96 p:16 font:1.3rem link-style">
        <slot />
      </div>
      <div
        v-if="props.usedTechs"
        class="flex flex-wrap:wrap gap:8 justify-content:center m:8"
      >
        <div
          v-for="tech in props.usedTechs"
          :key="tech"
        >
          <SkillPillComponent>{{ tech }}</SkillPillComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {ImageMetadata} from 'astro';
import SkillPillComponent from '../SkillPillComponent.vue';

const props = defineProps<{
  imageSrc: ImageMetadata,
  altTxt: string,
  title: string,
  usedTechs?: string[];
}>();
</script>
