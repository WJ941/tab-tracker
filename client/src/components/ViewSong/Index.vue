<template>
<div>
  <v-layout>
    <v-flex xs6>
      <song-metadata :song="song">
      </song-metadata>
    </v-flex>

    <v-flex xs6 class="ml-2"> 
      <you-tube :youtubeId="song.youtubeId"/>
    </v-flex>
  </v-layout>
  <v-layout class="mt-4">
    <v-flex xs6 >
      <tab :tab="song.tab"/>
    </v-flex>

    <v-flex xs6 class="ml-2 ">
      <lyrics :lyrics="song.lyrics"/>
    </v-flex>
  </v-layout>
</div>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import Tab from './Tab'
export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
    console.log(songId, this.song.title)
  },
  components: {
    Panel,
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  overflow: auto;
  height: 600px;
  border: none;
  border-style: none;
  padding: 40px;
  font-family: monospace; 
}
</style>