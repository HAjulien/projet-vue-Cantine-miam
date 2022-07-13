import { parse } from "@vue/compiler-dom";
import axios from "axios";
import store from "../index";

export default {
    namespaced: true,

    state:{
        token: null,
        user: null
    },

    getters: {
        isAuthenticated(state){
            return state.token && state.user
        },
        getUser: (state) => state.user,
        // getUser(state){
        //     return state.user
        // }
    },

    mutations: {
        setToken(state, token){
            state.token = token
            localStorage.setItem('token', token );

        },
        setUser(state, user){
            state.user = user
            localStorage.setItem('user', user );
            console.log(JSON.parse(user));

        },        
    },

    actions: {
        async login({dispatch}, credentials){
            let response = await axios.post('/login', credentials,  {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .catch((e)=>{
                console.log(e);
                alert("identifiants invalides")
                //location.reload()


            })

            return dispatch('attempt', response.data.token)
        },

        async attempt({commit, state}, token){
            if(token){
                commit('setToken', token)
            }
            if(!state.token){
                return
            }

            try {
                let response = await axios.get('/profile', {

                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                commit('setUser', JSON.stringify(response.data))
                //commit('setUser', JSON.parse(response.data))                

            } catch(e){
                commit('setUser', "")
                commit('setToken', "")
                
                
            }
        },

        async register(_, form){
            await axios.post('/register', form)
            .catch((e)=>{
                console.log(e);
            })
        }
    },
}