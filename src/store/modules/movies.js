import {
    getMovieList,
    getMovieComingSoon,
    getMovieDetail,
} from "@/api/movies";

const state = () => {
    return {
        moviesList: [],
        comingSoon: [],
        movieItem: {},
    };
};

const mutations = {
    renderMovieList(state, data) {
        state.moviesList = data;
    },
    renderMovieComingSoon(state, data) {
        state.comingSoon = data;
    },
    getMovieDetails(state, data) {
        state.movieItem = data;
    },

};

const actions = {
    async getMoviesListFromAPI(context) {
        const data = await getMovieList();
        context.commit("renderMovieList", data);
    },

    async getMovieComingSoon(context) {
        const data = await getMovieComingSoon();
        context.commit("renderMovieComingSoon", data);
    },
    async getMovieDetail(context, payload) {
        const data = await getMovieDetail(payload);
        console.log(data);
        context.commit("getMovieDetails", data);
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
