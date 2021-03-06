// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
import {sync} from 'vuex-router-sync'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import PageHeader from '@/components/Header.vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/globals/Panel.vue'

Vue.config.productionTip = false

sync(store, router)

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)
Vue.component('panel', Panel)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App, Login, Register, PageHeader }
})
