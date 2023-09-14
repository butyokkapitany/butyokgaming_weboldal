<template>
  <div
    :class="`box-shadow:0|0|20px|${props.color}:hover`"
    class="bg:gray-4 border-radius:40px min-width:250px transform:scale(1.02):hover transition:all|200ms|ease"
  >
    <h3
      :class="`color:${props.color}`"
      class="text:center text:uppercase font:bold padding:24 font-size:32"
    >
      {{ props.socialSiteName }}
    </h3>
    <div
      :class="`fill:${props.color}`"
      class="width:100px height:100px margin:0|auto"
      v-html="icon.svg"
    />
    <p class="color:gray-80 text:center pt:24 font-size:40 font:bold">
      {{ props.socialCount }}
    </p>
    <p class="color:red-52 text:center font:bold font:32">
      Követő
    </p>
    <ButtonComponent
      :color="props.color"
      :href="props.website"
      text="Megtekintés"
      class="text:center p:24"
    />
  </div>
</template>

<script setup lang="ts">
import type {SimpleIcon} from 'simple-icons';
import ButtonComponent from '../ButtonComponent.vue';

const props = defineProps<{
    website: string,
    icon: SimpleIcon,
    socialSiteName: string,
    socialCount: string,
    color:string,
}>();
</script>
