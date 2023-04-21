
export const setUser = (state,data) => {
  state.user = data
}
export const setToken = (state,token) => {
    state.user.token = token;
    if (token) {
        localStorage.setItem("token", token);
    } else {
        localStorage.removeItem("token");
    }
}

export const setAllCity = (state,data) => {
    state.allCities = data
}
export const setCinemaList = (state,data) => {
    state.allCinemasByCity = data
    console.log(state.allCinemasByCity)
}