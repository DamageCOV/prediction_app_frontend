import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';

import Login from './components/Login.vue'
import Registro from './components/Registro.vue'
import Cliente from './components/Cliente.vue'


const routes = [{
        path: '/',
        name: 'root',
        component: App
    },
    {
        path: '/user/login',
        name: 'login',
        component:Login
    },
    {
        path: '/user/cliente',
        name: 'cliente',
        component: Cliente  
    },
    {
        path: '/user/registro',
        name: 'signUp',
        component: Registro  
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
