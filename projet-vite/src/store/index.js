import { createStore } from 'vuex'
<<<<<<< Updated upstream
import user from '../store/modules/user'

const store = createStore({
    modules: {
        user, 
=======
import darkMode from './modules/darkMode'
import showHeader from './modules/showHeader'

const store = createStore({
    modules: {
        darkMode, 
        showHeader,
>>>>>>> Stashed changes
    }
})

export default store