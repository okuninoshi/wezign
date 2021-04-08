<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-alert
          color="#ddd"
          border="left"
          colored-border
          icon="mdi-bell"
        >
        <h2>
          You have
          <strong>{{ numberOfValidProduct }}</strong>
          valid products
        </h2>
        </v-alert>
      </v-col>
      <v-col cols="12" class="text-center">
        <v-alert
          color="#ddd"
          border="left"
          colored-border
          icon="mdi-chart-bar"
        >
        <h2>
          You have submited
          <strong>{{ allProducts.length }}</strong>
          products
        </h2>
        </v-alert>
      </v-col>
      <v-col cols="12" class="mt-8 text-center">
        <v-btn nuxt outlined to="/validation" class="py-5">
          validate a new product &nbsp;
          <v-icon dark>mdi-arrow-right</v-icon>
        </v-btn>
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
    },
    allProducts: function () {
      const allProduct = this.products;
      return allProduct
    }
  },
  async mounted () {
    try {
      const response = await this.$axios.get('https://valimage.herokuapp.com/products')
      this.products = response.data
    } catch (error) {
      this.error = error;
    }
  }
}
</script>
<style scoped>

</style>