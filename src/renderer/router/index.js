import Vue from 'vue'
import Router from 'vue-router'
import {getJwtToken} from "../lib/jwtToken";

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'IndexPage',
            component: require('@/views/Index').default,
            children: [
                {
                    path: '/message',
                    name: 'MessagePage',
                    component: require('@/views/Index/Message').default
                },
                {
                    path: '/contact',
                    name: 'ContactPage',
                    component: require('@/views/Index/Contact').default
                },
                {
                    path: '/group',
                    name: 'GroupPage',
                    component: require('@/views/Index/Group').default
                },
                {
                    path: '/music',
                    name: 'MusicPage',
                    component: require('@/views/Index/Music').default
                },
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: require('@/views/Login').default
        },
        {
            path: '/register',
            name: 'Register',
            component: require('@/views/Register').default
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (!getJwtToken() && to.name !== 'Register') {
        next()
        router.push({name: 'Login'})
    } else {
        next()
    }
})


export default router
