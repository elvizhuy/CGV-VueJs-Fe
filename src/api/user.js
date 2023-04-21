import axiosInstance from "./http-common";

export const Login = async () => {
    const res = await axiosInstance.get('/users/login')
    return res.data
}

export const Register = async (user) => {
    const res = await axiosInstance.get(`/users/register`,user);
    return res.data
}

export const Logout = async (movieID) => {
    const res = await axiosInstance.get(`/user/detail/${movieID}`);
    return res.data
}