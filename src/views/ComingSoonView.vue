<template>
  <header id="header">
    <the-header></the-header>
  </header>
  <main>
    <div id="container">
      <div class="row d-flex justify-content-center">
        <div class="now-showing-title col-12">
          <h1>Coming Soon</h1>
          <div class="coming-soon">
            <router-link :to="{name:'app.movies'}">NOW SHOWING</router-link>
          </div>
        </div>
        <div
            class="movie-list-item col-3"
            v-for="(movie, index) in ComingSoon"
            :key="index"
        >
          <div class="movie-img">
            <router-link :to="{name:'app.movie-detail',params:{id:movie.id}}"
            ><img
                @click="movieDetail(index)"
                class="img"
                :src="movie.photo"
                alt=""
            /></router-link>
          </div>
          <div class="movie-info">
            <p class="text-start me-1">
              Genre: <span>{{ movie.genre }}romantic</span>
            </p>
            <p class="text-start me-1">
              Running Time: <span>{{ movie.running_time }}</span>
            </p>
            <p class="text-start me-1">
              Release Date: <span>{{ movie.release_date }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>
    <the-footer></the-footer>
  </footer>
</template>

<script>
import {createNamespacedHelpers} from "vuex";

const {mapActions, mapState} = createNamespacedHelpers("movies");

export default {
  computed: {
    ...mapState({
      ComingSoon: "comingSoon"
    }),
  },
  methods: {
    ...mapActions({
      getComingSoonList: "getMovieComingSoon",
    }),
  },
  created() {
    this.getComingSoonList();
  },
};
</script>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 980px;
  margin: 40px auto 0;
}

h1 {
  text-align: left;
}

.movie-list-item {
  display: inline-block;
  margin: 0 40px 0 20px;
  width: 190px;
}

.now-showing-title {
  border-bottom: 3px solid black;
  margin-bottom: 25px;
  width: 985px;
}

.img {
  width: 100%;
  height: 270px;
}

.movie-img {
  border: 3px solid black;
  width: 190px;
}

.coming-soon {
  text-align: right;
}

.coming-soon a {
  text-decoration: none;
  color: #636363;
  letter-spacing: 1px;
  font-size: 20px;
}

.movie-info p {
  font-weight: bold;
}

.movie-info span {
  font-weight: normal;
}
</style>
  