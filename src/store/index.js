import { createStore } from "vuex";
import dateOfBirth from "./modules/dateOfBirth";
import slideContent from "./modules/slideContent";
const store = createStore({
  modules: {
    dateOfBirth,
    slideContent
  },
});

export default store;
