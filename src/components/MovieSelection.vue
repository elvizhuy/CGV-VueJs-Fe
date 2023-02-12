<template>
  <div class="container d-flex justify-content-center">
    <div class="title-movie-selection d-flex justify-content-center">
      <img src="../../public/assets/logo/h3_movie_selection.gif" alt="" />
    </div>
  </div>
  <div class="movie-select-carousel">
    <!-- <div class="owl-carousel owl-theme">
    <div class="item"><h4>1</h4></div>
    <div class="item"><h4>2</h4></div>
    <div class="item"><h4>3</h4></div>
    <div class="item"><h4>4</h4></div>
    <div class="item"><h4>5</h4></div>
    <div class="item"><h4>6</h4></div>
    <div class="item"><h4>7</h4></div>
    <div class="item"><h4>8</h4></div>
    <div class="item"><h4>9</h4></div>
    <div class="item"><h4>10</h4></div>
    <div class="item"><h4>11</h4></div>
    <div class="item"><h4>12</h4></div> -->
    <carousel :autoplay="true" :nav="false">
      <img src="https://placeimg.com/200/200/any?1" />

      <img src="https://placeimg.com/200/200/any?2" />

      <img src="https://placeimg.com/200/200/any?3" />

      <img src="https://placeimg.com/200/200/any?4" />
    </carousel>
  </div>
  <!-- </div> -->
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  component: { carousel },
};
</script>

<style>
.title-movie-selection {
  background: url(../../public/assets/logo/bg_h3_line.jpg) repeat-x scroll left
    center rgba(0, 0, 0, 0);
  height: 60px;
  text-align: center;
  width: 975px;
}
.title-movie-selection img {
  width: 400px;
  height: 45px;
}
</style>
