<template>
  <v-row justify="center" align="center">
    <v-col cols="12" style="padding:5vh 5vw;">
      <h1>Product validation form.</h1>
    </v-col>
    <v-col cols="12">
      <Form />
    </v-col>
  </v-row>
</template>

<script>
import Form from '~/components/Form.vue' 

export default {
  components: {
    Form
  },
}
</script>
