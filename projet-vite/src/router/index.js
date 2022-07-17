import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import MenuSemaine from '/src/views/MenuSemaine.vue'
import About from '/src/views/About.vue'
import Equipe from '/src/views/Equipe.vue' 
import NosPlats from '/src/views/NosPlats.vue' 
import PlatDetail from '/src/views/PlatDetail.vue' 
import Inscription from '/src/views/Inscription.vue' 

const routes = [
    {
        path: '/',
        name: Home,
        component: Home,
    },
    {
        path: '/menuSemaine',
        name: MenuSemaine,
        component: MenuSemaine,
    },
    {
        path: '/about',
        name: About,
        component: About,
    },
    {
        path: '/equipe',
        name: Equipe,
        component: Equipe,
    },
    {
        path: '/nosPlats',
        name: NosPlats,
        component: NosPlats,
    },
    {
        path: '/platDetail/:id',
        name: PlatDetail,
        component: PlatDetail,
    },
    {
        path: '/inscription',
        name: Inscription,
        component: Inscription,
    },

    
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(){
        window.scrollTo(0,0);
    }
})


export default router