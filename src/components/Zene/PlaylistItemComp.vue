<template>
  <div
    class="d:flex align-items:center gap:14 p:4|4 color:white bg:gray-10:odd transition:all|200ms|ease-out flex-wrap:wrap@<2xs"
    :class="`box-shadow:inset|0px|0px|20px|${props.pillColorName}-40:hover bg:${props.pillColorName}-8:hover`"
  >
    <div>
      <CoverComp :img-src="props.imgSrc.src" />
    </div>
    <p class="font-weight:700 font-size:24 flex-basis:30%">
      {{ props.songTitle }}
    </p>
    <p class="display:none@<sm color:gray-80 font-size:1.2rem flex-basis:10%">
      {{ props.albumName }}
    </p>
    <p class="display:none@<sm color:gray-80 flex-basis:10%">
      {{ props.albumYear }}
    </p>
    <div class="flex-basis:50%">
      <GenrePillComp
        :color-name="props.pillColorName"
        :genre="props.songGenre"
      />
    </div>
    <div class="">
      <WidgetComp
        :download-link="props.dlLink"
        :yt-link="props.ytLink"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CoverComp from './CoverComp.vue';
import GenrePillComp from './GenrePillComp.vue';
import WidgetComp from './WidgetComp.vue';
import type {ImageMetadata} from 'astro';

const props = defineProps<{
  ytLink: string;
  dlLink: string;
  imgSrc: ImageMetadata;
  songTitle: string;
  albumName: string;
  albumYear: number;
  pillColorName: string;
  songGenre: string;
}>();
</script>
