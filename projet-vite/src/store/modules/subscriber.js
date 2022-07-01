import axios from "axios";
import store from "..";

store.subscribe((mutation)=>{
    switch (mutation.type) {
        case 'auth/setToken' :
        if(mutation.payload){
            axios.defaults.headers.common['Authorization'] = `BEARER ${mutation.payload}`
            localStorage.setItem('token', mutation.payload);
        }else{
            axios.defaults.headers.common['Authorization'] = null
            localStorage.setItem('token', mutation.payload);
            localStorage.removeItem('token');
        }
        break;
    }
})

