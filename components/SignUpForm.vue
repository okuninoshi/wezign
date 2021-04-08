<template>
  <div class="text-center my-8">
    <div v-show="error !== ''">
      <p>{{ error }}</p>
    </div>
    <form @submit.prevent="register">
      <div>
        <v-text-field
          v-model="email"
          type="email"
          label="email"
          filled
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          v-model="username"
          type="text"
          label="username"
          filled
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          v-model="password"
          type="password"
          label="password"
          filled
        ></v-text-field>
      </div>
      <div class="button-container">
        <v-btn
          color="snow"
          width="100%"
          large
          :disabled="email === '' || password === '' || username === ''"
          type="submit"
        >
          Signup
        </v-btn>
      </div>
    </form>
  </div>
</template>
<script>
export default {
   data() {
    return {
      email: "",
      username: "",
      password: "",
      success: null,
      error: null,
    };
  },
  methods: {
    async register() {
      this.error = null;
      try {
        this.$axios.setToken(false);
        await this.$axios.post('https://valimage.herokuapp.com/auth/local/register', {
          username: this.username,
          email: this.email,
          password: this.password,
        });
        this.$nuxt.$router.push('/profile')
      } catch (e) {
        this.error = "username already taken"
        console.log(e)
      }
    },
  },
}
</script>

<style scoped>
.button-container{
 margin-top: 5vh;
}
</style>
