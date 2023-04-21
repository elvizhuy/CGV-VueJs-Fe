import axiosInstance from "@/api/http-common";

export const getAllCity = async () => {
    const res = await axiosInstance.get('cities/get-all-city')
    return res.data
}
export const getCinemaListById = async (id) => {
    const res = await axiosInstance.get(`cinemas/get-cinema-list/${id}`)
    return res.data
}