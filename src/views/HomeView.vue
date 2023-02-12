<template>
  <the-detail-list></the-detail-list>
    <div id="wrapper" class="wrapper">
      <the-carousel></the-carousel>
    </div>
    <movie-selection></movie-selection>
    <events-of-cgv></events-of-cgv>
</template>

<script>
import TheDetailList from "../components/TheDetailList.vue";
import TheCarousel from "../components/TheCarousel.vue";
import MovieSelection from '@/components/MovieSelection.vue';
import EventsOfCgv from '@/components/EventsOfCgv.vue';
export default {
    name: "App",
  components: {
    TheDetailList,
    TheCarousel,
    MovieSelection,
    EventsOfCgv,
  },
}
</script>

<style>
.wrapper {
  display: flex;
  justify-content: center;
  background: url(../../public/assets/slide/bg_c_bricks.png);
}
</style>