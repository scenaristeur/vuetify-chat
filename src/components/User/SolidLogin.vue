<template>


    <div class="solid-login">
      <b-button variant="success" v-if="logged==false" @click="login">Login</b-button>
      <b-button variant="danger" v-else @click="logout">Logout</b-button>
    <!--  <div class="brute-hide">
        logged : {{ logged }}<br>
        webId : {{ webId }}<br>
        storage: {{ storage}}
        <hr>
      </div>-->

    </div>
<!--
    <hr>
      <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignin">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                    name="email"
                    label="E-mail"
                    id="email"
                    v-model="email"
                    type="email"
                    required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    v-model="password"
                    type="password"
                    required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex xs12>
                    <v-btn type="submit" :loading="loading">Login</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>-->
</template>

<script>
import auth from 'solid-auth-client';
/*import { fetchDocument } from 'tripledoc';
import { foaf } from 'rdf-namespaces';
console.log("FETCHDOCUMENT", fetchDocument)*/
//import '@solid/query-ldflex'
console.log("data",auth)


export default {
  name: 'SolidLogin',
  components: {
    auth,/* solidData*/
    //  componentName
  },
  data () {
    return {
      email: '',
      password: '',
      logged: false,
      webId: null,
      storage: "boo"
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/chat/0')
      }
    }
  },
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    },
    login(){
      this.popupLogin()
    },
    logout(){
      auth.logout()
    },
    async popupLogin() {
      let session = await auth.currentSession();
      let popupUri = 'https://solid.community/common/popup.html';
      if (!session)
      session = await auth.popupLogin({ popupUri });
      //  alert(`Logged in as ${session.webId}`);
    }
  },
  created(){
    auth.trackSession(async session => {
      if (!session){
        this.logged = false
        this.webId = null
        console.log('The user is not logged in', this.logged, this.webId)
        this.$store.dispatch('signUserIn', {email: this.webId, password: this.password})

      //  this.$store.commit('local/setWebId', this.webId)
      //  this.$store.commit('local/setStorage', "")
      }
      else{
        this.logged = true
        this.webId = session.webId
        console.log(`The user is ${session.webId}`)
          this.$store.dispatch('signUserIn', {email: `${session.webId}`, password: this.password})
      /*  this.$store.commit('local/setWebId', this.webId)
        let st  = await solid.data[session.webId].storage
        this.storage = `${st}`
        console.log(this.storage)
        this.$store.commit('local/setStorage', this.storage)*/
        /*  console.log("STORAGE",`${solid.data.user.storage}`)
        let st = `${solid.data.user.storage}`
        console.log("STORAGE",st)
        this.$store.commit('storage', st)*/
      }
    })
  },

}
</script>
