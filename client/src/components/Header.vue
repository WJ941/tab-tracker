<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-title >
      <router-link to="index">
        TabTracker
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items >
      <v-btn 
        flat 
        class="white--text"
        @click="navigateTo('songs')">
        Browse
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn 
        @click="navigateTo('register')"
        flat class="white--text"
        v-if="!$store.state.isUserLoggedIn">
        Sign Up
      </v-btn>
      <v-btn
        @click="navigateTo('login')"
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
    navigateTo: function (route) {
      this.$router.push({
        name: route
      })
    },
    logout: function () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'index'
      })
    }
  }
}
</script>

<style scoped>

</style>
