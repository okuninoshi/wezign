<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app elevation="0" elevate-on-scroll>
      <div>
        <NuxtLink to="/" exact outlined> Home </NuxtLink>
        <NuxtLink v-if="isAuthenticated" to="/profile" exact>profile</NuxtLink>
      </div>
      <v-spacer></v-spacer>
      <!-- <span class="avatar" v-if="isAuthenticated">
        <v-avatar
          color="secondary"
          size="35"
        >
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>
        {{loggedInUser.username}}
      </span> -->
      <v-btn v-if="isAuthenticated" outlined color="#F40009" @click="logout"> Logout </v-btn>
    </v-app-bar>
    <v-main style="padding-top: 15vh;">
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span> Valimage &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      clipped: false,
      fixed: false,
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  methods:{
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>
<style>
.v-toolbar{
  padding: 0 3vw;
}
h1 {
  font-size: calc(1.825rem + 2vw);
}
a{
  text-decoration: none;
  margin:0 1vw;
  color: #cccc00 !important;
}
.nuxt-link-active {
  text-decoration: underline !important;
}
/* .avatar{
  margin-right: 3vw;
} */
</style>