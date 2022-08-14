import { createApp } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'

// import './service/axios_demo'
// import hyRequest from './service'

// element-plus 全局引入
/* import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css' */

import App from './App.vue'

import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

/* app.component(ElButton.name, ElButton)
app.component(ElForm.name, ElForm)
app.component(ElFormItem.name, ElFormItem)
app.component(ElInput.name, ElInput)
app.component(ElRadio.name, ElRadio) */

// registerApp(app)

/* app.use(function(app: App) {})
app.use({
  install: function(app: App) {}
}) */

// 注册element-plus/其他
app.use(globalRegister)

app.use(router)
app.use(store)
// app.use(ElementPlus)
setupStore()
app.mount('#app')

// console.log(BASE_URL)
// console.log(VUE_APP_BASE_URL)
// console.log(process.env)
// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

/* hyRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('单独请求的config')
      return config
    },
    responseInterceptor: (res) => {
      console.log('单独响应的response')
      return res
    }
  }
}) */

/* interface DataType {
  data: any
  returnCode: string
  success: boolean
} */

/* hyRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET',
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  }) */

/* hyRequest
  .get<DataType>({
    url: '/home/multidata',
    // showLoading: true
    showLoading: false
  })
  // .then((res) => {
  .then(() => {
    // console.log(res.data)
    // console.log(res.returnCode)
    // console.log(res.success)
  }) */

// hyRequest.get()
