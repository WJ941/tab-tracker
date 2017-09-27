<template>
  <panel title="Songs">
  <router-link :to="{name: 'create-song'}" slot="action">
    <v-btn icon>
      <v-icon>add</v-icon>
    </v-btn>
    </router-link>
    <div v-for="song in songs" :key="song.id" class="song">
      <v-layout>

        <v-flex xs6>
          <div class="song-title">
          {{song.title}}
          </div>
          <div class="song-artist">
          {{song.artist}}
          </div>
          <div class="song-album">
          {{song.album}}
          </div>
        </v-flex>

        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl"/>
        </v-flex>
      </v-layout>
      <v-btn
        tag="button"
        :to="{
          name: 'song',
          params: {
            songId: song.id
          }
        }"
        class="cyan white--text">
        View Song
      </v-btn>
    </div>
  </panel>
</template>


<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
        console.log(value)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-album {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
