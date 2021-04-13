import { createRouter, createWebHistory  } from 'vue-router'
import Layout from '../layout/index.vue'

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
            component: import('../view/index.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: import('../view/Login.vue'),
        },
        {
            path: '/system',
            component: Layout,
            meta: { title: '系统管理', icon: 'system' },
            children: [{
                path: 'authority',
                name: 'authority',
                component: () => import('../view/system/authority.vue'),
                meta: { title: '权限管理', icon: 'authority' }
            },
            {
                path: 'role',
                name: 'role',
                component: () => import('../view/system/role.vue'),
                meta: { title: '角色管理', icon: 'role' }
            },
            {
                path: 'user',
                name: 'user',
                component: () => import('../view/system/user.vue'),
                meta: { title: '用户管理', icon: 'user' }
            }]
        },
        {
            path: '/sampbox',
            component: Layout,
            meta: { title: '采样盒管理', icon: 'sampbox' },
            children: [{
                path: 'barcode',
                name: 'barcode',
                component: () => import('../view/sampbox/barcode.vue'),
                meta: { title: '条码管理', icon: 'barcode' }
            },
            {
                path: 'box',
                name: 'box',
                component: () => import('../view/sampbox/box.vue'),
                meta: { title: '采样盒管理', icon: 'box' }
            },
            {
                path: 'checkout',
                name: 'checkout',
                component: () => import('../view/sampbox/checkout.vue'),
                meta: { title: '用户管理', icon: 'checkout' }
            }]
        },
        {
            path: '/check',
            component: Layout,
            meta: { title: '检测管理', icon: 'check' },
            children: [{
                path: 'samp',
                name: 'samp',
                component: () => import('../view/check/samp.vue'),
                meta: { title: '样品管理', icon: 'samp' }
            },
            {
                path: 'experimentalData',
                name: 'experimentalData',
                component: () => import('../view/check/experimentalData.vue'),
                meta: { title: '实验数据', icon: 'experimentalData' }
            },
            {
                path: 'report',
                name: 'report',
                component: () => import('../view/check/report.vue'),
                meta: { title: '报告管理', icon: 'report' }
            }]
        },
        {
            path: '/questionnaire',
            component: Layout,
            meta: { title: '问卷管理', icon: 'questionnaire' },
            children: [{
                path: 'subject',
                name: 'subject',
                component: () => import('../view/questionnaire/subject.vue'),
                meta: { title: '题目分类', icon: 'subject' }
            },
            {
                path: 'config',
                name: 'config',
                component: () => import('../view/questionnaire/config.vue'),
                meta: { title: '问卷配置', icon: 'config' }
            },
            {
                path: 'result',
                name: 'result',
                component: () => import('../view/questionnaire/result.vue'),
                meta: { title: '问卷结果', icon: 'result' }
            }]
        },
        {
            path: '/census',
            component: Layout,
            meta: { title: '报表统计', icon: 'census' },
            children: [{
                path: 'saleTable',
                name: 'saleTable',
                component: () => import('../view/census/saleTable.vue'),
                meta: { title: '销售报表', icon: 'saleTable' }
            },
            {
                path: 'checkTable',
                name: 'checkTable',
                component: () => import('../view/census/checkTable.vue'),
                meta: { title: '检测报表', icon: 'checkTable' }
            },
            {
                path: 'questionnaireCensus',
                name: 'questionnaireCensus',
                component: () => import('../view/census/questionnaireCensus.vue'),
                meta: { title: '问卷统计', icon: 'questionnaireCensus' }
            }]
        },
        {
            path: '/linkConfig',
            component: Layout,
            children: [{
                path: 'linkConfig',
                name: 'linkConfig',
                component: () => import('../view/linkConfig/index.vue'),
                meta: { title: '链接配置', icon: 'config' }
            }]
        },
        {
            path: '/weixinConfig',
            component: Layout,
            children: [{
                path: 'config',
                name: 'config',
                component: () => import('../view/weixinConfig/index.vue'),
                meta: { title: '公众号管理', icon: 'config' }
            }]
        },
        // 404 page must be placed at the end !!!
        { 
            path: '/:w+', 
            component: () => import('../view/NotFound.vue')
        }
    ]
})

// 路由拦截
/* routes.beforeEach ((to, from) => {
    console.log(to, from);
}) */

export default routes