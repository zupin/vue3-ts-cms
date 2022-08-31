import { Module } from 'vuex'
import { ISystemState } from './types'
import { IRootState } from '@/store/types'

import { getPageListData } from '@/service/main/system/system'

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
      roleCount: 0
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
    }
  }
}

export default systemModule
