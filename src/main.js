import { createApp } from 'vue'
import App from './App.vue'// in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import bootstrap from "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
const app = createApp(App)

app.use(VueAxios, axios)
app.use(bootstrap)
app.mount('#app')
