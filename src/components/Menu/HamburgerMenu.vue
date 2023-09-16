<template>
  <div class="display:flex justify-content:end">
    <button
      aria-label="Menü Gomb"
      tabindex="0"
      @click="showMenu()"
    >
      <PhList
        color="white"
        class="width:40px height:40px"
      />
    </button>
    <div
      :class="{'hidden': menuClosed}"
      class="width:250 bg:gray-10/.95 transition:all|300ms|ease position:absolute top:40px z-index:100 text:center"
    >
      <MenuItemsList />
    </div>
    <div
      class="position:absolute bottom:0 right:0 top:50px left:0"
      :class="{'hidden': menuClosed}"
      @click="showMenu()"
    />
  </div>
</template>

<script lang="ts" setup>
import MenuItemsList from './MenuItemsList.vue';
import {PhList} from '@phosphor-icons/vue';

import {ref} from 'vue';

const menuClosed = ref(true);

function showMenu() {
	menuClosed.value = !menuClosed.value;
}
</script>
