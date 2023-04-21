import axios from "axios"
const baseDomain = "http://localhost:3456"
const baseUrl = `${baseDomain}/api/v1`
const resource = "/schedules";


//    export const getMovieList = async () =>{
//     const res = await axios.get(`${baseUrl}${resource}`)
//     return res.data
//   }

  export const getMovieDetail = async (queryDate) => {
    const res = await axios.get( `${baseUrl}${resource}/?scheduleDate=${queryDate}`);
    return res.data
  }
  export const getMovieComingSoon = async () =>{
    const res = await axios.get(`${baseUrl}${resource}/coming-soon`)
    return res.data
  }