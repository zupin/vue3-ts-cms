import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import { mapMenusToRoutes } from '@/utils/map-menus'
import store from '@/store'

import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue')
    // children: [] -> 不能写死，根据userMenus来决定children
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 导航守卫（动态路由可以在导航守卫中添加使用）
router.beforeEach((to) => {
  if (to.path !== '/login') {
    // 不是登录界面
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }

    // console.log(router.getRoutes())

    const userMenus = (store.state as any).login.userMenus

    // userMenus =>（映射到）routes 中
    const routes = mapMenusToRoutes(userMenus)
    // console.log(routes) // [{path: '/main/analysis/overview', name: 'overview', children: Array(0), component: ƒ}, {path: '/main/analysis/dashboard', name: 'dashboard', children: Array(0), component: ƒ} length: 10]

    console.log('changeUserMenus')

    // 将 routes => （添加到） router.main.children中
    // addRoute(parentName: string | symbol, route: RouteRecordRaw): () => void   parentName: 父路由记录，route 应该被添加到的位置  route: 要添加的路由记录
    routes.forEach((route) => {
      router.addRoute('main', route)
    })
  }
})

export default router
