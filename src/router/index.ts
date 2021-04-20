import { createRouter, createWebHistory  } from 'vue-router'
import Layout from '../layout/index.vue'
import index from '../view/index.vue'
import Login from '../view/login.vue'
import NotFound from '../view/NotFound.vue'

const routes = createRouter({ 
    history: createWebHistory(),
    routes: [
        { 
            path: '/',
            name: 'admin',
            component: Layout,
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: index,
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        // 404 page must be placed at the end !!!
        { 
            path: '/:w+', 
            component: NotFound
        }
    ]
})

// 路由拦截
/* routes.beforeEach ((to, from) => {
    console.log(to, from);
}) */

export default routes