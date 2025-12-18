import axios from "axios";
import { href } from "react-router-dom";

const baseURL= import.meta.env.VITE_BACKEND_BASE_API
const axiosInstance= axios.create({
    baseURL: baseURL,
    header: {
        'Content-Type': 'application/json',
    }
})

export default axiosInstance;

axiosInstance.interceptors.request.use(
    function(config){
        console.log('request without auth headrer', config)
        const accessToken= localStorage.getItem('accessToken')
        if (accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)


axiosInstance.interceptors.response.use(
    function(response){
        return response;
    },

    async function(error){
        const originalRequest= error.config;
        if (error.response.status === 401 && !originalRequest.retry){
            originalRequest.retry = true;
            const refreshToken = localStorage.getItem('refreshToken')
            try{
                const response= await axiosInstance.post('token/refresh/', {refresh: refreshToken})
                localStorage.setItem('accessToken', response.add.access)
                originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
                return axiosInstance(originalRequest)
            }catch(error){
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
                window.location.href= '/login'
            }
        }
        return Promise.reject(error);
    }
)