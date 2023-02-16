import { createStore } from "vuex";
import dateOfBirth from "./modules/dateOfBirth";
import slideContent from "./modules/slideContent";
import movies from "./modules/movies";
const store = createStore({
  modules: {
    dateOfBirth,
    slideContent,
    movies,
  },
});

export default store;
