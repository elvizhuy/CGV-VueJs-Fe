<template>
  <div class="container d-flex justify-content-center">
    <div class="title-movie-selection d-flex justify-content-center">
      <img src="../../public/assets/logo/h3_movie_selection.gif" alt="" />
    </div>
    <div class="movie-select-carousel">
      <carousel :autoplay="true" :items="4">
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/22_700x1000pxl.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/406x600_1_6.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/800x1000-someday-or-oneday.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/avatar_2_payoff_posster_2_.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/b_o_thai_qu_d_-payoff_poster-ng_y_kh_i_chi_u__10.02.2023.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/babylon-700x1000px.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/ch_ch_em_em_2_-_payoff_poster_-_dkkc_22012023_1_.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/fb_poster.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/fbm-key-poster.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/katc_700x1000px_1_.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/m3g_tsrintl1sheet1_1080x1350pxh_rgb_2.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/maenak-poster.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/main_poster-no-o-trong-rung.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/main_poster_4x5-plane.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/main_poster_700x1000-kola.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/nbn_main-poster_2_1_.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/poster_ditto_1_.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/poster_50x70cm_swo_1_.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/poster_mummies_1_.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/poster_pororo_1_.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/poster_tam.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/puss_in_boots_30.12.22_700x1000px.png"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/rsz_poster.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/teyilb.jpg"
        />
        <img
          class="img-fluid"
          src="../../public/assets/slide/movie-selection/tmtwly.jpg"
        />
      </carousel>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  components: { carousel },
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
