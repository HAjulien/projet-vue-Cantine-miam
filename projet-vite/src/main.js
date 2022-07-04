import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faClock, faMoon, faSun, faUser, faStar, faStarHalf, faSignOut, faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css';
import axios from 'axios';

//axios.defaults.baseURL = "http://localhost:8000/api" 
axios.defaults.baseURL = "https://cantinemiam.herokuapp.com/api" 
library.add(faUser, faCoffee, faClock, faMoon, faSun, faYoutube, faTwitter, faInstagram, faFacebook, faStar, faStarHalf, faSignOut, faEyeSlash,faEye, faLock)

createApp(App).component('fa', FontAwesomeIcon).use(router).use(store).mount('#app');

