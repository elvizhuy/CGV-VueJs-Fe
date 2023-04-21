import { createStore } from "vuex";
import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'
import dateOfBirth from "./modules/dateOfBirth";
import slideContent from "./modules/slideContent";
import movies from "./modules/movies";
const store = createStore({
  modules: {
    dateOfBirth,
    slideContent,
    movies,
  },
  state,
  mutations,
  actions,
  getters,
});

export default store;
