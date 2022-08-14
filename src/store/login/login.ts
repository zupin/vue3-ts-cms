import { Module } from 'vuex'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import router from '@/router'

import { ILoginState } from './types'
import { IRootState } from '../types'
import { IAccount } from '@/service/login/type'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      // console.log(token)
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // console.log('执行accountLoginAction', payload)
      // 1、实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      // console.log(loginResult)
      // console.log(loginResult.data.id, loginResult.data.token)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 2、请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      // console.log(userInfoResult) // 401 (Unauthorized)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3、请求用户菜单
      const userMenusResult = await requestUserMenuByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      // console.log(userMenus)
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4、跳到首页
      router.push('/main')
    },
    /* ,phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction', payload)
    } */
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
