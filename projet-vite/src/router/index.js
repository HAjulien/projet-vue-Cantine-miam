import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import About from '/src/views/About.vue'
import Equipe from '/src/views/Equipe.vue'

const routes = [
    {
        path: '/',
        name: Home,
        component: Home,
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
    }
    
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router