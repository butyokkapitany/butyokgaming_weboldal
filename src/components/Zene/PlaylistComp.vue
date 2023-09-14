<template>
  <div class="mt:16">
    <PlaylistItemComp
      v-for="song in musicList"
      :key="song.id"
      :img-src="song.coverImg"
      :song-title="song.songTitle"
      :album-name="song.songAlbum"
      :album-year="song.songYear"
      :pill-color-name="song.genreColorName"
      :song-genre="song.songGenre"
      :dl-link="song.downloadLink"
      :yt-link="song.ytLink"
    />
  </div>
</template>

<script lang="ts" setup>
import PlaylistItemComp from './PlaylistItemComp.vue';
import {musicList} from './MusicList';
</script>
