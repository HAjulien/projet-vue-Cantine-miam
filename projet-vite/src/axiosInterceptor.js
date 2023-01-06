import axios from 'axios'

const axiosInterceptor = axios.create({
    baseURL : 'http://localhost:8000/api'
})

axiosInterceptor.interceptors.request.use(request => {

    console.log("on test si interceptor marche")
    let token = localStorage?.getItem('token')
    console.log(token)

    if(token){
        console.log(`le token est ${token}`)
        request.headers.Authorization = 'Baerer ' +token
    }
    console.log(request);
    return request
})


export default axiosInterceptor