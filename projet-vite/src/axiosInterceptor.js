import axios from 'axios'

const axiosInterceptor = axios.create({
    baseURL : 'http://localhost:8000/api'
})

axiosInterceptor.interceptors.request.use(request => {

    console.log("on test si interceptor marche")
    let token = localStorage.getItem(token)
    
    if(token){
        request.headers.Authorization = 'Baerer ' +token
    }
    return request
})


export default axiosInterceptor