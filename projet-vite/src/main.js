import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faClock } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css';



library.add(faCoffee, faClock, faYoutube, faTwitter)


createApp(App).component('fa', FontAwesomeIcon).use(router).use(store).mount('#app');
