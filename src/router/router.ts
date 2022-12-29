import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

let firstLoad = true;

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path: '/:pathMatch(.*)*',
            component: Home,
            beforeEnter: () => {
                return '/';
            },
        },

        {
            path: '/',
            component: Home
        },

        {
            path: '/about',
            component: About,
        },
    ],

    scrollBehavior: (to) => {
        if(firstLoad) {
            firstLoad = false;
            router.push({ path: '/' });
        } else if(to.hash) {
            return { 
                el: to.hash,
                behavior: 'smooth',
            };
        } else {
            return { top: 0 };
        }
    },
});

export function isFirstLoad() {
    return firstLoad;
}

export default router;
