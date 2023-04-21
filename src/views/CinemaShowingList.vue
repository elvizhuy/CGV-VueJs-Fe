<template>
  <div class="showing-time-container m-auto mt-5 mb-5">
    <div class="theater-wrap ">
      <div class="theater-list">
        <div class="cgv-showtime-top"></div>
        <div class="cgv-showtime-middle">
          <div class="content-list-cinema">
            <div class="title-cgv-cinema text-center row">
              <h1>CGV CINEMAS</h1>
            </div>
            <div id="city-list" class="row d-flex flex-row justify-content-center mt-5 m-auto py-3">
              <div class="city-name col-3 mb-3 text-center" v-for="(city,index) in getCityList" :key="index">
                <a @click="showCinemaList(city.id)" id="city-link" class="city-link m-0">{{ city.name }}</a>
              </div>
             
            </div>
            <div v-if="show" class="row d-flex flex-row justify-content-center mt-5">
              <div class="cinema-name mb-3" v-for="(cinema,index) in getCinemaList" :key="index">
                <a class="m-0">{{ cinema.name }}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="cgv-showtime-bottom"></div>
      </div>
    </div>
  </div>

</template>

<script>
import store from "@/store";
import {mapGetters} from "vuex";

export default {
  name: "CinemaShowingList",
  data() {
    return {
      show: false,
      // cityArr : []
    }
  },
  created() {
    this.getCitiesList()
  },
  computed: {
    ...mapGetters(['getCityList', 'getCinemaList'])
    
  },
  methods: {
    getCitiesList() {
      store.dispatch('allCities')
      this.show = false
    },
    showCinemaList(id) {
      store.dispatch('showCinemaList', id)
      this.show = true
    },
  },
  components: {},
}
</script>

<style scoped>
.showing-time-container, .theater-wrap {
  width: 980px;
  min-height: 100px;
  overflow: auto;
}

.cgv-showtime-top, .cgv-showtime-bottom, .cgv-showtime-middle, .content-list-cinema {
  float: left;
  width: 100%;
}

.cgv-showtime-top, .cgv-showtime-bottom {
  height: 43px;
}

.cgv-showtime-top {
  background: url("/public/assets/banner/cinema-showtimes-favorite-top.png");
}

.cgv-showtime-middle {
  background: url("/public/assets/banner/cinema-showtimes-favorite-center.png");
}

.cgv-showtime-bottom {
  background: url("/public/assets/banner/cinema-showtimes-favorite-bottom.png");
}

.content-list-cinema {
  padding: 17px 40px;
}

.title-cgv-cinema {
  color: #717171;
  font-size: 48px;
  font-weight: bold;
  text-shadow: 2px 2px 2px #b9b9b9;
}

#city-list {
  width: 900px;
  border-top: 2px solid #878787;
  border-bottom: 2px solid #878787;
}

.city-name {
  cursor: pointer;
}
.cinema-name{
  font-size: 13px;
  width: 250px;
  cursor: pointer;
}
.cinema-name:hover a,.city-name:hover a{
  color:red
}
a {
  color:white;
  text-decoration: none;
}

a:hover {
  text-decoration: white;
}
</style>