import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import AlertComponent from './components/Shared/Alert.vue'

import { solid } from '@/solid'

Vue.config.productionTip = false
Vue.component('app-alert', AlertComponent)


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
  created () {
    solid.initializeApp({
      storage: 'https://parle.solid.community/',
      folder: 'public/test/'
    })
    console.log(solid)
    firebase.initializeApp({
      apiKey: 'AIzaSyBiqUbF0rN5LUD9G9msHN4xHF3f00MpOFE',
      authDomain: 'mutfak-chat.firebaseapp.com',
      databaseURL: 'https://mutfak-chat.firebaseio.com',
      projectId: 'mutfak-chat',
      storageBucket: 'mutfak-chat.appspot.com'
    })
  }
}).$mount('#app')
