import { createStore } from "vuex";
import dateOfBirth from "./modules/dateOfBirth";
const store = createStore({
  modules: {
    dateOfBirth
  },
});

export default store;
