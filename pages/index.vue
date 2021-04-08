<template>
  <v-row justify="center" align="center">
    <v-col cols="12" style="padding:3vh 3vw;">
      <h1 v-if="this.isAuthenticated" class="text-center">Welcome {{ loggedInUser.username }}.</h1>
      <v-divider></v-divider>
    </v-col>
    <v-btn nuxt larg outlined v-if="this.isAuthenticated" to="/profile" exact>
      Profile &nbsp; <v-icon dark> mdi-arrow-right </v-icon>
    </v-btn>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  mounted() {
    !this.isAuthenticated && this.$nuxt.$router.push('/signup')
  }
}
</script>

<style scoped>
.col {
  padding: 5vh 5vw;
}
</style>
