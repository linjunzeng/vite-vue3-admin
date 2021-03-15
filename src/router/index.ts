import { createRouter, createWebHistory  } from 'vue-router'
import Login from '@/view/Login.vue'
import index from '@/view/index.vue'

const routes = createRouter({ 
    history: createWebHistory(),
    routes: [
        { 
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})

// 路由拦截
/* routes.beforeEach ((to, from) => {
    console.log(to, from);
}) */

export default routes