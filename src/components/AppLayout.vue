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
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

export default {
  name: "AppLayout",
  components: {
    TheHeader,TheFooter,
  },
}
</script>

<style scoped>
main{
  height: auto;
  //overflow: auto;
}
</style>