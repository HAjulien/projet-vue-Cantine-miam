import { createStore } from 'vuex'
import axios from 'axios';
import darkMode from './modules/darkMode'
import auth from './modules/auth';

const store = createStore({
    modules: {
        darkMode, 
        auth,
    }
})

export default store