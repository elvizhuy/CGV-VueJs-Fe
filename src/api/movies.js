import axiosInstance from "./http-common";

export const getMovieList = async () =>{
    const res = await axiosInstance.get(`${baseUrl}${resource}`)
    return res.data
  }

  export const getMovieDetail = async (movieID) => {
    const res = await axiosInstance.get( `${baseUrl}${resource}/detail/${movieID}`);
    return res.data
  }
  export const getMovieComingSoon = async () =>{
    const res = await axiosInstance.get(`${baseUrl}${resource}/coming-soon`)
    return res.data
  }
