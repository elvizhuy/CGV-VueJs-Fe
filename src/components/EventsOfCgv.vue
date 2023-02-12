<template>
  <div
    class="container d-flex flex-column justify-content-center"
    style="width: 1050px"
  >
    <div class="title d-flex flex-row align-items-center">
      <div class="title-event d-flex justify-content-center"></div>
      <div class="img-event">
        <img src="../../public/assets/logo/h3_event.gif" alt="" />
      </div>

      <div class="title-event d-flex justify-content-center"></div>
    </div>

    <ul id="toggle-tabs" class="d-flex justify-content-center">
      <li class="current d-flex justify-content-center align-items-center">
        <span>News & Offers</span>
      </li>
      <li class="last d-flex justify-content-center align-items-center">
        <span>Member CGV</span>
      </li>
    </ul>

    <div id="event-carousel " class="container">
      <carousel id="movie-carousel-mini-slide" :items-to-show="4">
        <slide v-for="(slide, index) in slideContent" :key="index">
          <div class="img-event-slide-show">
            <img class="img-fluid" :src="slide.img" />
          </div>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>

    <div id="advertise" class="d-flex flex-row justify-content-center">
      <div class="advertise-img">
        <img src="../../public/assets/slide/event/214x245.jpg" alt="" />
      </div>
      <div class="advertise-img">
        <img
          src="../../public/assets/slide/event/z4000309245928_d4154c422300bb63354d6a8cfdf2b9f3.jpg"
          alt=""
        />
      </div>
      <div class="advertise-img">
        <img
          src="../../public/assets/slide/event/CGV-DIGITAL-HALL-RENTAL-214x245.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("slideContent");
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  computed: {
    ...mapState({
      slideContent: "slideImgs",
    }),
  },
  components: { Carousel, Slide, Pagination, Navigation },
};
</script>

<style>
.title-event {
  background: url(../../public/assets/logo/bg_h3_line.jpg) repeat-x scroll left
    center rgba(0, 0, 0, 0);
  height: 60px;
  text-align: center;
  width: 380px;
  margin: auto;
}
.title-event img {
  width: 170px;
  height: 45px;
}
#toggle-tabs {
  list-style: none;
  margin-top: 15px;
  widows: 400px;
  padding: 0;
}
#toggle-tabs > li:first-child {
  background: url(../../public/assets/logo/ribon_left_menu.gif) no-repeat scroll
    left 0 #e71a0f;
  padding-left: 19px;
}
#toggle-tabs > li.last {
  background: url(../../public/assets/logo/ribon_right.gif) no-repeat scroll
    right 0 #e71a0f;
  padding-right: 19px;
}
.current,
.last {
  width: 170px;
  height: 40px;
}
.current > span,
.last > span {
  color: white;
  text-align: center;
}
.img-event-slide-show {
  width: 240px;
}
.container #event-carousel {
  border-bottom: 3px solid black;
  padding: 0 0 25px 0;
}
.advertise-img {
  border: 3px solid black;
  height: 262px;
  padding: 5px;
  margin: 10px 5px;
}
#advertise {
  border-bottom: 3px solid black;
  border-top: 3px solid black;
  padding: 35px 0;
  margin-top: 40px;
}
</style>
