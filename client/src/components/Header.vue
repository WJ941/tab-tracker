<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-title >
      <router-link 
      :to="{
        name: 'songs'
      }"
      class="white--text">
        TabTracker
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items >
      <v-btn 
        flat
        tag="span"
        class="white--text"
        :to="{
          name: 'songs'
        }">
        Browse
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        tag="span"
        :to="{
          name: 'register'
        }"
        flat class="white--text"
        v-if="!$store.state.isUserLoggedIn">
        Sign Up
      </v-btn>
      <v-btn
        tag="span"
        :to="{
          name: 'login'
        }"
        flat class="white--text"
        v-if="!$store.state.isUserLoggedIn">
        Log In
      </v-btn>
      <v-btn
        @click="logout"
        flat class="white--text"
        v-if="$store.state.isUserLoggedIn">
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'songs'
      })
    }
  }
}
</script>

<style scoped>

</style>
