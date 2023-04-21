<template>
  <div id="table-trash">
  <div id="alert-notice" class="d-flex justify-content-center m-auto fade-in-up">
    <ToastNotification v-if="Confirm" :Class="Class" :title="title" :proId="proId" :Confirm="Confirm" @confirmation="confirmDelete"></ToastNotification>
  </div>
  <div class="table-facility d-flex justify-content-between">
    <div class="input-group mb-3 w-25">
      <span class="input-group-text">Per Page</span>
      <select class="form-select" name="brand" @change="getProductsList(null)" v-model="perPage">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>

    <div class="title">
      <h2>MOVIES</h2>
    </div>

    <div class="search-group w-25">
      <input class="form-control me-2" type="search" placeholder="Search" v-model="search"
             @change="getProductsList(null)">
    </div>

  </div>
  <table class="table table-hover mt-4">
    <thead id="thead">
    <tr>
      <td width="3%">ID.</td>
      <td>Photo</td>
      <td>Name</td>
      <td>Director</td>
      <td>Cast</td>
      <td>Languages</td>
      <td>Running Time</td>
      <td>Release Date</td>
      <td>Status</td>
      <td width="3%">Update</td>
      <td width="3%">Trash</td>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(movie,index) in Movies" :key="index" class="fade-in-down"
        :style="{'animation-delay': `${index*0.2}s`}">
      <td>{{ movie.id }}</td>
      <td ><img id="img-dashboard-admin" :src="movie.photo" alt=""></td>
      <td>{{ movie.name }}</td>
      <td>{{ movie.director }}</td>
      <td>{{ movie.cast }}</td>
      <td>{{ movie.languages }}</td>
      <td>{{ movie.running_time }}</td>
      <td>{{ movie.release_date }}</td>
      <td>{{ movie.status }}</td>
      <td width="3%">
        <button class="btn-update border-0">
          <router-link :to="{name:'dashboard.update', params:{id:movie.id}}">
            <i class="fa-solid fa-pen-to-square"></i>
          </router-link>
        </button>
      </td>
      <td width="3%">
        <button @click="showToast(movie.id)" class="border-0 btn-delete"><span><i
            class="ms-auto me-auto fa-solid fa-trash"></i></span></button>
      </td>
    </tr>
    </tbody>
  </table>
<!--  <div class="table-paginate d-flex justify-content-between">-->
<!--    <span>Showing from <span class="showing-number">{{ productsList.from }}</span> to <span-->
<!--        class="showing-number">{{ productsList.to }}</span></span>-->
<!--    <nav>-->
<!--      <ul class="pagination">-->
<!--        <li class="page-item d-flex ">-->
<!--          <a class="page-link" href="#"-->
<!--             :disabled="!link.url"-->
<!--             v-for="(link,index) of productsList.links"-->
<!--             :key="index"-->
<!--             @click="getForPage($event, link)"-->
<!--             v-html="link.label"-->
<!--             :class="[link.active ? 'bs-info-bg-subtle' : '']">-->
<!--          </a>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </nav>-->
<!--  </div>-->
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import ToastNotification from "@/components/ToastNotification";
const { mapActions, mapState } = createNamespacedHelpers("movies");

export default {
  components: {ToastNotification},
  data(){
    return {
      Class:"",
      title:"",
      Confirm:false,
    }
  },
  computed: {
    ...mapState({
      Movies: "moviesList",
    }),
  },
  methods: {
    confirmDelete(){
      this.Confirm = true
    },
    showMovieDetail(index) {
      this.getMovieDetail(index);
    },
    ...mapActions({
      getList: "getMoviesListFromAPI",
      getMovieDetail: "getMovieDetail",
    }),
  },
  created() {
    this.getList();
  },
};
</script>

<style scoped>
#table-trash {
  position: relative;
}

#alert-notice {
  position: absolute;
  top: 0%;
  left: 37%;
}
#thead > tr {
  color: rgb(161, 26, 51);
}
tbody tr td{
  font-size: 14px;
}
#img-dashboard-admin {
  width: 50px;
  height: 50px;
}

.title, .showing-number, .page-link {
  color: rgb(161, 26, 42);
}

.btn-delete, .btn-update,.btn-image {
  width: 50px;
  background-color: transparent;
  text-align: center;
}

.btn-delete i {
  color: rgba(51, 49, 49, 0.96);
}

.btn-update i {
  color: #fa9f37;
}

.slide-up-fade-in {
  animation: slide-up-fade-in ease 1s;
  animation-iteration-count: 1;
}

.fade-in-down {
  animation: fade-in-down 0.5s ease-in-out both;
}

@keyframes slide-up-fade-in {
  0% {
    opacity: 0;
    transform: translate(0px, 40px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}

@keyframes fade-in-down {
  from {
    transform: translateY(-0.75rem);
    opacity: 0;
  }
  to {
    transform: translateY(0rem);
    opacity: 1;
  }
}
</style>