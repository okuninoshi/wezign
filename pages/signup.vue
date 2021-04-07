<template>
  <v-row justify="center">
     <v-col cols="12" md="8">
      <SignUpForm />
    </v-col>
    <v-col cols="12">
      <div class="mt-4">
          Already got an account? <nuxt-link to="/login">Login</nuxt-link>
      </div>
    </v-col>
  </v-row>
</template>

<script>

export default {
}
</script>

<style scoped>
.row{
  padding: 0 3vw;
}
</style>
