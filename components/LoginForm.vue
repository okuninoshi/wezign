<template>
  <div class="text-center my-12">
    <div v-show="error !== ''" class="p-3 ">
      <p>{{ error }}</p>
    </div>
    <h1 class="my-8">Login</h1>
    <form method="post" @submit.prevent="login">
      <div>
        <v-text-field
          label="Email"
          v-model="identifier"
          type="email"
          filled
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          label="password"
          v-model="password"
          type="password"
          filled
        ></v-text-field>
      </div>
      <div class="button-container">
        <v-btn
          :disabled="identifier === '' || password === ''"
          outlined
          large
          width="100%"
          type="submit"
        >
          Login
        </v-btn>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      identifier: '',
      password: '',
      error: '',
    }
  },
  methods: {
    async login() {
      this.error = null;
      try {
        await this.$auth.loginWith("local", {
          data: {
            identifier: this.identifier,
            password: this.password,
          },
        });
        this.$router.push("/");
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
}
</script>
<style>
.button-container{
 margin-top: 3vh;
}
</style>