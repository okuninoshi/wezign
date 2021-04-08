<template>
  <v-row justify="center">
     <v-col cols="12" md="8">
      <SignUpForm />
      <div>
        Already got an account? <NuxtLink to="/login">Login</NuxtLink>
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
