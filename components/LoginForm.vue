<template>
  <div class="text-center">
    <div v-if="error !== ''">
      <v-alert
          dismissible
          elevation="7"
          outlined
          type="error"
          transition="scale-transition"
        >
        {{ error }}
      </v-alert>
    </div>
    <h2 class="mb-8 mt-4">Login</h2>
    <form method="post" @submit.prevent="login">
      <div>
        <v-text-field
          label="Email"
          v-model="identifier"
          type="email"
          :rules="[rules.required, rules.email]"
          filled
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          label="password"
          v-model="password"
          type="password"
          :rules="[rules.required]"
          filled
        ></v-text-field>
      </div>
      <div class="button-container">
        <v-btn
          :disabled="identifier === '' || password === ''"
          outlined
          large
          color="#FFA500"
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      identifier: '',
      password: '',
      error: '',
      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
    }
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  methods: {
    async login() {
      this.error = null;
      try {
        await this.$auth.loginWith('local', {
          data: {
            identifier: this.identifier,
            password: this.password,
          },
        });
        if (this.isAuthenticated){
          this.$router.push("/");
        }
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    },
  },
}
</script>
<style>
.button-container{
 margin-top: 1vh;
}
</style>