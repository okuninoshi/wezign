<template>
  <div class="text-center my-8">
    <v-alert
      v-if="error !== null"
      dismissible
      elevation="7"
      outlined
      type="error"
      transition="scale-transition" 
    >
      {{ error }}
    </v-alert>
    <h2 class="mb-8">Register</h2>
    <form @submit.prevent="register">
      <div>
        <v-text-field
          v-model="email"
          type="email"
          label="email"
          :rules="[rules.required, rules.email]"
          filled
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          v-model="username"
          type="text"
          label="username"
          :rules="[rules.required]"
          filled
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          v-model="password"
          type="password"
          label="password"
          :rules="[rules.required, rules.counter]"
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
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length >= 8 || 'min 8 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
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
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
}
</script>

<style scoped>
.button-container{
 margin-top: 1vh;
}
</style>
