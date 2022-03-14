import { createStore } from 'vuex'
import darkMode from './modules/darkMode'

const store = createStore({
    modules: {
        darkMode, 
    }
})

export default store