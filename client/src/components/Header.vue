<template>
  <v-toolbar fixed class="cyan">
    <v-toolbar-title >
      <router-link to="index">
        TabTracker
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items >
      <v-btn flat class="white--text">Browse</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn 
        @click="navigateTo('register')"
        flat class="white--text"
        v-if="!$store.state.isUserLoggedIn">
        Sign up
      </v-btn>
      <v-btn
        @click="navigateTo('login')"
        flat class="white--text"
        v-if="!$store.state.isUserLoggedIn">
        Login
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
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>

</style>
