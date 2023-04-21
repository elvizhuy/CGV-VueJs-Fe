<template>
  <div id="dashboard-view" class="container-fluid d-flex flex-row">
    <div class="sidebar">
      <div id="Sidebar" :class="{ 'margin-left':!sidebarOpened,'no-margin':sidebarOpened}"
           class="d-flex flex-column px-3 py-5">
        <div class="mb-3 sidebar-router d-flex flex-row">
          <span id="navbar-icon"><i class="fa-solid fa-house-user text-white me-3"></i></span>
          <router-link
              id="router-dashboard"
              :to="{ name: 'app.home'}">Home
          </router-link>
        </div>

        <div class="mb-3 sidebar-router d-flex flex-column dropdown">
          <div @click="showMenu">
            <span id="navbar-icon"><i class="fa-solid fa-clapperboard text-white me-3"></i></span>
            <router-link
                id="router-dashboard"
                to="">Movies
            </router-link>
          </div>
          <transition name="fade">
            <div class="bg-white rounded-3 py-3 mt-2 mb-4 text-center" v-if="showList1">
              <div class=" link-hover pt-2">
                <router-link
                    class="text-hover text-decoration-none"
                    :to="{ name: 'dashboard.list'}">Movies List
                </router-link>
              </div>
              <div class="link-hover pt-2">
                <router-link
                    class="text-hover text-decoration-none"
                    :to="{ name: 'dashboard.create'}">Store Movie
                </router-link>
              </div>
            </div>
          </transition>
        </div>

        <!--        <div class="mb-3 sidebar-router d-flex flex-row">-->
        <!--          <span id="navbar-icon"><i class="fa-regular fa-file-excel text-white fs-4 me-3"></i></span>-->
        <!--          <router-link-->
        <!--              id="router-dashboard"-->
        <!--              :to="{ name: 'dashboard.excel'}">Import Excel-->
        <!--          </router-link>-->
        <!--        </div>-->
        <!--        <div class="mb-3 sidebar-router d-flex flex-row">-->
        <!--          <span id="navbar-icon"><i class="fa-solid fa-ranking-star text-white"></i></span>-->
        <!--          <router-link-->
        <!--              id="router-dashboard"-->
        <!--              :to="{ name: 'dashboard.report'}">Report-->
        <!--          </router-link>-->
        <!--        </div>-->
        <!--        <div class="mb-3 sidebar-router d-flex flex-row">-->
        <!--          <span id="navbar-icon"><i class="fa-solid fa-trash text-white"></i></span>-->
        <!--          <router-link-->
        <!--              id="router-dashboard"-->
        <!--              :to="{ name: 'dashboard.trash'}">Trash-->
        <!--          </router-link>-->
        <!--        </div>-->
      </div>
    </div>
    <div class="dashboard-table-content w-100">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid ">
          <div id="fan-o-fan" class="d-flex align-items-center">
            <button class="btn-sidebar p-2 border-0 me-3" type="button" data-bs-toggle="collapse"
                    data-bs-target="" @click="toggleSideBar"><i id="angle" :class="[{'rotate':!sidebarOpened}]"
                                                                class="angle fa-solid fa-angle-left"></i>
            </button>
            <div>
              <router-link :to="{name: 'app.home'}" class="logo">
                <img class="w-100 h-100" src="/assets/logo/cgvlogo-small.png" alt="">
              </router-link>
            </div>
          </div>
          <ul class="navbar-nav me-5 mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                <img class="avatar" src="https://randomuser.me/api/portraits/men/1.jpg" alt="">
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                  <form method="post"><a type="submit" @click="Logout" class="dropdown-item" href="#">Logout</a></form>
                </li>
              </ul>
            </li>
            <li class="nav-item d-flex align-items-center ms-4">
              <div class="user-name">
                <!--                <p class="m-0">{{ currentUser.name }}</p>-->
                <!--                <p class="m-0">{{ currentUser.email }}</p>-->
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div class="table-content p-5">
        <router-view></router-view>
      </div>
      <footer id="footer" class="d-flex align-items-center justify-content-center">
        <p class="m-0 text-center text-white">&copy; copyright CGV company</p>
      </footer>
    </div>
  </div>

</template>

<script setup>
import store from "@/store";
import {onBeforeMount, ref} from "vue";
import {useRouter} from "vue-router";
// import axios from "axios";

const sidebarOpened = ref(true)
const router = useRouter()
const showList1 = ref(false)
// const currentUser = computed(() => store.state.user)

onBeforeMount(() => {
})

function showMenu() {
  showList1.value = !showList1.value
}

function toggleSideBar() {
  sidebarOpened.value = !sidebarOpened.value
  if (!sidebarOpened.value){
  document.getElementById('angle').classList.remove('rotate')
  document.getElementById('angle').classList.add('reverse')
  }
}

const Logout = () => {
  store.dispatch("logoutActions")
      .then(() => {
        router.push({
          name: "Login",
        });
      });
};
</script>

<style>
#dashboard-view {
  height: 100vh;
}

.navbar {
  height: 65px;
}

.table-content {
  height: 100vh;
  overflow: auto;
}

.link-hover {
  height: 40px;
}

.link-hover:hover {
  background-color: #e8e8e8;
}

.text-hover {
  color: #e13f3f;
  font-size: 15px;
  letter-spacing: 1.4px;
}

#fan-o-fan, .logo {
  width: 180px;
  height: 40px;
}

.margin-left {
  margin-left: -250px;
  transition: all 1s ease-in-out;
}

.no-margin {
  margin-left: 0;
  transition: all 1s ease-in-out;
}

#navbar-icon {
  width: 40px;
  height: 30px;
}

#router-dashboard {
  color: #dadada;
  text-decoration: none;
  letter-spacing: 2px;
  font-size: 17px;
}

.btn-sidebar {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
}

.btn-sidebar:hover {
  background-color: #d1d1d1;
}

#Sidebar {
  background-color: #ed474c;
  width: 250px;
  height: 100%;
}

#footer {
  background-color: #e36063;
  width: 100%;
  height: 60px;
}

#Sidebar > .sidebar-router:hover #router-dashboard {
  color: white;
}

.sidebar-router i {
  font-size: 20px;
}

#dashboard-view {
  padding: 0;
  height: 100%;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
}

.angle.rotate {
  transform: rotate(180deg);
  -webkit-transition: 300ms ease-in-out;
  transition: 300ms ease-in-out;
}

.angle.reverse {
  transform: rotate(0deg);
  -webkit-transition: 300ms ease-in-out;
  transition: 300ms ease-in-out;
}

</style>