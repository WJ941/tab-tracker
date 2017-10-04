<template>
  <v-layout>
    <v-flex xs5>
      <panel title="Song Metadata">
        <v-text-field
          label="Title"
          type="text"
          required
          :rules="[rules.required]"
          v-model="song.title"
        ></v-text-field>
        <v-text-field
          label="Artist"
          type="text"
          :rules="[rules.required]"
          v-model="song.artist"
        ></v-text-field>
        <v-text-field
          label="Genre"
          type="text"
          :rules="[rules.required]"
          v-model="song.genre"
        ></v-text-field>
        <v-text-field
          label="Album"
          type="text"
          :rules="[rules.required]"
          v-model="song.album"
        ></v-text-field>
        <v-text-field
          label="Album Image Url"
          type="text"
          :rules="[rules.required]"
          v-model="song.albumImageUrl"
        ></v-text-field>
        <v-text-field
          label="Youtube Id"
          type="text"
          :rules="[rules.required]"
          v-model="song.youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>

    <v-flex xs7>
      <panel title="Song Structure" class="ml-2">
        <v-text-field
          label="Tab"
          multi-line
          :rules="[rules.required]"
          v-model="song.tab"
        ></v-text-field>
        <v-text-field
          label="Lyrics"
          multi-line
          :rules="[rules.required]"
          v-model="song.lyrics"
        ></v-text-field>
      </panel>
      <div class="dange-alert">{{error}}</div>
      <v-btn @click="createSong"  class="cyan white--text">
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>  
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImageUrl: '',
        youtubeId: '',
        tab: '',
        lyrics: ''
      },
      error: null,
      rules: {
        required: (value) => !!value || 'Required'
      }
    }
  },
  methods: {
    async createSong () {
      this.error = null
      const areAllFieldsFilledIn = Object
      .keys(this.song)
      .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please Fill in the Fields'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
