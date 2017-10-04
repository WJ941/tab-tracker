<template>
  <div id="app">
  <v-app>
    <page-header/>
    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>
    <v-footer></v-footer>
  </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'app',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.input-group__details:before {
  background-color: rgba(0,0,0,.42);
}
a {
  text-decoration: none;
}
.danger-alert {
  color: #f00;
}
</style>
