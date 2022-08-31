import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

// 注册element-plus/其他
app.use(globalRegister)

// app.use(router)
app.use(store)
setupStore()
// path: /user => user
app.use(router)

// 全局属性一般习惯用$开头，以作区分
/* app.config.globalProperties.$filters = {
  foo() {
    console.log('foo')
  },
  formatTime(value: string) {
    return '2022-8-19 23:23:23'
  }
} */

app.mount('#app')
