// import Repository from "./Repository";
import axios from "axios"
const baseDomain = "http://localhost:3456"
const baseUrl = `${baseDomain}/api/v1`
const resource = "/movies";


   export const getMovieList = async () =>{
    const res = await axios.get(`${baseUrl}${resource}`)
    return res.data
  }

  export const getMovieDetail = async (movieID) => {
    const res = await axios.get( `${baseUrl}${resource}/detail/${movieID}`);
    return res.data
  }
  export const getMovieComingSoon = async () =>{
    const res = await axios.get(`${baseUrl}${resource}/coming-soon`)
    return res.data
  }
