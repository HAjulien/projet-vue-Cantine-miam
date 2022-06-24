import axios from "axios";
import store from "..";

export default {
    namespaced: true,

    state:{
    },

    getters: {
    },

    mutations: {
    },

    actions: {
        async register(_, form){
            axios.post('/register', form)
            .catch((e)=>{
                console.log(e);
            })
        }
    },
}