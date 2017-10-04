<template>
<panel title="View Song">
  <v-layout>
    <v-flex xs6>
      <div class="song-title">
      {{song.title}}
      </div>
      <div class="song-artist">
      {{song.artist}}
      </div>
      <div class="song-genre">
      {{song.genre}}
      </div>
      <v-btn
        tag="button"
        :to="{
          name:'edit-song',
          params:{
            songId:song.id
          }
        }"
        class="cyan white--text">
        Edit
      </v-btn>
      <v-btn
        tag="button"
        class="cyan white--text"
        @click="setAsBookmark"
        v-if="isUserLoggedIn && !bookmark">
        Set As Bookmark
      </v-btn>
      <v-btn
        tag="button"
        class="cyan white--text"
        @click="unbookmark"
        v-if="isUserLoggedIn && bookmark">
        Unset Bookmark
      </v-btn>
    </v-flex>
    <v-flex xs6>
      <img class="album-image" :src="song.albumImageUrl"/>
      <br>
      {{song.album}}
    </v-flex>
  </v-layout>
</panel>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'
export default {
  props: [
    'song'
  ],
  data () {
    return {
      bookmark: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  watch: {
    async song  () {
      if (!this.isUserLoggedIn) {
        return
      }
      try {
        const bookmarks = (await BookmarksService.index({
          songid: this.song.id,
          userid: this.user.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      } catch (err) {
        console.log(err)
      }
    }
  },
  methods: {
    async setAsBookmark () {
      try {
        this.bookmark = (await BookmarksService.post({
          songid: this.song.id,
          userid: this.user.id
        })).data
      } catch (err) {
        console.log(err)
      }
    },
    async unbookmark () {
      try {
        await BookmarksService.delete(this.bookmark.id)
        this.bookmark = null
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-title {
  font-size: 24px;
}
.song-artist {
  font-size: 20px;
}
.song-genre {
  font-size: 16px;
}
.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
