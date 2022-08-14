import { createStore } from 'vuex'

import login from './login/login'

import { IRootState } from './types'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'coderwhy',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

// 让vuex获取localStorage中的数据
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
