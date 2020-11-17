import Router from 'vue-router'
import Store from '@/store/index'
import Http from '@/service/Http'

const routes = [
    {
        name: 'home',
        path: '/',
        component: () => import('@/components/home'),
        meta: {
            login: false
        },
        children: [
            {
                name: 'login',
                path: 'login',
                component: () => import('@/view/login/login'),
                meta: {
                    login: false
                }
            },
            {
                name: 'page',
                path: 'page',
                component: () => import('@/view/page/page'),
                meta: {
                    login: false
                }
            },
            {
                name: 'table',
                path: 'table',
                component: () => import('@/view/table/table'),
                meta: {
                    login: true
                }
            }
        ]
    }
]

const router = new Router({
    mode: 'history',
    routes
})
router.beforeEach(async(to, from, next) => {
    // const user = await Http.get('/ycl', {});
    const isLogin = !!window.localStorage.getItem('isLogin')
    Http.post('/ycl/login', {
        isLogin
    }).then(({ data }) => {
        Store.commit('changeUser', data)
    })
    if (to.matched.some(item => item.meta.login)) {
        if (!isLogin) {
            next({ name: 'login' })
        } else if (to.name === 'login') {
            window.localStorage.removeItem('isLogin')
            next()
        } else {
            next()
        }
    } else {
        next()
    }
})
export default router
