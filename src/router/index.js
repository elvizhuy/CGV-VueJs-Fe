import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
import DisplayMovieList from "@/views/DisplayMovieList";
import MovieDetail from "@/views/MovieDetail";
import ComingSoonView from "@/views/ComingSoonView";
import CinemaShowingList from "@/views/CinemaShowingList";
import ProductTrash from "@/views/Admin/ProductTrash";
import DashboardTable from "@/views/Admin/DashboardTable";
import UpdateProduct from "@/views/Admin/UpdateProduct";
import CreateProduct from "@/views/Admin/CreateProduct";
import DashboardView from "@/views/Admin/DashboardView";
import AppLayout from "@/components/AppLayout";

const routes = [
  {
    path: "/",
    redirect: "/app",
  },
  {
    path: "/app",
    name: "app",
    redirect: 'app/home',
    component: AppLayout,
    children: [
      {
        path: "home",
        name: "app.home",
        component: HomeView,
      },
      {
        path: "movies",
        name: "app.movies",
        component: DisplayMovieList,
      },
      {
        path: "movies/detail/:id",
        name: "app.movie-detail",
        props: true,
        component: MovieDetail,
      },
      {
        path: "coming-soon",
        name: "app.coming-soon",
        component: ComingSoonView,
      },
      {
        path: "cinema",
        name: "app.cinema",
        component: CinemaShowingList,
      },

    ]
  },
  {
    path: "/signup",
    name: "app.register",
    component: RegisterView,
  },
  {
    path: "/login",
    name: "app.login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    redirect: "/dashboard/list",
    component: DashboardView,
    meta: {
      requiresAuth: true,
      requireAdmin: true,
    },
    children: [
      {
        path: "list",
        name: "dashboard.list",
        component: DashboardTable,
      },
      {
        path: "create",
        name: "dashboard.create",
        component: CreateProduct,
      },
      {
        path: "update/:id",
        name: "dashboard.update",
        component: UpdateProduct,
        props: true,
      },

      {
        path: "trash",
        name: "dashboard.trash",
        component: ProductTrash,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "current",
});

export default router;
