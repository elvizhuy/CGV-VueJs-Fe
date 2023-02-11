<template>
  <header id="header">
    <the-header></the-header>
  </header>
  <main id="main-page">
    <the-detail-list></the-detail-list>
    <div id="wrapper" class="wrapper">
     <the-carousel></the-carousel>
    </div>
  </main>
  <footer>
    <the-footer></the-footer>
  </footer>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import TheDetailList from "./components/TheDetailList.vue";
import TheCarousel from './components/TheCarousel.vue';

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
    TheDetailList,
    TheCarousel,
    
  },
};
</script>

<style>
.wrapper {
  display: flex;
  justify-content: center;
  background: url(../public/assets/slide/bg_c_bricks.png);
}
</style>
