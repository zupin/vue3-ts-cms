import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '@/store/types'

import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from '@/service/main/system/system'

/* const pageUrlMap = {
  users: 'api/users/abc/list',
  role: 'api/role/cab/list'
} */

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    pageListData(state) {
      // return state.userList
      return (pageName: string) => {
        // return state[`${pageName}List`] // 报错
        return (state as any)[`${pageName}List`] // 报错
        /* switch (pageName) {
          case 'users':
            return state.usersList
            break
          case 'role':
            return state.roleList
        } */
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, list: any[]) {
      state.goodsList = list
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // console.log(payload) // {pageUrl: '/users/list', queryInfo: {…}}
      // 1、获取pageUrl
      const pageName = payload.pageName
      // 方式1：接口比较统一
      // const pageUrl = `${pageName}/list`

      // 方式2：接口不太规范统一（switch）
      const pageUrl = `/${pageName}/list`
      /* let pageUrl = ''
      switch (pageName) {
        case 'users':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
          break
      } */

      // 方式3：接口不太规范统一（pageUrlMap）
      // let pageUrl = pageUrlMap[pageName]

      // 2、对页面发送请求
      const pageResult = await getPageListData(
        // payload.pageUrl,
        pageUrl,
        payload.queryInfo
      )

      // 3、将数据存储到state中
      // console.log(pageResult)
      const { list, totalCount } = pageResult.data
      // commit('changeUserList', list)
      // commit('changeUserCount', totalCount)
      // commit(`change${pageName.toUpperCase()}List`, list)
      // commit(`change${pageName.toUpperCase()}Count`, totalCount)
      // (方式1)
      /* commit(
        `change${pageName.slice(0, 1).toUpperCase() + pageName.slice(1)}List`,
        list
      )
      commit(
        `change${pageName.slice(0, 1).toUpperCase() + pageName.slice(1)}Count`,
        totalCount
      ) */

      // （方式3）
      const changePageName =
        (pageName.slice(0, 1) as string).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)

      // (方式2)
      /* switch (pageName) {
        case 'users':
          commit('changeUserList', list)
          commit('changeUserCount', totalCount)
          break
        case 'role':
          commit('changeRoleList', list)
          commit('changeRoleCount', totalCount)
          break
      } */
    },
    async deletePageDataAction({ dispatch }, payload: any) {
      // 1、获取pageName和id
      // (1)、pageName -> /users
      // (2)、id -> /users/id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      // 2、调用删除网络请求
      await deletePageData(pageUrl)

      // 3、重新请求最新数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction({ dispatch }, payload: any) {
      // 1、创建数据的请求
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await createPageData(pageUrl, newData)

      // 2、请求最新数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editPageDataAction({ dispatch }, payload: any) {
      // 1、编辑数据的请求
      const { pageName, editData, id } = payload
      // console.log(editData)
      const pageUrl = `/${pageName}/${id}`
      await editPageData(pageUrl, editData)

      // 2、请求最新数据
      dispatch('getPageListAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
