import Vue from 'vue'
import VueRouter from 'vue-router'
//import NotFound from '@/components/pageNotFound'
import Home  from '@/view/home'
import Login from '@/components/magic/login'
import Logout from '@/components/magic/logout'
import BuyAndSell from '@/view/buyAndSell'
import Marketplace from '@/view/marketPlace'

Vue.use(VueRouter);
import {store} from '@/store'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/logout',
        name: 'logout',
        component: Logout
    },
    {
        path: '/marketplace',
        name: 'marketplace',
        component: Marketplace,
        beforeEnter: (to, from, next) => {
            if (store.state.magicLoggedInStatus) {
                next();
                return
            }
            next('/login')
        }
    },
    {
        path: '/buyandsell',
        name: 'buyandsell',
        component: BuyAndSell,
        beforeEnter: (to, from, next) => {
            if (store.state.magicLoggedInStatus) {
                next();
                return
            }
            next('/login')
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
});

export default router
