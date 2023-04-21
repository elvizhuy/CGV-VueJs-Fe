import axios from 'axios'
// import store from "@/store";
// import router from "@/router";
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3456/api/v1/',
    headers: {
        'Content-type': '*',
        Accept: "*",
    }
})

// axiosInstance.defaults.withCredentials = true;
// axiosInstance.interceptors.request.use((config) => {
//     config.headers["Authorization"] = `Bearer ${localStorage.getItem('token')}`;
//     return config;
// });

// axiosInstance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         if (error.response.status === 401) {
//             store.commit("setToken", null);
//             router.push({ name: "AuthView" });
//         } else if (error.response.status === 404) {
//             router.push({ name: "NotFound" });
//         }
//         throw error;
//     }
// );
export default axiosInstance