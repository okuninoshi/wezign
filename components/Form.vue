<template>
  <form class="VueToNuxtLogo">
    <label for="image">take a product image</label>
    <input id="image" type="file" accept="image/*" capture="environment">
  </form>
</template>

<style>
form {
    width: 90vw !important;
    margin: auto !important;
    padding: 5vh 0;
    display: flex;
    flex-direction: column;
}
input{
    padding-top: 3vh;
}
</style>
