import {createMovie} from "@/api/movies";
import {Login, Register} from "@/api/user";
import {getAllCity, getCinemaListById} from "@/api/city&cinema";

export const storeMovie = async (payload) => {
    const formData = new FormData();
    formData.append("name", payload.name);
    formData.append("director", payload.director);
    formData.append("cast", payload.cast)
    formData.append("photo", payload.photo);
    formData.append("trailer", payload.trailer);
    formData.append("description", payload.description);
    formData.append("genre", payload.genre);
    formData.append("languages", payload.languages);
    formData.append("running_time", payload.running_time);
    formData.append("release_date", payload.release_date);
    formData.append("status", payload.status);
    return await createMovie(formData)
}
export const login = ({commit}) => {
    return Login().then((res) => {
        console.log(res)
        commit('setUser', res.user)
        commit('setToken', res.token)
    });
}

export const register = ({commit}, user) => {
    return Register(user).then((res) => {
        commit("setUser", res.user);
        commit("setToken", res.token);
    })
}

export const allCities = async ({commit}) => {
    const data = await getAllCity()
    commit('setAllCity', data)
}
export const showCinemaList = async ({commit}, id) => {
    const data = await getCinemaListById(id)
    commit('setCinemaList', data)
}