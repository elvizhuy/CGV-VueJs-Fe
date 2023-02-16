<template>
  <header id="header">
    <the-header></the-header>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <the-footer></the-footer>
  </footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  name: "App",
  components: {
    TheHeader,TheFooter,
  },
  
};
</script>

<style scoped>

</style>
