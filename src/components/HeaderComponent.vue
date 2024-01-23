<template>
  <div
    :class="`background-image:url('${background.src}')`"
    class="background-repeat:no-repeat background-position:bottom height:600px"
  >
    <div class="text:center position:absolute top:10% width:100%">
      <h1 class="color:red-60 font:6rem">
        Bütyök Kapitány
      </h1>
      <p class="color:gray-20 font:2rem">
        Streamer, tartalomgyártó
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import background from '../assets/background_transparent.webp';
</script>
