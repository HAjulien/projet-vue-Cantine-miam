import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import MenuSemaine from '/src/views/MenuSemaine.vue'
import Equipe from '/src/views/Equipe.vue' 
import Click from '/src/views/Click.vue' 
import NosPlats from '/src/views/NosPlats.vue' 
import PlatDetail from '/src/views/PlatDetail.vue' 
import Horaire from '/src/views/Horaire.vue'
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
        path: '/equipe',
        name: Equipe,
        component: Equipe,
    },
    {
        path: '/click&collect',
        name: Click,
        component: Click,
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
        path: '/horaire',
        name: Horaire,
        component: Horaire,
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