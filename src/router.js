import {createRouter, createWebHistory} from 'vue-router';

import Home from './pages/Home.vue';

const routes = [
    {
        path: '/',
        component : Home
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to , from , savedPosition) {
        if(savedPosition) {
            return savedPosition;
        }
    }
});

export default router;