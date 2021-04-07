<template>
  <v-row justify="center">
    <v-col cols="12" class="d-flex justify-center">
      <div class="success" v-if="success">
        Great! Your product has been sent to validation.
      </div>
    </v-col>
    <v-col cols="12" md="8">
      <form ref="uploadForm" @submit.prevent="addProduct">
        <v-text-field
          clearable
          v-model="name"
          required
          filled
          name="name"
          type="text"
          label="product name"
        ></v-text-field>
        <!-- <input
          name="image"
          type="file"
          accept="image/*"
          capture="environment"
        /> -->
        <v-file-input
         class="my-8"
          name="image"
          accept="image/*"
          capture="environment"
          append-icon="mdi-camera"
          label="product image"
          filled
          required
        ></v-file-input>
        <input
          name="isValid"
          v-model="isValid"
          hidden
        />
        <v-btn width="100%" large outlined type="submit" name="submit" color="secondary"> Send </v-btn>
      </form>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      loading: false,
      success: false,
      errored: false,
      name: "",
      isValid: false,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  methods: {
    addProduct() {
      let form = this.$refs["uploadForm"];
      let formData = new FormData();
      let formElements = form.elements;
      let data = {};
      this.loading = true;
      formElements.forEach(currentElement => {
        if (!["submit", "file"].includes(currentElement.type)) {
          data[currentElement.name] = currentElement.value;
        } else if (currentElement.type === "file") {
          if (currentElement.files.length === 1) {
            const file = currentElement.files[0];
            formData.append(`files.${currentElement.name}`, file, file.name);
          } else {
            for (let i = 0; i < currentElement.files.length; i++) {
              const file = currentElement.files[i];
              formData.append(`files.${currentElement.name}`, file, file.name);
            }
          }
        }
      });
      formData.append("data", JSON.stringify(data));
      this.$axios({
        method: "post",
        url: "http://localhost:1337/products",
        data: formData,
        headers: { 
          "Content-Type": "multipart/form-data",
          'Authorization': `${this.$auth.$storage._state["_token.local"]}`
          },
      })
      .then(res => this.success = res.status )
      .catch(error => {
        this.errored = true
        console.log(error)
      })
      .finally(() => {
        this.loading = false
      });
    }
  },
}
</script>

<style scoped>

.row{
  margin-left: auto;
}
form{
  padding:5vh 5vw;
}
.success{
  color: yellowgreen;
}
</style>
