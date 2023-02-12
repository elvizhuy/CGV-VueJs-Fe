import { createApp } from 'vue'
import router from "./router";
import store from "./store";
import App from './App.vue'// in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import bootstrap from "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
import "../node_modules/font-awesome/css/font-awesome.min.css"

const app = createApp(App)
app.use(store).use(router).use(bootstrap).use(VueAxios, axios)
app.mount('#app')
