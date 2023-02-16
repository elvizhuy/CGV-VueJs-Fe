<template>
  <div id="item-detail-container">
    <div class="row">
      <div class="col-3">
        <img class="img" :src="Item.photo" alt="" />
      </div>
      <div class="col-9 item-info">
        <div class="border-bottom border-dark mb-2">
          <h3>{{ Item.name }}</h3>
        </div>
        <div>
          <span>Director :</span><span>{{ Item.director }}</span>
        </div>
        <div>
          <span> Cast :</span><span>{{ Item.cast }}</span>
        </div>
        <div>
          <span> Genre :</span><span>{{ Item.genre }}</span>
        </div>
        <div>
          <span>Running time :</span> <span>{{ Item.running_time }}</span>
        </div>
        <div>
          <span>Languages :</span><span>{{ Item.languages }}</span>
        </div>
        <div>
          <span>Release date :</span><span>{{ Item.release_date }}</span>
        </div>
        <div>
          <span>Description :</span><span>{{ Item.description }}</span>
        </div>
        <!-- <button data-bs-toggle="modal" data-bs-target="#MoviesModal"  @click="handleOpenModalBooking" type="button">Booking</button> -->

        <ul id="toggle-tabs" class="d-flex justify-content-center mt-5">
          <li
            @click="handleOpenModalBooking"
            class="current d-flex justify-content-center align-items-center"
          >
            <span>Booking</span>
          </li>
          <li class="last d-flex justify-content-center align-items-center">
            <span class="m-0">Trailer</span>
          </li>
        </ul>
        <video width="640" height="380" controls>
          <source :src="Item.trailer" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
  <teleport to="#app">
    <app-modal
      :isOpen="isOpenModalDetail"
      :handleCloseModal="handleCloseModalBooking"
    >
    </app-modal>
  </teleport>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("movies");
export default {
  props: {
    id: {
      type: [Number, String],
    },
  },
  data() {
    return {
      isOpenModalDetail: false,
    };
  },
  computed: {
    ...mapState({
      Item: "movieItem",
    }),
  },
  methods: {
    ...mapActions({
      getMovieDetail: "getMovieDetail",
    }),
    handleOpenModalBooking() {
        this.isOpenModalDetail = true;
      },
      handleCloseModalBooking() {
        this.isOpenModalDetail = false;
      },
    getMovieItem() {
      this.getMovieDetail(this.id)
      // axios
      //   .get(`http://localhost:3456/api/v1/movies/detail/${this.id}`)
      //   .then((res) => {
      //     this.Item = res.data;
      //     console.log(this.Item);
      //   })
      //   .catch((err) => {
      //     this.errors.push(err);
      //   });
    },
  },
  created() {
    this.getMovieItem();
    this.handleOpenModalBooking()
    this.handleCloseModalBooking()
  },
};
</script>

<style scoped>
#item-detail-container {
  width: 1000px;
  margin: 30px auto;
}
.item-info span:first-of-type {
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
}
.item-info span:last-of-type {
  font-size: 16px;
  font-weight: normal;
}
.img {
  width: 100%;
  height: 360px;
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
.current {
  width: 130px;
  height: 40px;
  border-right: 1px solid white;
}
.last {
  width: 80px;
  height: 40px;
}
.item-info #toggle-tabs .current > span,
.last > span {
  color: white;
  text-align: center;
  margin: 0;
}
.current:hover,
.last:hover {
  cursor: pointer;
}
</style>
