<template>
  <v-row justify="center" align="center">
    <v-col cols="12" style="padding:5vh 5vw;">
      <v-divider></v-divider>
      <h1 v-if="this.isAuthenticated" class="text-center">welcome {{ loggedInUser.username }}.</h1>
    </v-col>
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
