<template>
  <div class="create-view ">
    <p class="alert alert-success" v-if="notificationMes">{{ notificationMes }}</p>
    <form method="post" enctype="multipart/form-data" @submit.prevent="createProduct">
      <div class="row">
        <div class="col-6">
          <div class="input-group mb-5">
            <input type="text" class="form-control" placeholder="Name..."
                   name="name" v-model="movie.name">
            <span class="input-group-text">Movie Name</span>
          </div>
          <!--    <p v-for="(err,index) in error.name" :key="index" class="alert alert-danger py-1">{{ err }}</p>-->
          <div class="input-group mb-5">
            <input type="text" class="form-control" placeholder="Director..."
                   name="director" v-model="movie.director">
            <span class="input-group-text">Director</span>
          </div>
          <!--  <p v-for="(err,index) in error.product_code" :key="index" class="alert alert-danger py-1">{{ err }}</p>-->
          <div class="input-group mb-5">
            <input type="text" class="form-control" placeholder="Cast..."
                   name="cast" v-model="movie.cast">
            <span class="input-group-text">Cast</span>
          </div>
          <!--      <p v-for="(err,index) in error.price" :key="index" class="alert alert-danger py-1">{{ err }}</p>-->
          <div class="input-group mb-5">
            <input type="text" class="form-control" placeholder="Languages..."
                   name="languages" v-model="movie.languages">
            <span class="input-group-text">Languages</span>
          </div>
          <div class="input-group mb-5">
            <input type="text" class="form-control" placeholder="Genre..."
                   name="genre" v-model="movie.genre">
            <span class="input-group-text">Genre</span>
          </div>
        </div>

        <div class="col-6">
          <div class="input-group mb-5">
            <input type="file" class="form-control"
                   name="photo" @change="changeFile($event)">
            <span class="input-group-text">Movie Photo</span>
          </div>
          <!--      <p v-for="(err,index) in error.name" :key="index" class="alert alert-danger py-1">{{err}}</p>-->
          <div class="input-group mb-5">
            <input type="file" class="form-control"
                   name="trailer" @change="changeFile($event)">
            <span class="input-group-text">Movie Trailer</span>
          </div>
          <div class="input-group mb-5">
            <input type="text" class="form-control" placeholder="Running time..."
                   name="running_time" v-model="movie.running_time">
            <span class="input-group-text">Running Time</span>
          </div>
          <div class="input-group mb-5">
            <input type="text" class="form-control" placeholder="Running time..."
                   name="release_date" v-model="movie.release_date">
            <span class="input-group-text">Release Date</span>
          </div>
          <div class="input-group mb-5">
            <span class="input-group-text">Status</span>
            <select class="form-select" name="status" v-model="movie.status">
              <option value="0">Now Showing</option>
              <option value="1">Coming Soon</option>
            </select>
          </div>
        </div>

        <div class="col-12">
          <div class="input-group mb-5">
            <textarea type="text" class="form-control" placeholder="Description..."
                   name="description" v-model="movie.description" rows="5"></textarea>
            <span class="input-group-text">Description</span>
          </div>
        </div>
      </div>
      <button type="submit" class="text-white btn-create text-center py-2 mt-3 border-0 rounded-1"><i
          class="fa-solid fa-plus me-2 text-white"></i>Store Movie
      </button>
    </form>
  </div>
</template>

<script>
import store from "@/store";

export default {
  data() {
    return {
      movie: {
        name: "",
        director: "",
        cast: "",
        photo: "",
        genre: "",
        languages: "",
        running_time: "",
        description: "",
        trailer: "",
        release_date: "",
        status: ""
      },
      notificationMes: "",
      error: [],
    }
  },

  methods: {
    changeFile(event) {
      this.movie.image = event.target.files[0]
    },
    createProduct() {
      store.dispatch('storeMovie',this.movie).then((res)=> {
        console.log(res)
      })
    },
  },
}
</script>

<style>
.create-view {
  background-color: #f3f7f8;
  padding: 40px;
}

.create-view input[type="text"], .create-view select, .create-view textarea {
  outline: none;
}

.btn-create {
  background-color: #282828;
  width: 300px;
  transition: 0.5s ease-in-out;
}

.btn-create:hover {
  color: white;
  background-color: #535353;
  cursor: pointer;
}
</style>