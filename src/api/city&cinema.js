import axiosInstance from "@/api/http-common";

export const getAllCity = async () => {
  const res = await axiosInstance.get('cities/get-all-city')
  return res.data
}