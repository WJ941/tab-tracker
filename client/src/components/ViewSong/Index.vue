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
import SongHistoryService from '@/services/SongHistoryService'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Lyrics from './Lyrics'
import {mapState} from 'vuex'
import Tab from './Tab'
export default {
  data () {
    return {
      song: {}
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const songId = this.route.params.songId
    this.song = (await SongsService.show(songId)).data

    if (this.isUserLoggedIn) {
      await SongHistoryService.post({
        userid: this.user.id,
        songid: songId
      })
    }
  },
  components: {
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