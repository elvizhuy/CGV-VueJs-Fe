import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "@/views/AuthView";
import RegisterView from "@/views/RegisterView"
const routes = [
    {
        path: "",
        name: "home",
        component: HomeView,
    },
    {
        path: "/signup",
        name: "RegisterView",
        component: RegisterView,
    },
    {
        path: "/login",
        name: "AuthView",
        component: AuthView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'current'
});

export default router;