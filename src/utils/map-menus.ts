import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1、先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/) // 第二个参数true（表示要不要递归进行查找） 第三个参数（查找匹配到的文件）
  // routeFiles.keys():所有文件路径
  routeFiles.keys().forEach((key) => {
    // console.log(key) // ./analysis/dashboard/dashboard.ts ./analysis/overview/overview.ts ...
    const route = require('../router/main' + key.split('.')[1]) // ../router/main/analysis/dashboard/dashboard
    allRoutes.push(route.default)
  })
  // console.log(allRoutes) // [{path: '/main/analysis/dashboard', name: 'dashboard', children: Array(0), component: ƒ}, {path: '/main/analysis/overview', name: 'overview', children: Array(0), component: ƒ}, length: 10]

  // 2、根据菜单获取需要添加的routes
  // userMenus
  // 第一层 type === 1 -> (取) children
  // 第二层 type === 2 -> (根据) url -> (匹配) route
  // 递归获取路径
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => menu.url === route.path)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}
