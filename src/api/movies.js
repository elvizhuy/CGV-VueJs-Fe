import axiosInstance from "./http-common";

export const getMovieList = async () => {
    const res = await axiosInstance.get('/movies/get-list')
    return res.data
}

export const getMovieDetail = async (movieID) => {
    const res = await axiosInstance.get(`/movies/detail/${movieID}`);
    return res.data
}
export const getMovieComingSoon = async () => {
    const res = await axiosInstance.get(`/movies/coming-soon`)
    return res.data
}
export const updateMovie = async (movieID) => {
    const res = await axiosInstance.put(`/movies/update/${movieID}`)
    return res.data
}
export const deleteMovie = async (movieID) => {
    const res = await axiosInstance.delete(`/movies/delete/${movieID}`)
    return res.data
}
export const createMovie = async (formData) => {
  const res = await axiosInstance.post(`/movies/add`,formData)
  return res.data
}