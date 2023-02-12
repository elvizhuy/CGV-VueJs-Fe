<template>
  <div
    class="container d-flex flex-column justify-content-center"
    style="width: 1050px"
  >
    <div class="title d-flex flex-row align-items-center">
      <div
        class="title-movie-selection d-flex justify-content-center"
      ></div>
      <div class="img-movie-s">
        <img src="../../public/assets/logo/h3_movie_selection.gif" alt="" />
      </div>
      <div
        class="title-movie-selection d-flex justify-content-center"
      ></div>
    </div>

    <div id="movie-select-carousel " class="container">
      <carousel id="movie-carousel-mini-slide" :items-to-show="4">
        <slide v-for="(slide, index) in slides" :key="index">
          <div class="img-slide-show">
            <img class="img-fluid" :src="slide.img" />
          </div>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
// import carousel from "vue-owl-carousel";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  data() {
    return {
      slides: [
        { id: 1, img: "/assets/slide/movie-selection/tmtwly.jpg" },
        { id: 2, img: "/assets/slide/movie-selection/teyilb.jpg" },
        { id: 3, img: "/assets/slide/movie-selection/rsz_poster.jpg" },
        {
          id: 4,
          img: "/assets/slide/movie-selection/puss_in_boots_30.12.22_700x1000px.png",
        },
        { id: 5, img: "/assets/slide/movie-selection/poster_tam.jpg" },
        { id: 6, img: "/assets/slide/movie-selection/poster_pororo_1_.jpg" },
        { id: 7, img: "/assets/slide/movie-selection/poster_mummies_1_.jpg" },
        {
          id: 8,
          img: "/assets/slide/movie-selection/poster_50x70cm_swo_1_.jpg",
        },
        { id: 9, img: "/assets/slide/movie-selection/poster_ditto_1_.jpg" },
        {
          id: 10,
          img: "/assets/slide/movie-selection/nbn_main-poster_2_1_.jpg",
        },
        {
          id: 11,
          img: "/assets/slide/movie-selection/main_poster_700x1000-kola.jpg",
        },
        {
          id: 12,
          img: "/assets/slide/movie-selection/main_poster_4x5-plane.jpg",
        },
        {
          id: 13,
          img: "/assets/slide/movie-selection/main_poster-no-o-trong-rung.jpg",
        },
        { id: 14, img: "/assets/slide/movie-selection/maenak-poster.jpg" },
        {
          id: 15,
          img: "/assets/slide/movie-selection/m3g_tsrintl1sheet1_1080x1350pxh_rgb_2.jpg",
        },
        { id: 16, img: "/assets/slide/movie-selection/katc_700x1000px_1_.jpg" },
        { id: 17, img: "/assets/slide/movie-selection/fbm-key-poster.jpg" },
        {
          id: 18,
          img: "/assets/slide/movie-selection/ch_ch_em_em_2_-_payoff_poster_-_dkkc_22012023_1_.jpg",
        },
        { id: 19, img: "/assets/slide/movie-selection/fb_poster.jpg" },
        { id: 20, img: "/assets/slide/movie-selection/babylon-700x1000px.jpg" },
        {
          id: 21,
          img: "/assets/slide/movie-selection/b_o_thai_qu_d_-payoff_poster-ng_y_kh_i_chi_u__10.02.2023.jpg",
        },
        {
          id: 22,
          img: "/assets/slide/movie-selection/avatar_2_payoff_posster_2_.jpg",
        },
        {
          id: 23,
          img: "/assets/slide/movie-selection/800x1000-someday-or-oneday.jpg",
        },
        { id: 24, img: "/assets/slide/movie-selection/406x600_1_6.jpg" },
        { id: 25, img: "/assets/slide/movie-selection/22_700x1000pxl.jpg" },
      ],
    };
  },
  components: { Carousel, Slide, Pagination, Navigation },
};
</script>

<style>
.title-movie-selection {
  background: url(../../public/assets/logo/bg_h3_line.jpg) repeat-x scroll left
    center rgba(0, 0, 0, 0);
  height: 60px;
  text-align: center;
  width: 270px;
  margin: 0 auto;
}
.title-movie-selection img {
  width: 400px;
  height: 45px;
}
#movie-selection-carousel {
  width: 1000px !important;
}
#movie-selection-carousel > .carousel__track > .carousel__slide {
  width: 250px;
  margin: 0;
  display: inline-block;
}
.img-slide-show {
  width: 240px;
  height: 330px;
}
</style>
