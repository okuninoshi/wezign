<template>
  <div>
    <v-row v-if="!isAuthenticated">
        <v-alert type="error" dismissible transition="scale-transition" > you need to login to be able to send images</v-alert>
    </v-row>
    <v-row v-if="isAuthenticated">
      <v-col cols="12">
        <ProductForm />
      </v-col>
    </v-row>
  </div>
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