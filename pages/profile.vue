<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1>
          you have
          <span>{{ numberOfValidProduct }}</span>
          valid products
        </h1>
        <div class="mt-8">
          <v-btn nuxt plain to="/validation" class="py-5">
            validate a new product &nbsp;
            <v-icon dark>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  middleware: "auth",
  data() {
    return {
      user: this.$store.state.user,
      products: [],
      error: null,
    }
  },
  computed: {
    ...mapGetters(["loggedInUser"]),
    numberOfValidProduct: function () {
      const validProducts = this.products.filter(product => product.isValid == true);
      const validProductCount = validProducts.length
      return validProductCount
    },
    validProducts: function () {
      const productIsValid = this.products.filter(product => product.isValid == true);
      return productIsValid
    }
  },
  async mounted () {
    try {
      const response = await this.$axios.get('http://localhost:1337/products')
      this.products = response.data
    } catch (error) {
      this.error = error;
    }
  }
}
</script>
<style scoped>

</style>