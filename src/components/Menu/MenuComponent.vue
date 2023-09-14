<template>
  <MenuContainer>
    <DefaultMenu class="display:none@<=xs" />
    <HamburgerMenu class="display:none@>xs color:white" />
  </MenuContainer>
</template>

<script lang="ts" setup>
import MenuContainer from '../Containers/MenuContainer.vue';
import DefaultMenu from './DefaultMenu.vue';
import HamburgerMenu from './HamburgerMenu.vue';
</script>
