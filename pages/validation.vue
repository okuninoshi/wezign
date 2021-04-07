<template>
  <v-container>
    <v-row v-if="!isAuthenticated">
        <h1 style="color: crimson"> you need to login to be able to send images</h1>
    </v-row>
    <v-row v-if="isAuthenticated">
      <v-col cols="12" class="text-center">
        <ProductForm />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      error: null,
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  mounted() {
    !this.isAuthenticated && this.$nuxt.$router.push('/login')
  }
}
</script>
<style></style>